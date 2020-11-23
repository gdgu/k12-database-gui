from flask import render_template, flash, redirect, url_for, request
from app import app
from app.grid import PythonGrid
from app.data import PythonGridDbData
from app.export import PythonGridDbExport

import sqlalchemy

engine = sqlalchemy.create_engine(
    app.config['PYTHONGRID_DB_TYPE'] + '://' + app.config['PYTHONGRID_DB_USERNAME'] + ':' + app.config[
        'PYTHONGRID_DB_PASSWORD'] + '@' + app.config['PYTHONGRID_DB_HOSTNAME'] + '/' + app.config[
        'PYTHONGRID_DB_NAME'] + '?unix_socket=' + app.config['PYTHONGRID_DB_SOCKET']).connect()


@app.route('/')
def index():
    grid = PythonGrid('SELECT * FROM k12', 'uid', 'k12')

    grid.set_caption('Details')
    grid.set_col_title('uid', 'Id')
    grid.set_col_title('field1', 'School Name')
    grid.set_col_title('field2', 'City')
    grid.set_col_title('field3', 'Owners Name')
    grid.set_col_title('field4', 'Contact Number')
    grid.set_col_title('field5', 'Student Strength as on May 2019')
    grid.set_col_title('field6', '% of Education Service Fee')
    grid.set_col_hidden(['uid'])
    grid.set_pagesize(50)
    grid.set_dimension(1000, 400)
    grid.enable_search(True)
    grid.enable_rownumbers(True)
    grid.enable_pagecount(True)
    grid.enable_export()

    return render_template('grid.html', title='K12', grid=grid)



@app.route('/data', methods=['GET', 'POST'])
def data():
    data = PythonGridDbData('SELECT * FROM k12')
    rv = data.getData()
    return rv 

@app.route('/export', methods=['GET', 'POST'])
def export():
    exp = PythonGridDbExport('SELECT * FROM k12')
    return exp.export()

@app.route('/delete/<id>', methods=['GET', 'POST'])
def delete_id(id):
    query = "DELETE FROM k12 WHERE uid = " + id

    with engine.connect() as con:
        rs = con.execute(query)
    return "OK"

@app.route('/add/sub', methods=['GET','POST'])
def add_id():
    
    sname = request.args['sname']
    city = request.args['city']
    oname = request.args['oname']
    contactno = request.args['contactno']
    students = request.args['students']
    perc = request.args['perc']


    query = """INSERT INTO k12 (field1, field2, field3, field4, field5, field6) VALUES
    ('%s', '%s', '%s', '%s', '%s', '%s')""" % (sname, city, oname, contactno, students, perc)

    with engine.connect() as con:
        rs = con.execute(query)
    return redirect(url_for('index'))
    

@app.route('/add', methods=['GET', 'POST'])
def add_serv():
    data = {}
    return render_template('add.html', data=data)


@app.route('/edit/<id>', methods=['GET', 'POST'])
def edit_serv(id):

    query = 'SELECT * FROM k12 WHERE uid=' + id
    
    data = {}

    with engine.connect() as con:
        rs = con.execute(query)

        for x in rs:
            data["id"] = x[0]
            data["field1"] = x[1]
            data["field2"] = x[2]
            data["field3"] = x[3]
            data["field4"] = x[4]
            data["field5"] = x[5]
            data["field6"] = x[6]

    return render_template('edit.html', data=data)


@app.route('/edit/sub', methods=['GET', 'POST'])
def edit_id():
    idx = request.args['id']
    sname = request.args['sname']
    city = request.args['city']
    oname = request.args['oname']
    contactno = request.args['contactno']
    students = request.args['students']
    perc = request.args['perc']

    query = """UPDATE k12 SET 
    field1 = '%s', field2 = '%s', field3 = '%s', field4 = '%s', field5 = '%s', field6 = '%s'
    WHERE uid = %s"""
    query = query % (sname, city, oname, contactno, students, perc, idx)

    with engine.connect() as con:
        rs = con.execute(query)
    return redirect(url_for('index'))
