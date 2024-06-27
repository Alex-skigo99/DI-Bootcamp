# Instructions
# Using this REST Countries API, create the functionality which will write 10 random countries to your database.

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import requests
import random
import psycopg2

DBNAME = 'Countries'
USER = 'postgres'
PASSWORD = 'postgres'
HOST = 'localhost'
PORT = '5432'

TABLE = 'Countries'


def create_table():
    with psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as connection:
        cursor = connection.cursor()
        query = '''
            CREATE TABLE Countries (
                item_id serial primary key,
                name varchar(100) UNIQUE NOT NULL,
                capital varchar(100),
                flag varchar(10),
                subregion varchar(100),
                population INT
                )
            '''
        cursor.execute(query)
        connection.commit()


def get_country_name_random_list(k: int = 0) -> list:
    response = requests.get("https://restcountries.com/v3.1/all?fields=name")
    response_full_list = response.json()
    countries = []
    for each in response_full_list:
        countries.append(each["name"]["common"])
    random.shuffle(countries)
    if k == 0:
        return countries
    return countries[:k]


def get_country_data(name) -> dict:
    response = requests.get(
        f"https://restcountries.com/v3.1/name/{name}?fields=name,capital,flag,subregion,population")
    response_dict = response.json()[0]
    country = {
        "name": name,
        "capital": response_dict["capital"][0],
        "flag": response_dict["flag"],
        "subregion": response_dict["subregion"],
        "population": response_dict["population"]
    }
    return country

# ---- alternative version -----
# def add_to_db_2(connection, cursor, data: dict) -> None:
#     fialds_name = ",".join(data.keys())
#     fields_value = ") VALUES ("
#     for value in data.values():
#         if type(value) is str:
#             fields_value += f'"{value}", '
#         elif type(value) is int:
#             fields_value += f"{value}"
#         else:
#             raise ValueError("Wrong data type")
#     fields_value += ");"
#     query = f"INSERT INTO {TABLE} (" + fialds_name + fields_value
#     cursor.execute(query)
#     connection.commit()

def add_to_db(connection, cursor, data: dict) -> None:
    query = f'''
        INSERT INTO {TABLE}(name, capital, flag, subregion, population)
        VALUES
            ('{data["name"]}',
              '{data["capital"]}',
              '{data["flag"]}',
              '{data["subregion"]}',
              {data["population"]});
    '''
    cursor.execute(query)
    connection.commit()


def main():
    countries = get_country_name_random_list(10)
    with psycopg2.connect(dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as connection:
        cursor = connection.cursor()
        for country in countries:
            data = get_country_data(country)
            try:
                add_to_db(connection, cursor, data)
            except Exception as e:
                print(e)
            else:
                print("Data added.")


if __name__ == "__main__":
    # create_table()
    main()
