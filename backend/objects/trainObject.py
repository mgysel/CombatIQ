import pymongo

# If we use the Flask Configuration
'''
import sys
sys.path
sys.path.append(".")
sys.path.append("..")
sys.path.append("./flask-app")
#from server import mongo
'''

from werkzeug.security import generate_password_hash
from objects.MongoWrapper import MongoWrapper
from bson import ObjectId
import re

class Train:
    '''
    User class that contains basic user info/methods
    '''
    def __init__(self, _id, user_id, title, date, description, video):
        self._id = _id
        self.user_id = user_id
        self.title = title
        self.date = date
        self.description = description
        self.video = video

    @staticmethod
    def insert_one(train):
        '''
        Inserts a user object into the database
        '''
        json_obj = train.to_json()
        print(json_obj)
        if json_obj != None:
            db = MongoWrapper().client['CombatIQ']
            coll = db['Training']
            try:
                inserted = coll.insert_one(json_obj)
                return inserted.inserted_id
            except:
                return None

    @classmethod
    def find_train_by_attribute(cls, attribute, train_attribute):
        '''
        Finds a user by a specific attribute
        Returns user object
        '''
        db = MongoWrapper().client['CombatIQ']
        coll = db['Training']
        train_json = coll.find_one({ attribute: train_attribute })

        if train_json:
            train = Train.from_json(train_json)
            return train
        return None

    @classmethod
    def find_trains_from_search(cls, user_id):
        """
        Returns users with matching name
        """
        filter = {'user_id': user_id}

        db = MongoWrapper().client['CombatIQ']
        coll = db['Training']
        results = coll.find(filter=filter)
        print("INSIDE FIND TRAINS FROM SEARCH")
        print("results: ", results)

        return [Train.from_json(x) for x in results]

    @classmethod
    def update_train_attribute(cls, query_attribute, query_train_attribute, attribute, train_attribute):
        '''
        Queries for user by query_attribute = query_user_attribute
        Updates attribute of user to user_attribute
        '''
        query = { query_attribute: query_train_attribute }
        values = { "$set": { attribute: train_attribute } }
        db = MongoWrapper().client['CombatIQ']
        coll = db['Training']
        coll.update_one(query, values)

    @classmethod
    def update_train_attributes(cls, query_attribute, query_train_attribute, values):
        '''
        Queries for user by query_attribute = query_user_attribute
        Updates attribute of user to user_attribute
        '''
        query = { query_attribute: query_train_attribute }
        values = { "$set": values }
        db = MongoWrapper().client['CombatIQ']
        coll = db['Training']
        coll.update_one(query, values)

    # def to_json(self):
    #     '''
    #     User object to json object
    #     NOTE: converts ObjectId to string
    #     '''
    #     obj = self.__dict__
    #     if obj['_id'] == None:
    #         del obj['_id']
    #     else:
    #         obj['_id'] = str(obj['_id'])
    #     return obj

    @staticmethod
    def from_json(train_json):
        '''
        User json object to Train Object
        '''
        if train_json != None:
            properties = [
                'user_id', 'title', 'date', 'description', 'video'
            ]
            for prop in properties:
                if prop not in train_json:
                    return None
            _id = None
            if '_id' in train_json:
                _id = train_json['_id']
            return Train(
                _id, 
                train_json['user_id'], 
                train_json['title'], 
                train_json['date'], 
                train_json['description'], 
                train_json['video'],
            )

    @staticmethod
    def many_to_json(trainings):
        '''
        Converts a list of users to a list of python inbuilt objects.
        '''
        l = []
        for train in trainings:
            l.append(train.to_json())
        return l

    @staticmethod
    def many_to_json_str(trains):
        '''
        Converts a list of Users to a list of strings.
        '''
        l = []
        for train in trains:
            l.append(train.to_json_str())
        return l   

    def to_json(self):
        '''
        Converts one Train to a python inbuilt object.
        '''
        obj = self.__dict__
        if obj['_id'] == None:
            del obj['_id']
        return obj 

    def to_json_str(self):
        '''
        Converts one Train to a json string.
        '''
        obj = self.__dict__
        if obj['_id'] == None:
            del obj['_id']
        else:
            obj['_id'] = str(obj['_id'])
        return obj