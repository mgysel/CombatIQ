from flask import Flask, request, redirect, url_for, make_response, jsonify
from json import dumps
from werkzeug.security import generate_password_hash, check_password_hash
# imports for PyJWT authentication
import jwt

from bson.objectid import ObjectId

from objects.userObject import User


def get_user_profile(objectId):
    '''
    Returns user from the database
    '''
    user = User.find_user_by_attribute("_id", objectId)

    if user:
        return make_response(
            dumps(
                {
                    "message": "success",
                    "data": {
                        "user": user.to_json_str()
                    }
                }
            ), 
            201
        ) 

    return make_response(
        dumps(
            {
                "message": "User does not exist in the database.",
                "data": {}
            }
        ), 
        400
    ) 


def user_profile_update_user(objectId, data):
    '''
    Updates user in the User database
    '''
    fields = ['email', 'first_name', 'last_name', 'gender', 'age', 'height', 'weight', 'hand', 'weight_class', 'club', 'image']
    for field in fields:
        if not field in data:
            return make_response(
                dumps(
                    {
                        "message": "User object is invalid.",
                        "data": {}
                    }
                ), 
                400
            ) 
    
    if User.valid_email(data['email']) and User.valid_name(data['first_name']) and User.valid_name(data['last_name']):
        values = { 
            'email': data['email'],
            'first_name': data['first_name'],
            'last_name': data['last_name'],
            'gender': data['gender'],
            'age': data['age'],
            'height': data['height'],
            'weight': data['weight'],
            'hand': data['hand'],
            'weight_class': data['weight_class'],
            'club': data['club'],
            'image': data['image']
            
        }
        
        User.update_user_attributes('_id', objectId, values)
        
        return make_response(
            dumps(
                {
                    "message": "Success.",
                    "data": {}
                }
            ), 
            201
        ) 
        
    return make_response(
        dumps(
            {
                "message": "User object is invalid.",
                "data": {}
            }
        ), 
        400
    ) 

def user_profile_update_user_password(objectId, data):
    '''
    Updates user in the User database
    '''
    fields = ['old_password', 'new_password']
    for field in fields:
        if not field in data:
            return make_response(
                dumps(
                    {
                        "message": "User object is invalid.",
                        "data": {}
                    }
                ), 
                400
            ) 

    old_password = data['old_password']
    new_password = data['new_password']

    # Obtain user from database
    user = User.find_user_by_attribute("_id", objectId)
    if user:
        if check_password_hash(user.password, old_password): 
            User.update_user_attribute("_id", objectId, "password", generate_password_hash(new_password))
            
            return make_response(
                dumps(
                    {
                        "message": "success",
                        "data": {}
                    }
                ), 
                201
            ) 
        else:
            # returns 403 if password is wrong 
            return make_response(
                dumps(
                    {
                        "message": "Incorrect password.",
                        "data": {}
                    }
                ), 
                403
            ) 

    return make_response(
        dumps(
            {
                "message": "User does not exist in the database.",
                "data": {}
            }
        ), 
        400
    ) 

