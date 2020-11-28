import os
from urllib.parse import urlparse

basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):

    ABS_PATH = '/'


    DB_PATH = os.environ['DATABASE_URL']
    db_creds = urlparse(DB_PATH)


    # postgres
    PYTHONGRID_DB_HOSTNAME = db_creds.hostname + ':' + str(db_creds.port)
    PYTHONGRID_DB_NAME = db_creds.path.split('/')[1]
    PYTHONGRID_DB_USERNAME = db_creds.username
    PYTHONGRID_DB_PASSWORD = db_creds.password
    PYTHONGRID_DB_TYPE = 'postgres+psycopg2'
    PYTHONGRID_DB_SOCKET = ''
    PYTHONGRID_DB_CHARSET = 'utf-8'
    
    """
    
    # mysql 
    PYTHONGRID_DB_HOSTNAME = 'localhost'
    PYTHONGRID_DB_NAME = 'ttt'
    PYTHONGRID_DB_USERNAME = 'ttt'
    PYTHONGRID_DB_PASSWORD = 'ttt'
    PYTHONGRID_DB_TYPE = 'mysql+pymysql'
    PYTHONGRID_DB_SOCKET = ''
    PYTHONGRID_DB_CHARSET = 'utf-8'

    """
