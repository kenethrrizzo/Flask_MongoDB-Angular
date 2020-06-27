from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)

app.config['MONGO_URI']='mongodb://localhost/pythondb'
mongo = PyMongo(app)
db = mongo.db.users
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/users', methods=['POST'])
def create_user():
    id = db.insert({
        "name": request.json["name"],
        "email": request.json["email"],
        "password": request.json["password"],
    })
    return jsonify(str(ObjectId(id)))

@app.route('/api/users', methods=['GET'])
def get_users():
    users = []
    for doc in db.find():
        users.append({
            "_id": str(ObjectId(doc["_id"])),
            "name": doc["name"],
            "email": doc["email"],
            "password": doc["password"]
        })
    return jsonify(users)

@app.route('/api/users/<id>', methods=['GET'])
def get_user_by_id(id):
    doc = db.find_one({"_id": ObjectId(id)})
    if doc != None:
        user = {
            "_id": str(ObjectId(doc["_id"])),
            "name": doc["name"],
            "email": doc["email"],
            "password": doc["password"]
        }
        return jsonify(user)
    else:
        return jsonify({"message": "user not found"})

@app.route('/api/users/<name>', methods=['GET'])
def get_user_by_name(name):
    doc = db.find_one({"name": name})
    if doc != None:
        user = {
            "_id": str(ObjectId(doc["_id"])),
            "name": doc["name"],
            "email": doc["email"],
            "password": doc["password"]
        }
        return jsonify(user)
    else:
        return jsonify({"message": "user not found"})


@app.route('/api/users/<id>', methods=['PUT'])
def update_user(id):
    doc = db.find_one_and_update({"_id": ObjectId(id)}, {"$set": {
            "name": request.json["name"],
            "email": request.json["email"],
            "password": request.json["password"]}})    
    if doc != None:
        return get_users()
    else:
        return jsonify({"message": "user not found"})
              
@app.route('/api/users/<id>', methods=['DELETE'])
def delete_user(id):
    doc = db.find_one_and_delete({"_id": ObjectId(id)})
    if doc != None:
        return get_users()
    return jsonify({"message": "user not found"})

if __name__ == "__main__": # Inicializa
    app.run(debug=True)