from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "🚀 Python App Deployed using Docker & GitHub Actions! is working now"

@app.route("/test")
def test():
    return "🚀 test route working fine"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
