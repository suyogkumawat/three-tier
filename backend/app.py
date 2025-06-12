from flask import Flask, jsonify
import psycopg2

app = Flask(__name__)

def get_db_data():
    try:
        connection = psycopg2.connect(
            dbname="mydb", user="admin", password="admin", host="db"
        )
        cursor = connection.cursor()
        cursor.execute("SELECT name FROM sample LIMIT 1;")
        result = cursor.fetchone()
        return result[0] if result else "No Data"
    except Exception as e:
        return f"DB Error: {str(e)}"
    finally:
        if connection:
            connection.close()

@app.route("/api/data")
def api_data():
    name = get_db_data()
    return jsonify({"message": f"Data from DB: {name}"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)