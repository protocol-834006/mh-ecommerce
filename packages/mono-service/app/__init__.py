from .main.controllers.user_controller import UserController
from .main.controllers.test_controller import TestController
from flask_restplus import Api
from flask import Blueprint

blueprint = Blueprint('user_controller',__name__, url_prefix='/api')

api = Api(blueprint, catch_all_404s=True)
api.add_resource(UserController, '/show')
api.add_resource(TestController, '/test')


# class CustomExpection(Exception):
#     pass
#
# @api.errorhandler(CustomExpection)
# def default_error(error):
#     return {
#         'message': error
#     }