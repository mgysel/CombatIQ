from flask import Flask, request, redirect, url_for, make_response
from flask_mail import Mail, Message
from flask_cors import CORS
# imports for PyJWT authentication
import jwt
from json import dumps, load
from functools import wraps
import sys
from werkzeug.security import generate_password_hash
from pymongo import MongoClient

from objects.fighterObject import Fighter

APP = Flask(__name__)
# Allows cross-origin AJAX, so React can talk to this API
CORS(APP)


APP.config['SECRET_KEY'] = 'your secret key'

########## FIGHTERS ROUTES ##########
@APP.route('/fighters', methods=['GET'])
def get_fighters():
    '''
    Returns list of figher objects
    '''
    fighters = Fighter.get_all_fighters()
    print("INSIDE SERVER - FIGHTERS")
    print(fighters)

    if fighters:
        fighters_json = Fighter.many_to_json_str(fighters)
        print("FIGHTERS JSON: ")
        print(fighters_json)
        return make_response(
            dumps(
                {
                    "message": "Success.",
                    "data": {"fighters": fighters_json}
                }
            ), 
            201
        ) 

    return make_response(
        dumps(
            {
                "message": "Fighters do not exist in the database.",
                "data": {}
            }
        ), 
        400
    )

    # response = get_user_profile(current_user._id)
    # return response

# def get_product(product_id):
#     '''
#     Retrieves a single product per an id.
#     '''
#     try:
#         obj_id = ObjectId(product_id)
#         product = Product.get_product({"_id": { "$eq": ObjectId(product_id)}})
#         if product:
#             return {"data": product.to_json_str(), "message": "Success."}, 200
#         return {"message": "Could not find product."}, 404
#     except:
#         return {"message": "Could not find product."}, 404

if __name__ == "__main__":
    APP.run(port=(int(sys.argv[1]) if len(sys.argv) == 2 else 2119), debug=True)

