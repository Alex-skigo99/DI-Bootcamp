class MenuItem:
    TABLE = "Menu_Items"
    def __init__(self, name:str, price: int) -> None:
        self.name = name
        self.price = price
    
    def __repr__(self) -> str:
        return f"{self.name} - {self.price}"

    def save(self, connection, cursor) -> None:
        query = f'''
            INSERT INTO {MenuItem.TABLE}(item_name, item_price)
            VALUES
                ('{self.name}', {self.price});
        '''
        cursor.execute(query)
        connection.commit()

    def update(self, connection, cursor, name: str, price: int) -> None:
        query = f'''
            UPDATE {MenuItem.TABLE}
            SET item_name = '{name}', item_price = {price}
            WHERE item_name = '{self.name}';
        '''
        cursor.execute(query)
        connection.commit()
        return self.__init__(name, price)

    def delete(self, connection, cursor) -> None:
        query = f'''
            DELETE FROM {MenuItem.TABLE}
            WHERE item_name = '{self.name}'
        '''
        cursor.execute(query)
        connection.commit()
