from menu_item import MenuItem

class MenuManager:
    TABLE = "Menu_Items"

    @classmethod
    def get_by_name(cls, cursor, name: str) -> MenuItem | None:
        query = f'''
            SELECT
            *
            FROM {MenuManager.TABLE}
            WHERE item_name = '{name}';
        '''
        cursor.execute(query)
        result = cursor.fetchall()
        if result:
            result_item = list(result[0])
            return MenuItem(result_item[1], result_item[2])
        return None

    @classmethod
    def all_items(cls, cursor) -> list:
        query = f'SELECT * FROM {MenuManager.TABLE};'
        cursor.execute(query)
        return cursor.fetchall()
