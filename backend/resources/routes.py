from server.instance import server
from flask_restx import Resource

app, api = server.app, server.api

@app.route('/')
@app.route('/index')
def index():
    return "Backend Up and Running"


@api.route('/users', methods=['GET'])
class Users(Resource):
    def get(self):
        return f"List of {self.__class__.__name__}"

@api.route('/subjects', methods=['GET'])
class Subjects(Resource):
    def get(self):
        return f"List of {self.__class__.__name__}"


@api.route('/contents', methods=['GET'])
class Contents(Resource):
    def get(self):
        return f"List of {self.__class__.__name__}"


@api.route('/quizzes', methods=['GET'])
class Quizzes(Resource):
    def get(self):
        return f"List of {self.__class__.__name__}"


@api.route('/assessments', methods=['GET'])
class Assessment(Resource):
    def get(self):
        return f"List of {self.__class__.__name__}"
