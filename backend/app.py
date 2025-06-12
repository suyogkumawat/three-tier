from flask import Flask
import os
import psycopg2

app = Flask(__name__)

@app.route('/')
def index():
    db_host = os.getenv("DB_HOST", "localhost")
    db_user = os.getenv("DB_USER", "admin")
    db_pass = os.getenv("DB_PASS", "secret")
    try:
        conn = psycopg2.connect(host=db_host, user=db_user, password=db_pass, dbname="mydb")
        cur = conn.cursor()
        cur.execute("SELECT version();")
        db_version = cur.fetchone()
        return f"Connected to DB: {db_version}"
    except Exception as e:
        return f"DB connection failed: {str(e)}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
