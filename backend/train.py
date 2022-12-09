from flask import Flask, request, redirect, url_for, make_response, jsonify
from json import dumps
from werkzeug.security import generate_password_hash, check_password_hash

from bson.objectid import ObjectId
from objects.trainObject import Train

def train_add_train(data):
    '''
    Updates user in the User database
    '''
    fields = ['user_id', 'title', 'date', 'description', 'video']
    for field in fields:
        if not field in data:
            return make_response(
                dumps(
                    {
                        "message": "Train object is invalid.",
                        "data": {}
                    }
                ), 
                400
            ) 
    
    train = Train(None, data['user_id'], data['title'], data['date'], data['description'], data['video'])    
    Train.insert_one(train)
        
    return make_response(
        dumps(
            {
                "message": "Success.",
                "data": {}
            }
        ), 
        201
    ) 

def training_get_trainings(objectId):
    '''
    Returns user from the database
    '''
    trainings = Train.find_trains_from_search(str(objectId))

    if trainings:
        return make_response(
            dumps(
                {
                    "message": "success",
                    "data": Train.many_to_json_str(trainings)
                }
            ), 
            201
        ) 

    return make_response(
        dumps(
            {
                "message": "Trainings do not exist in the database.",
                "data": {}
            }
        ), 
        400
    ) 