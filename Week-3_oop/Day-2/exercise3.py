# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.

import random
from Dog import Dog

# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.

class PetDog(Dog):

    tricks = [
        " does a barrel roll",
        " stands on his back legs",
        " shakes your hand",
        " plays dead"
    ]

    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained


# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

    def train(self) -> None:
        print(self.bark())
        self.trained = True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

    def play(self, *args) -> None:
        str = self.name
        for dog in args:
            str += f", {dog.name}"
        print(str, " all play together")

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

    def do_a_trick(self):
        if self.trained:
            print(self.name, PetDog.tricks[random.randint(0, 3)])
        else:
            print(self.name, " not trained.")

def main():
    dog1 = PetDog("Dog1", 3, 2, False)
    dog2 = PetDog("Dog2", 5, 8, False)
    dog3 = PetDog("Dog3", 10, 10, False)
    dog2.train()
    dog1.play(dog2, dog3)
    dog2.do_a_trick()
    dog1.do_a_trick()

if __name__ == "__main__":
    main()