import pandas as pd

sql_query = """
CREATE TABLE k12 (
    uid SERIAL PRIMARY KEY,
    field1 VARCHAR(1000),
    field2 VARCHAR(1000),
    field3 VARCHAR(1000),
    field4 VARCHAR(1000),
    field5 VARCHAR(1000),
    field6 VARCHAR(1000)
);
"""
print(sql_query)

csv_df = pd.read_csv('k12-Data.csv')
sql_query = """
INSERT INTO k12 (field1,
                 field2,
                 field3,
                 field4,
                 field5,
                 field6) VALUES 
"""
value_fmt = "('%s', '%s', '%s', '%d', '%d', '%s')"
values = []

for _, row in csv_df.iterrows():
    values.append(value_fmt % (
        row['School Name'],
        row['City'],
        row['Owners Name'],
        row['Contact Number'],
        row['Student Strength as on May 2019'],
        row['% of Education Service Fee']))

sql_query += ', \n'.join(values) + ';'
print(sql_query)
