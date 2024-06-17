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

    def fight(self, other_dog:"Dog") -> str:
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} won the fight to {other_dog.name}."
        else:
            return f"{other_dog.name} won the fight to {self.name}."
