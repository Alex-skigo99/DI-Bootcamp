from itertools import groupby
print("\n--------------------------- Exercise 1 -----------------------")

# 🌟 Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


def Oldest_cat(cats: list[Cat]) -> Cat:
    oldest_cat = cats[0]
    for cat in cats:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat


def Ex_1():
    cats = [Cat("cat1", 3), Cat("Cat2", 5), Cat("Cat3", 1)]
    oldest_cat = Oldest_cat(cats)
    # approach 2: oldest_cat = max(cats, key=lambda cat: cat.age)
    print(
        f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


if __name__ == "__main__":
    Ex_1()


print("\n--------------------------- Exercise 2 -----------------------")
# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.


class Dog:
    def __init__(self, name: str, height: int) -> None:
        self.name = name
        self.height = height

    def bark(self):
        print(self.name, "goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")


def Ex_2():
    davids_dog = Dog("Rex", 50)
    print(f"David's dog - {davids_dog.name} {davids_dog.height} cm hight")
    davids_dog.bark()
    davids_dog.jump()

    sarahs_dog = Dog("Teacup", 20)
    print(f"Sarah's dog - {sarahs_dog.name} {sarahs_dog.height} cm hight")
    sarahs_dog.bark()
    sarahs_dog.jump()

    if davids_dog.height > sarahs_dog.height:
        print("Bigger dog - ", davids_dog.name)
    else:
        print("Bigger dog - ", sarahs_dog.name)


if __name__ == "__main__":
    Ex_2()


print("\n--------------------------- Exercise 3 -----------------------")
# 🌟 Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven


class Song:
    def __init__(self, lirics: list) -> None:
        self.lirics = lirics

    def sing_me_a_song(self):
        for str in self.lirics:
            print(str)


def Ex_3():
    stairway = Song(["There’s a lady who's sure", "all that glitters is gold",
                    "and she’s buying a stairway to heaven"])
    stairway.sing_me_a_song()


if __name__ == "__main__":
    Ex_3()


print("\n--------------------------- Exercise 4 -----------------------")
# 🌟 Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example
# {
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }

# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)


class Zoo:
    def __init__(self, zoo_name) -> None:
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal: str):
        if not new_animal in self.animals:
            self.animals.append(new_animal)

    def get_animal(self):
        print(self.name, " zoo animals are: ", *tuple(self.animals))

    def sell_animals(self, animal_sold: str):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self) -> dict:

        sort_animal_list = [list(g) for k, g in groupby(
            sorted(self.animals), key=lambda x: x[0])]
        return dict(enumerate(sort_animal_list))

    def get_groups(self) -> None:
        for key, value in self.sort_animals().items():
            print(f"{key+1} - ", *tuple(value))


def Ex_4():
    ramat_gan_safari = Zoo("ramat_gan_safari")
    ramat_gan_safari.add_animal("Apaka")
    ramat_gan_safari.add_animal("Lion")
    ramat_gan_safari.add_animal("Zebra")
    ramat_gan_safari.add_animal("Laska")
    ramat_gan_safari.add_animal("Croc")
    ramat_gan_safari.get_animal()
    ramat_gan_safari.sell_animals("Croc")
    ramat_gan_safari.get_animal()
    ramat_gan_safari.get_groups()   # call sort_animal inside


if __name__ == "__main__":
    Ex_4()
