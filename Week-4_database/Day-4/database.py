import psycopg2

DBNAME = 'dvdrental'
USER = 'postgres'
PASSWORD = 'postgres'
HOST = 'localhost'
PORT = '5432'

# connection = psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
# cursor = connection.cursor()

# table = 'actor'

def select_all(cursor, table, limit) -> list:
    query = f'SELECT * FROM {table} LIMIT {limit};'
    cursor.execute(query)
    return cursor.fetchall()

# for actor in rows:
#     print(actor[1] +' '+ actor[2])

# old_name = "Ed"
# new_name = "ED"
# query = f'UPDATE {table} SET first_name = %s where first_name = %s;'
# cursor.execute(query, (new_name, old_name))
# connection.commit()

# query = 'CREATE TABLE sample_table (id serial primary key, name varchar(100))'
# cursor.execute(query)
# connection.commit()

# connection.close()

def main():
    with psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as db_dvd:
        cursor = db_dvd.cursor()
        print(select_all(cursor=cursor, table="actor", limit = 10))

# or open/close connection in each func

main()
