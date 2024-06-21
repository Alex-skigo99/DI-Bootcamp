# 🌟 Anagram Checker
# We will create a program that will ask the user for a word.
# It will check if the word is a valid English word, and then find all possible anagrams for that word.


# Instructions
# First Download this text file : right click –> Save As

# Create a new file called anagram_checker.py which contains a class called AnagramChecker.

# The class should have the following methods:
# __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.

# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.

# Note: None of the methods in the class should print anything.

# Now create another Python file, called anagrams.py. This will contain all the UI (user interface) functionality of your program, and will rely on AnagramChecker for the anagram-related logic.

# It should do the following:
# Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.

# Once your code has decided that the user’s input is valid, it should find out the following:
# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.
# Display the information about the word in a user-friendly, nicely-formatted message such as:


# YOUR WORD :”MEAT”
# this is a valid English word.
# Anagrams for your word: mate, tame, team.

import os


class AnagramChecker:

    def __init__(self, file_name) -> None:
        with open(os.path.dirname(__file__) + "/" + file_name) as file:
            self.text_list = file.read().split("\n")

    def is_valid_word(self, word: str) -> bool:
        return word.upper() in self.text_list

    def get_anagrams(self, word: str) -> list:
        word_list = sorted(list(word.upper()))
        anagrams = list(
            filter(lambda w: sorted(list(w)) == word_list, self.text_list))
        return anagrams

    @staticmethod
    def is_anagram(word1: str, word2: str) -> bool:
        return set(word1) == set(word2)

# ---- Check out code ----
def main():
    ac = AnagramChecker("sowpods.txt")
    word1 = "sword"
    if ac.is_valid_word(word1):
        anagrams = ac.get_anagrams(word1)
        print(len(anagrams))
        for anagram in anagrams:
            print(anagram)


if __name__ == "__main__":
    main()
