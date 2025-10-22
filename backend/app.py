from flask import Flask,request,jsonify
from flask_cors import CORS
import os 

app=Flask(__name__)
CORS(app)
@ app.route('/')
def home():
    return "Ai emoji Generator Backend is running "

@ app.route('/generate_emoji',methods=['POST'])
def generate_emoji():
    data =request.get_json()
    if not data or 'prompt' not in  data or not data['prompt'].strip():
        return jsonify({"error " : "Please provide prompt in json body"}),400
    user_prompt=data['prompt'].strip()
    response={
        "message":f"Received your prompt {user_prompt}",
        "emoji": "😀",       # Dummy emoji
        "emoji_url":None      # Place for future ai emoji 

    }
    return jsonify(response),200
if __name__=="__main__":
    app.run(debug=True)