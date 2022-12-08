from flask import Flask, request, redirect, url_for, make_response
from flask_mail import Mail, Message
from flask_cors import CORS, cross_origin
# imports for PyJWT authentication
import jwt
from json import dumps, load
from functools import wraps
import sys
from werkzeug.security import generate_password_hash
from pymongo import MongoClient
from flask.json import jsonify
from bson.objectid import ObjectId


from objects.userObject import User
from user import get_user_profile, user_profile_update_user


APP = Flask(__name__)
# Allows cross-origin AJAX, so React can talk to this API
CORS(APP)
APP.config['SECRET_KEY'] = 'your secret key'
APP.config['CORS_HEADERS'] = 'Content-Type'

from auth import auth_register, auth_login, auth_request, auth_reset



########## AUTH ROUTES ##########

# decorator for verifying the JWT 
def token_required(f): 
    '''
    Decorator for verifying the JWT
    Use of JWT references:
    https://www.geeksforgeeks.org/using-jwt-for-user-authentication-in-flask/
    '''
    @wraps(f) 
    def decorated(*args, **kwargs): 
        token = None
        # jwt is passed in the request header 
        if 'x-access-token' in request.headers: 
            token = request.headers['x-access-token'] 
        # return 401 if token is not passed 
        if not token: 
            return jsonify({'message' : 'Token is missing.'}), 401
   
        print("********** DECORATOR - TOKEN **********")
        print(token)
        print("********** DECORATOR - DECODED TOKEN **********")
        print(f"SERET KEY: {APP.secret_key}")
        print(jwt.decode(token, APP.secret_key, algorithms="HS256")) 

        try: 
            # decoding the payload to fetch the stored details 
            data = jwt.decode(token, APP.secret_key, algorithms="HS256") 
            
            # TODO - Obtain id of user from database
            print("********** DATA **********")
            print(data)
            current_user = User.find_user_by_attribute("_id", ObjectId(data['id']))
            print("********** CURRENT USER **********")
            print(current_user)
            #find_user_by_attribute(cls, attribute, user_attribute)
            #current_user = User.query.filter_by(public_id = data['public_id']).first() 
        except: 
            return make_response(
                dumps(
                    {"message": "Token is invalid."}
                ), 
                401
            ) 
        # returns the current logged in users contex to the routes 
        return  f(current_user, *args, **kwargs) 
   
    return decorated 


@APP.route('/auth/register', methods=['POST'])
@cross_origin()
def register_user():
    '''
    Registers a user
    '''
    data = request.get_json()
    result = auth_register(data, APP.secret_key)
    return result


@APP.route('/auth/login', methods=['POST'])
@cross_origin()
def login_user():
    '''
    Logs in a user
    '''
    data = request.get_json()
    result = auth_login(data, APP.secret_key)
    return result


'''
To logout, tokens should be removed from the client side cookie
https://stackoverflow.com/questions/21978658/invalidating-json-web-tokens
@APP.route('/auth/logout', methods=['POST'])
def logout_user():
    data = request.get_json()
    result = auth_logout(APP.secret_key)
    return result
'''



########## FIGHTERS ROUTES ##########
@APP.route('/fighters', methods=['GET'])
@cross_origin()
def get_fighters():
    '''
    Returns list of figher objects
    '''
    users = User.get_all_users()
    print("INSIDE SERVER - USERS")
    print(users)

    if users:
        users_json = User.many_to_json_str(users)
        print(users_json)
        return make_response(
            dumps(
                {
                    "message": "Success.",
                    "data": {"users": users_json}
                }
            ), 
            201
        ) 

    return make_response(
        dumps(
            {
                "message": "Users do not exist in the database.",
                "data": {}
            }
        ), 
        400
    )

    # response = get_user_profile(current_user._id)
    # return response



########## USER ROUTES ##########
@APP.route('/user/profile', methods=['GET'])
@token_required
def user_profile(current_user):
    '''
    Inputs a user object
    Returns user object if valid JWT
    '''
    response = get_user_profile(current_user._id)
    return response


@APP.route('/user/profile/editUser', methods=['PUT'])
@token_required
def user_profile_edit_user(current_user):
    '''
    Takes in a user object
    Edits user object
    '''
    data = request.get_json()
    response = user_profile_update_user(current_user._id, data)
    return response




########## TRAINING ROUTES ##########
@APP.route('/training/upload', methods=['POST'])
def training_upload():
    '''
    Inputs a user object
    Returns user object if valid JWT
    '''
    # data = request.get_json()
    data = request.files['file']
    # filename = secure_filename(file.filename)
    print("INSIDE TRAINING UPLOAD")
    print(data)
    print(type(data))
    print(data.content_length)
    # response = get_user_profile(current_user._id)
    # return response




if __name__ == "__main__":
    APP.run(port=(int(sys.argv[1]) if len(sys.argv) == 2 else 2120), debug=True)

