from flask_script import Manager, Command
from flask_migrate import Migrate, MigrateCommand
from app.main import create_app, db

app = create_app()
migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)

@manager.command
def run():
    app.run()

if __name__ == '__main__':
    manager.run()