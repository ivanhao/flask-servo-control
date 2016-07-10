from flask import Flask, session, escape, render_template, request, redirect
from flask_restful import reqparse, abort, Api, Resource
from datetime import timedelta
import commands,json,os

NAME = 'admin' 
PASS = '123456'
app = Flask(__name__)
api = Api(app)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
#session.permanent = True
app.permanent_session_lifetime = timedelta(minutes=5)

if not os.path.exists('./data.json'):
    SERVOS = {
        'servo1': 0,
        'servo2': 0,
        'servo3': 0,
        'servo4': 0,
        'servo5': 0,
        'servo6': 0,
        'servo7': 0,
        'servo8': 0,
        'servo9': 0,
        'servo10': 0,
        'servo11': 0,
        'servo12': 0,
        'servo13': 0,
        'servo14': 0,
        'servo15': 0,
        'servo16': 0,
    }
    json.dump(SERVOS, open('data.json', 'w'))
SERVOS = json.load(open('data.json', 'r'))

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
    if servo_id not in SERVOS:
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
        if (name == NAME and passwd == md5(PASS)):
            session['name'] = 'admin'
            return {"data":"success"}
            # return redirect('/index')
        else:
            return {"data":"error"}
            # return redirect('/login')
    def post(self):
        args = parser.parse_args()
        name = args['name']
        passwd = args['passwd']
        if (name == NAME and passwd == md5(PASS)):
            session['name'] = 'admin'
            return {"data":"success"}
            # return redirect('/index')
        else:
            return {"data":"error"}

class Logout(Resource):
    def get(self):
        # remove the username from the session if it's there
        session.pop('name', None)
        return {"data":"ok"}
class Check(Resource):
    def get(self):
        if 'name' in session:
            return {"data":"yes"}
        else:
            return {"data":"no"}

# Servo
# shows a single servo item and lets you delete a servo item
class Servo(Resource):
    def get(self, servo_id):
        if 'name' in session:
            # print session['name']
            abort_if_servo_doesnt_exist(servo_id)
            return {servo_id:SERVOS[servo_id]}
            
        return {"data":"not login"}

#    def delete(self, servo_id):
#        abort_if_servo_doesnt_exist(servo_id)
#        del SERVOS[servo_id]
#        return '', 204

    def put(self, servo_id):
        if 'name' in session:
            args = parser.parse_args()
            data = servo_id + ":" + args['data']+"  "
            SERVOS[servo_id] = int(args['data'])
            json.dump(SERVOS, open('data.json', 'w'))
            #put commands below:
            #ls = commands.getoutput("ls")
            # print SERVOS
            print data
            return data, 201
        else:
            return {"data":"not login"}

# ServoList
# shows a list of all servos, and lets you POST to add new datas
class ServoList(Resource):
    def get(self):
        if 'name' in session:
            return SERVOS
        else:
            return {"data":"not login"}

    # def post(self):
    #     args = parser.parse_args()
    #     servo_id = int(max(SERVOS.keys()).lstrip('servo')) + 1
    #     servo_id = 'servo%i' % servo_id
    #     SERVOS[servo_id] = args['data']
    #     return SERVOS[servo_id], 201

##
## Actually setup the Api resource routing here
##
api.add_resource(ServoList, '/servos')
api.add_resource(Servo, '/servos/<servo_id>')
api.add_resource(Login, '/rlogin')
api.add_resource(Logout, '/rlogout')
api.add_resource(Check, '/check')
##################################################################
#               Web interface                                   #
#################################################################
@app.route('/')
def main():
    return redirect('/index')

@app.route('/index')
def index():
    return render_template('index.html')
@app.route('/login')
def log():
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0',port=4000)
