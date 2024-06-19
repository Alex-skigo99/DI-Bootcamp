import os
import random
print("\n--------------------------- Exercise 1 -----------------------")
# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.

# Hint : The generated sentences do not have to make sense.

# Download this word list

# Save it in your development directory.

# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?


def get_words_from_file(file_name: str) -> list:
    file_location = os.path.dirname(__file__) + "/" + file_name
    with open(file_location) as file:
        return file.read().split("\n")


# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.

# Take the random words and create a sentence (using a python method), the sentence should be lower case.

def get_random_sentence(words: list, length: int) -> str:
    sentence = ""
    words_count = len(words)
    for i in range(length):
        sentence += f"{words[random.randint(0, words_count - 1)]} "
    sentence += "\b."
    return sentence.lower()


# Create a function called main which will:

# Print a message explaining what the program does.
# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.

def main():
    file_name = "sowpods.txt"
    print("I can create a random sentence with sertain count of word.")
    try:
        length = int(input("Input count of word (2-20): "))
    except ValueError:
        print("Incorrect value! You should input number between 2 and 20.")
        return
    if 2 <= length <= 20:
        print(get_random_sentence(get_words_from_file(file_name), length))
    else:
        print("Incorrect value! You should input number between 2 and 20.")

if __name__ == "__main__":
    main()


print("\n--------------------------- Exercise 2 -----------------------")
# 🌟 Exercise 2: Working With JSON
# Instructions

import json

if __name__ == "__main__":

    sample_json = """{
    "company":{
        "employee":{
            "name":"emma",
            "payable":{
                "salary":7000,
                "bonus":800
            }
        }
    }
    }"""

# Access the nested “salary” key from the JSON-string above.

    data = json.loads(sample_json)
    print(data["company"]["employee"]["payable"]["salary"])

# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.

    data["company"]["employee"]["birth_date"] = "12.10.2001"
    print(data)

# Save the dictionary as JSON to a file.

    file_location = os.path.dirname(__file__) + "/data.json"
    with open(file_location, mode="w") as file:
        json.dump(data, file)
