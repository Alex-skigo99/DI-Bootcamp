# Part 1 : Quizz :
# Answer the following questions

# What is a class?
# A class in Python is an entity that encapsulates properties and methods and is also an important element of object-oriented programming.
# A class is a blueprint of similar objects.

# What is an instance?
# An instance is a object created by class. An instance has properties and methods.

# What is encapsulation?
# Encapsulation is a part of conception of object-oriented programming. Encapsulation prevents data from direct modification.

# What is abstraction?
# Abstraction in object oriented programming is in approach of modeling real world things as software objects.

# What is inheritance?
#Inheritance is the process by which one class takes on the attributes and methods of another. 

# What is multiple inheritance?
# A class can inherit from two different classes; in this case, the order of the parent class in a class definition will decide what will be inherited.
# The first parent class will prioritize classes below (meaning the functions last to be inherited can override functions from the parent class).

# What is polymorphism?
# Polymorphism means different or related classes that use the same names for their functions.
# Polymorphism allows the ability to use a standard interface for multiple forms or data types.


# What is method resolution order or MRO?




# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random


class Card:
    suits_list = ["Hearts", "Diamonds", "Clubs", "Spades"]
    values_list = "A,2,3,4,5,6,7,8,9,10,J,Q,K".split(",")

    def __init__(self, suit: str, value: str) -> None:
        if suit in Card.suits_list and value in Card.values_list:
            self.suit = suit
            self.value = value
        else:
            raise ValueError("Uncorrect card name.")

    def __eq__(self, other: "Card") -> bool:
        return self.suit == other.suit and self.value == other.value

    def __repr__(self) -> str:
        return self.value + self.suit[0]


class Deck:
    _sum_full_deck = 223800 # check sum of full deck

    def __init__(self) -> None:
        suits_list = Card.suits_list
        values_list = Card.values_list
        cards_list = []
        for suit in suits_list:
            for value in values_list:
                cards_list.append(Card(suit, value))
        self.deck = cards_list  # set property 1

    @property   # set property 2
    def check_sum(self):
        sum_c = 0
        for card in self.deck:
            sum_c += ord(card.suit[0]) * ord(card.value[0])
        return sum_c

    def __repr__(self) -> str:
        return str(len(self.deck)) + str(self.deck)

    def __eq__(self, other: "Deck") -> bool:
        return self.check_sum == other.check_sum

    def shuffle(self) -> None:
        """deck shuffle. It work with full deck only."""
        if self.check_sum == Deck._sum_full_deck:
            random.shuffle(self.deck)
        else:
            print("Can't shuffle. It's not a full deck.")

    def deal(self, card: Card) -> None:
        """deal card from deck."""
        self.deck.remove(card)


def main():
    d1 = Deck()
    print(d1)
    print(d1)
    d1.shuffle()
    d1.deal(Card("Hearts", "K"))
    print("Deck 1 - ", d1)
    d2 = Deck()
    print("Deck 2 - ", d2)
    print("Deck 1 is equal Deck 2? ", d1 == d2)


if __name__ == "__main__":
    main()
