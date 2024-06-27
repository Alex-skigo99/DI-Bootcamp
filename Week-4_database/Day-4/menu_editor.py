from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu() -> None:
    menu = '''
        View an Item (v)
        Add an Item (a)
        Delete an Item (d)
        Update an Item (u)
        Show the Menu (s)
        Quit (q)
    '''
    print(menu)

def view_item(cursor):
    name = input("View item's name: ")
    item = MenuManager.get_by_name(cursor, name)
    if not item:
        print("Unknown item's name!")
        return
    print(item)


def add_item_to_menu(connection, cursor):
    name = input("Adding item's name: ")
    price = int(input("Adding item's adding price: "))
    item = MenuItem(name, price)
    try:
        item.save(connection, cursor)
    except Exception as e:
        print(e)
    else:
        print("item was added successfully!")

def remove_item_from_menu(connection, cursor):
    name = input("Deleting item's name: ")
    item = MenuManager.get_by_name(cursor, name)
    if not item:
        print("Unknown item's name!")
        return
    try:
        item.delete(connection, cursor)
    except Exception as e:
        print(e)
    else:
        print("item was delete successfully!")

def update_item_from_menu(connection, cursor):
    name = input("Updating Item's name: ")
    new_name = input("New Item name: ")
    new_price = int(input("New Item price: "))
    item = MenuManager.get_by_name(cursor, name)
    if not item:
        print("Unknown item's name!")
        return
    try:
        item.update(connection, cursor, new_name, new_price)
    except Exception as e:
        print(e)
    else:
        print("item was update successfully!")

def show_restaurant_menu(cursor):
    menu = MenuManager.all_items(cursor)  
    print("Menu:")
    for item in menu:
        print(item[1] +' - ', item[2])


