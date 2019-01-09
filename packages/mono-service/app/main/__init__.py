import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
file_path = os.path.abspath(os.getcwd())+"/app.db"

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    db.init_app(app)
    app.app_context().push()
    app.config['DEBUG'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+file_path;
    from app import blueprint
    app.register_blueprint(blueprint)
    return app