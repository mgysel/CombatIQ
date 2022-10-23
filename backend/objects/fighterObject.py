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

class Fighter:
    '''
    User class that contains basic user info/methods
    '''
    def __init__(self, _id, name, age, weight):
        self._id = _id
        self.name = name
        self.age = age
        self.weight = weight

    @staticmethod
    def from_json(fighter_json):
        '''
        User json object to User Object
        '''
        if fighter_json != None:
            properties = ['name', 'age', 'weight']
            for prop in properties:
                if prop not in fighter_json:
                    return None
            _id = None
            if '_id' in fighter_json:
                _id = fighter_json['_id']
            return Fighter(_id, fighter_json['name'], fighter_json['age'], fighter_json['weight'])

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
    def many_to_json(fighters):
        '''
        Converts a list of fighters to a list of python inbuilt objects.
        '''
        l = []
        for fighter in fighters:
            l.append(fighter.to_json())
        return l

    @staticmethod
    def many_to_json_str(fighters):
        '''
        Converts a list of Fighters to a list of strings.
        '''
        l = []
        for fighter in fighters:
            l.append(fighter.to_json_str())
        return l   

    def to_json(self):
        '''
        Converts one Product to a python inbuilt object.
        '''
        obj = self.__dict__
        if obj['_id'] == None:
            del obj['_id']
        return obj 

    def to_json_str(self):
        '''
        Converts one Fighter to a string.
        '''
        obj = self.__dict__
        if obj['_id'] == None:
            del obj['_id']
        else:
            obj['_id'] = str(obj['_id'])
        return obj

    def get_all_fighters():
        '''
        Returns list of User objects from the database
        '''
        db = MongoWrapper().client['CombatIQ']
        coll = db['Fighters']
        fighters = []
        for fighter_json in coll.find():
            print("FIGHTER JSON")
            print(fighter_json)
            fighter = Fighter.from_json(fighter_json)
            fighters.append(fighter)
        return fighters

    # @staticmethod
    # def insert_one(user):
    #     '''
    #     Inserts a user object into the database
    #     '''
    #     json_obj = user.to_json()
    #     if json_obj != None:
    #         db = MongoWrapper().client['vinyl_store']
    #         coll = db['users']
    #         try:
    #             inserted = coll.insert_one(json_obj)
    #             return inserted.inserted_id
    #         except:
    #             return None