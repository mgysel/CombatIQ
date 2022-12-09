from pymongo import MongoClient
import json

connection_string = 'mongodb+srv://admin:admin@cluster0.xcwnt6i.mongodb.net/?retryWrites=true&w=majority'

class CredentialsError(Exception):
    def __init__(self, message):
        self.message = message

class MongoWrapper:
    '''
    Wrapper class for ensuring one instance of MongoClient client, as per the Borg pattern.
    Credentials file is checked for valid properties.
    '''
    __shared_state = {}
    def __init__(self):
        self.__dict__ = self.__shared_state
        try:
            self.client = MongoClient(connection_string)
        except:
            raise CredentialsError("Credentials not valid")