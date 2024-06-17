print("\n--------------------------- Exercise 1 -----------------------")

# 🌟 Exercise 1 : Pets
# Instructions
# Using this code:


class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create another cat breed named Siamese which inherits from the Cat class.

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

all_cats = [Bengal("cat1", 2), Chartreux("cat2", 3), Siamese("Cat3", 1)]

# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.

sara_pets = Pets(all_cats)

# Take all the cats for a walk, use the walk method.

sara_pets.walk()


print("\n--------------------------- Exercise 2 -----------------------")

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.


class Dog():

    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight


# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.

    def bark(self):
        return f"{self.name} is barking"


# run_speed: returns the dogs running speed (weight/age*10).

    def run_speed(self) -> float:
        return self.weight / self.age * 10

# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

    def fight(self, other_dog: "Dog") -> str:
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} won the fight to {other_dog.name}."
        else:
            return f"{other_dog.name} won the fight to {self.name}."

# Create 3 dogs and run them through your class.


dog1 = Dog("Dog1", 3, 2)
dog2 = Dog("Dog2", 5, 8)
dog3 = Dog("Dog3", 10, 10)
dogs = [dog1, dog2, dog3]
for dog in dogs:
    print(dog.bark())
    print(f"{dog.name} has run speed - {dog.run_speed()}")
print(dog1.fight(dog2))
print(dog1.fight(dog3))
print(dog2.fight(dog3))


print("\n--------------------------- Exercise 3 -----------------------")

# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.


print("See exercise3.py")


print("\n--------------------------- Exercise 4 -----------------------")

# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries
# last_name : (string)


class Family:
    def __init__(self, last_name: str) -> None:
        self.last_name = last_name
        self.members = []

# Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.

    def born(self, **member):
        self.members.append(member)
        print("Congratulation with new family member!!! Your name is",
              member["name"], "\n")

# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.

    def is_18(self, name: str) -> bool:
        for member in self.members:
            if member["name"] == name and member["age"] < 18:
                return False
            else:
                return True

# family_presentation: a method that prints the family’s last name and all the members’ details.

    def family_presentation(self):
        print(f"Family - {self.last_name}.")
        for member in self.members:
            for key, value in member.items():
                print(f"{key}: {value}")
            print()

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.


family_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]

robinson = Family("Robinson")
for member in family_members:
    robinson.born(**member)
if robinson.is_18("Sarah"):
    print("Sarah is adult")
else:
    print("Sarah is not adult")
robinson.family_presentation()


print("\n--------------------------- Exercise 5 -----------------------")

# Exercise 5 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)


class TheIncredibles(Family):

    # Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.

    def use_power(self, name):
        for member in self.members:
            if member["name"] == name and member["age"] >= 18:
                print(f"The power of {name} is {member['power']}")
            else:
                raise Exception("they are not over 18 years old.")


# Add a method called incredible_presentation which :
# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

    def incredible_presentation(self):
        print("** Here is our powerful family **")
        super().family_presentation()


# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.
Incredibles_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
        'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
        'power': 'read minds', 'incredible_name': 'SuperWoman'}
]
Incredibles = TheIncredibles("Incredibles")
for member in Incredibles_members:
    Incredibles.born(**member)


# Call the incredible_presentation method.

Incredibles.incredible_presentation()

# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.

Incredibles.born(**{'name': 'Jack', 'age': 3, 'gender': 'Male', 'is_child': True, 'power': 'Unknown Power', 'incredible_name': 'SuperJack'})
try:
    Incredibles.use_power("Jack")
except:
    print("Unknown Power\n")

# Call the incredible_presentation method again.

Incredibles.incredible_presentation()