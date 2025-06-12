from flask import Flask, render_template, request
import requests

#app = Flask(__name__)
app = Flask(__name__, static_folder='static',template_folder='templates')

@app.route("/")
def home():
    response = requests.get("http://backend:5001/api/data")
    data = response.json()
    return render_template("index.html", data=data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
