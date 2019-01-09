from app.main import db
from app.main.models.user import Contact


def add_contact(name, email, phone, message):
    new_user = Contact(name=name, email=email, phone=phone, message=message)
    save_changes(new_user)
    return 201, {'status', 'Success'}


def get_all_contact():
    data = Contact.query.get(1)
    return data.name


def save_changes(data):
    db.session.add(data)
    db.session.commit()