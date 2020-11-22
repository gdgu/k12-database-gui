import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config(object):

    ABS_PATH = '/'

    DB_PATH = 'postgres://oipcznyinerslo:3ec8ba4d6c3a0ca98436a5f6979ba2940ca3fbc3f5f6d059115431ed5af73bde@ec2-184-72-162-198.compute-1.amazonaws.com:5432/deklf4rs7csh59'
    # postgres
    PYTHONGRID_DB_HOSTNAME = 'ec2-184-72-162-198.compute-1.amazonaws.com:5432'
    PYTHONGRID_DB_NAME = 'deklf4rs7csh59'
    PYTHONGRID_DB_USERNAME = 'oipcznyinerslo'
    PYTHONGRID_DB_PASSWORD = '3ec8ba4d6c3a0ca98436a5f6979ba2940ca3fbc3f5f6d059115431ed5af73bde'
    PYTHONGRID_DB_TYPE = 'postgres+psycopg2'
    PYTHONGRID_DB_SOCKET = ''
    PYTHONGRID_DB_CHARSET = 'utf-8'
    
    # mysql 
    """
    PYTHONGRID_DB_HOSTNAME = 'manishasaini.ml:3306'
    PYTHONGRID_DB_NAME = 'example'
    PYTHONGRID_DB_USERNAME = 'user'
    PYTHONGRID_DB_PASSWORD = 'dbmsuser01'
    PYTHONGRID_DB_TYPE = 'mysql+pymysql'
    PYTHONGRID_DB_SOCKET = ''
    PYTHONGRID_DB_CHARSET = 'utf-8'
    """