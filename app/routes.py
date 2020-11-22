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
    grid = PythonGrid('SELECT * FROM gdgu', 'uid', 'gdgu')

    grid.set_caption('Details')
    grid.set_col_title('uid', 'ID')
    grid.set_col_title('field1', 'OWNER/S NAME')
    grid.set_col_title('field2', 'CONTACT NO.')
    grid.set_col_title('field3', 'STUDENT STRENGTH AS ON MAY 2019')
    grid.set_col_title('field4', '% OF EDUCATION SERVICE FEE')
    grid.set_pagesize(20)
    grid.set_dimension(800, 400)
    grid.enable_search(True)
    grid.enable_rownumbers(True)
    grid.enable_pagecount(True)
    grid.enable_export()

    return render_template('grid.html', title='GDGU', grid=grid)



@app.route('/data', methods=['GET', 'POST'])
def data():
    data = PythonGridDbData('SELECT * FROM gdgu')
    rv = data.getData()
    return rv 

@app.route('/export', methods=['GET', 'POST'])
def export():
    exp = PythonGridDbExport('SELECT * FROM gdgu')
    return exp.export()

@app.route('/delete/<id>', methods=['GET', 'POST'])
def delete_id(id):
    query = "DELETE FROM `gdgu` WHERE `uid` = " + id

    with engine.connect() as con:
        rs = con.execute(query)
    return "OK"

@app.route('/add/sub', methods=['GET','POST'])
def add_id():
    
    oname = request.args['oname']
    contactno = request.args['contactno']
    students = request.args['students']
    perc = request.args['perc']


    query = "INSERT INTO `gdgu` (`field1`, `field2`, `field3`, `field4`) VALUES ('"+oname+"', '"+contactno+"',  '"+students+"',  '"+perc+"')"

    with engine.connect() as con:
        rs = con.execute(query)
    return redirect(url_for('index'))
    

@app.route('/add', methods=['GET', 'POST'])
def add_serv():
    
    data = {
        
    }
    return render_template('add.html', data=data)


@app.route('/edit/<id>', methods=['GET', 'POST'])
def edit_serv(id):

    query = 'SELECT `uid`, `field1`, `field2`, `field3`, `field4` FROM `gdgu` WHERE `uid`="' + id + '"'
    
    data = {
    }

    with engine.connect() as con:
        rs = con.execute(query)

        for x in rs:
            data["field1"] = x[0]
            data["field2"] = x[1]
            data["field3"] = x[2]
            data["field4"] = x[3]
            data["field5"] = x[4]

    return render_template('edit.html', data=data)


@app.route('/edit/sub', methods=['GET', 'POST'])
def edit_id():
    id = request.args['id']
    oname = request.args['oname']
    contactno = request.args['contactno']
    students = request.args['students']
    perc = request.args['perc']

    query = "UPDATE `gdgu` SET `field1` = '" +oname+ "', `field2` = '" +contactno+ "', `field3` = '" +students+ "', `field4` = '" +perc+ "' WHERE `gdgu`.`uid` = '" + id + "'"
    with engine.connect() as con:
        rs = con.execute(query)
    return redirect(url_for('index'))