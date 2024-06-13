print("\n--------------------------- Exercise 1 ----------------------")
# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.


def display_message():
    print("We are learning HTML, CSS, Python and Javascript.")


display_message()


print("\n--------------------------- Exercise 2 ----------------------")

# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.


def favorite_book(title):
    print("One of my favorite books is ", title)


favorite_book("War and Peace")

print("\n--------------------------- Exercise 3 ----------------------")

# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.


def describe_city(city, country="Israel"):
    print(f"{city} is a capital of {country}")


describe_city("Oslo", "Norway")
describe_city("Jerusalem")


print("\n--------------------------- Exercise 4 ----------------------")

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random

MAX_NUM = 10

def random_game(num):
    random_num = random.randint(1,MAX_NUM)
    print(f"Your number - {num}. My number - {random_num}.")
    if num == random_num:
        print("Congratulaition!!! You won!")
    else:
        print("Sorry, you lose :(")

while True:
    num = input(f"Enter your number (1 - {MAX_NUM} or q): ")
    if num == "q":
        break
    if num.isdigit():
        if 1 <= int(num) <= MAX_NUM:
            random_game(int(num))
        else:
            print("Number is not correct.")
    else:
        print("It's not a number.")


print("\n--------------------------- Exercise 5 ----------------------")

# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

# Bonus: Call the function make_shirt() using keyword arguments.


def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")


make_shirt()
make_shirt("medium")
make_shirt("small", "I love Israel")
make_shirt(size="x-large", text="Be Happy")

print("\n--------------------------- Exercise 6 ----------------------")

# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]


def show_magicians(magicians):
    for mag in magicians:
        print(mag)


def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] += " the Great"


show_magicians(magician_names)
make_great(magician_names)
show_magicians(magician_names)


print("\n--------------------------- Exercise 7 ----------------------")

# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

season_shorts = {"s": "summer", "a": "autumn", "w": "winter", "p": "spring"}

def get_random_temp(season):
    if season == "winter":
        return round((random.random() * 26 - 10), 1)
    elif season == "summer":
        return random.randint(10, 40)
    elif season == "autumn" or "spring":
        return random.randint(0, 25)

def main():
    season = input(f"Input a season {season_shorts}: ")
    temp = get_random_temp(season_shorts[season])
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif temp < 16:
        print("Quite chilly! Don’t forget your coat.")
    elif temp < 23:
        print("Nice weather!")
    elif temp < 32:
        print("Quit hot! Don’t forget a bottle of water.")
    else:
        print("Caution! Vary HOT! Stay at home.")

if __name__ == "__main__":
    main()


print("\n--------------------------- Exercise 8 -----------------------")

# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

DATA = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_and_check(data:dict) -> list:
    wrong_answers = []
    for each in data:
        user_answer = input(each["question"])
        if user_answer != each["answer"]:
            each["user_answer"] = user_answer
            wrong_answers.append(each)
    print()
    return wrong_answers


def inform(wrong_answers):
    print(f"Your result: correct ansers- {len(DATA)-len(wrong_answers)}, wrong answer- {len(wrong_answers)}\n")
    for each in wrong_answers:
        print(f"{each['question']}\nYour answer- {each['user_answer']}, correct answer- {each['answer']}\n")


inform(ask_and_check(DATA))
