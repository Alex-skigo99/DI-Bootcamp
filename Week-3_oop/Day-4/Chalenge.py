# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.

# Now, use the provided the_stranger.txt file and try using the class you created above.

# Bonus:
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.

# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

from collections import Counter

class Text:
    def __init__(self, text:str) -> None:
        self.text = text

    def frequency(self, word:str) -> int | None:
        """return the frequency of a word in the text."""
        text_list = self.text.lower().split(" ")
        text_count = dict(Counter(text_list))
        try:
            return text_count[word]
        except KeyError:
            return None


    def most_common_word(self) -> str:
        """returns the most common word in the text."""
        text_list = self.text.lower().split(" ")
        text_count = dict(Counter(text_list))
        return max(text_count, key=lambda key: text_count[key])


    def unique_words(self) -> list:
        """returns a list of all the unique words in the text."""
        text_list = self.text.lower().split(" ")
        text_set = set(text_list)
        return list(text_set)

def main():
    t = Text("A good a book would sometimes cost as much as a good house")
    if f:=t.frequency("as"):
        print(f)
    else:
        print("This word is missing here.")
    print(t.most_common_word())
    print(t.unique_words())

if __name__ == "__main__":
    main()