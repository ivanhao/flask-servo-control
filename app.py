from flask import Flask, session, escape, render_template, request, redirect
from flask_restful import reqparse, abort, Api, Resource
from datetime import timedelta
import commands,json

NAME = 'admin' 
PASS = '123456'
app = Flask(__name__)
api = Api(app)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
#session.permanent = True
app.permanent_session_lifetime = timedelta(minutes=5)

TODOS = {
    'servo1': {'data': 'build an API'},
    'servo2': {'data': 'servo2-content'},
    'servo3': {'data': 'profit!'},
}

def md5(str):
    import hashlib
    import types
    if type(str) is types.StringType:
        m = hashlib.md5()   
        m.update(str)
        return m.hexdigest()
    else:
        return ''

def abort_if_servo_doesnt_exist(servo_id):
    if servo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(servo_id))

parser = reqparse.RequestParser()
parser.add_argument('data')
parser.add_argument('name')
parser.add_argument('passwd')

class Login(Resource):
    def get(self):
        args = parser.parse_args()
        name = args['name']
        passwd = args['passwd']
        print name
        print passwd
        if (name == NAME and passwd == md5(PASS)):
            session['name'] = 'admin'
            print session['name']
            return "success"

class Logout(Resource):
    def get(self):
        # remove the username from the session if it's there
        session.pop('name', None)
        return "OK"


# Servo
# shows a single servo item and lets you delete a servo item
class Servo(Resource):
    def get(self, servo_id):
        if 'name' in session:
            print session['name']
            abort_if_servo_doesnt_exist(servo_id)
            ls = commands.getoutput("ls")
            return str(TODOS[servo_id]) + "<br>" + ls
            
        return 'You are not logged in'

#    def delete(self, servo_id):
#        abort_if_servo_doesnt_exist(servo_id)
#        del TODOS[servo_id]
#        return '', 204

    def put(self, servo_id):
        if 'name' in session:
            args = parser.parse_args()
            data = {'data': args['data']}
            TODOS[servo_id] = data
            return data, 201
        else:
            return "error"

# ServoList
# shows a list of all servos, and lets you POST to add new datas
class ServoList(Resource):
    def get(self):
        if 'name' in session:
            return TODOS

    def post(self):
        args = parser.parse_args()
        servo_id = int(max(TODOS.keys()).lstrip('servo')) + 1
        servo_id = 'servo%i' % servo_id
        TODOS[servo_id] = {'data': args['data']}
        return TODOS[servo_id], 201

##
## Actually setup the Api resource routing here
##
api.add_resource(ServoList, '/servos')
api.add_resource(Servo, '/servos/<servo_id>')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')

##################################################################
#               Web interface                                   #
#################################################################
@app.route('/')
def main():
    return redirect('/index')

@app.route('/index')
def index():
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=4000)
