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
    def __init__(self, _id, email, password, first_name, last_name, age, weight):
        self._id = _id
        self.first_name = first_name
        self.last_name = last_name 
        self.email = email
        self.password = password
        self.age = age
        self.weight = weight

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

    @staticmethod
    def insert_one(user):
        '''
        Inserts a user object into the database
        '''
        json_obj = user.to_json()
        if json_obj != None:
            db = MongoWrapper().client['CombatIQ']
            coll = db['Fighters']
            try:
                inserted = coll.insert_one(json_obj)
                return inserted.inserted_id
            except:
                return None

    @classmethod
    def find_fighter_by_attribute(cls, attribute, user_attribute):
        '''
        Finds a user by a specific attribute
        Returns user object
        '''
        db = MongoWrapper().client['CombatIQ']
        coll = db['Fighters']
        fighter_json = coll.find_one({ attribute: user_attribute })

        if fighter_json:
            user = Fighter.from_json(fighter_json)
            return user
        return None

    @classmethod
    def find_fighters_from_search(cls, query, page):
        """
        Returns users with matching name
        """
        PAGE_SIZE = 10
        filter = {
            '$or':
                [
                    {'first_name': {'$regex': f".*{query}.*", '$options': 'i'}},
                    {'last_name': {'$regex': f".*{query}.*", '$options': 'i'}},
                    {'email': {'$regex': f".*{query}.*", '$options': 'i'}}
                ]
        }
        skip = (int(page)-1)*PAGE_SIZE
        limit = PAGE_SIZE

        db = MongoWrapper().client['CombatIQ']
        coll = db['Fighters']
        results = coll.find(filter=filter,skip=skip,limit=limit).collation({'locale':'en'}).sort([('first_name',1),('last_name',1)])

        return [Fighter.from_json(x) for x in results]

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

    ########## Checking user validity ##########
    @classmethod
    def unused_email(cls, user_email):
        '''
        Determines if the supplied email is unused
        Returns True if email unused
        Returns False if email taken
        '''
        db = MongoWrapper().client['CombatIQ']
        coll = db['users']
        return(coll.find_one({ 'email': user_email }) is None)

    @classmethod
    def valid_email(cls, email):
        '''
        Checks that email is valid - per regex below
        Checks that email is not None. 
        Original code from:
        https://www.geeksforgeeks.org/check-if-email-address-valid-or-not-in-python/
        '''
        regex = r'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'

        # Compares email to regex format
        if email is not None and re.search(regex, email):
            return True

        return False

    @classmethod
    def valid_password(cls, password):
        '''
        Checks that password is valid - > 6 characters
        Checks that password is not None
        '''
        if password is not None and len(password) > 6:
            return True

        return False

    @classmethod
    def valid_matching_passwords(cls, password, confirm_password):
        '''
        Checks that passwords match
        Checks that confirm password is not None
        '''
        return confirm_password is not None and password == confirm_password

    @classmethod
    def valid_name(cls, name):
        '''
        Checks that name is valid - between 1 and 50 characteds
        Checks that name is not None. 
        Original code from:
        https://www.geeksforgeeks.org/check-if-email-address-valid-or-not-in-python/
        '''
        if name is not None and len(name) >= 1 and len(name) <= 50:
            return True

        return False

    @classmethod
    def is_valid_user(cls, user):
        '''
        Determines if user object is valid
        Returns True if valid, False otherwise
        '''
        attributes = ['_id', 'email', 'password', 'first_name', 'last_name', 'payment_methods', 'shipping_address', 'spotify_id', 'cart', 'role', 'reset_code']
        for attribute in attributes:
            if not hasattr(user, attribute):
                return False
        return True

    @classmethod
    def is_valid_id(cls, _id):
        '''
        Determines if _id is 24-character hex string
        '''
        return len(_id) == 24