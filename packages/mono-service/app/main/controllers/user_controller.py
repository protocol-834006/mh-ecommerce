from app.main.services.user_service import add_contact, get_all_contact
from flask_restplus import Resource, reqparse

parser = reqparse.RequestParser()

parser.add_argument('name', type=str, help='Name is required')
parser.add_argument('email', type=str, help='Email is required')
parser.add_argument('phone', type=str, help='Phone number is required')
parser.add_argument('message', type=str, help='Message is required')


class UserController(Resource):
    def get(self):
        name = get_all_contact()
        return {
            'status': 200,
            'name': name
        }

    def post(self):
        args = parser.parse_args()
        name = args['name']
        email = args['email']
        phone = args['phone']
        message = args['message']
        if name and email and phone and message:
            add_contact(name, email, phone, message)
            return {
                'status': 200,
                'content': {
                    'name': name,
                    'email': email,
                    'phone': phone,
                    'message': message
                }
            }
        else:
            return {
                'status': 400,
                'message': 'All fields are required'
            }
