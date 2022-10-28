# CombatIQ
User Interface for combat analytics.

The frontend React application can be found in the `frontend` directory. Navigate into this directory, then set up and run the application as follows:
```sh
$ npm install
$ npm start
```

The backend Flask application can be found in the `backend` directory. Navigate into this directory, then set up and run the application as follows:
```sh
$ pip3 install -r requirements.txt
$ python3 server.py
```

Note that the manual set up commands must be run from the respective directories of the frontend and backend applications.


## Configuration
Configuration options for this system should be placed in a `credentials.json` file inside the `backend/credentials/` directory. This JSON file should contain the following fields:
* `username` is the username of the MongoDB database account
* `password` is the password of the MongoDb database account
* `connection_string` is the MongoDB URI connection string used to connect to the database
