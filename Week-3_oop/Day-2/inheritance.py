class Parent:
    def speak(self):
        return "parent"
    
class Child(Parent):
    def speak(self):
        return "Child"
    
class Grandchild(Child):
    pass

class Door:
    def __init__(self, is_opened=True) -> None:
        is_opened = is_opened

    def open_door(self):
        self.is_opened = True
        print("The door is now open")

    def close_door(self):
        self.is_opened = False
        print("The door is now closed")

class BlockedDoor(Door):
    def open_door(self):
        raise Exception("a blocked door can\'t be open")
    
    def close_door(self):
        raise Exception("a blocked door can\'t be closed")
    
door1 = Door()
door1.close_door()

# door2 = BlockedDoor()
# door2.close_door()

