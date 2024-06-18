from datetime import datetime, date
import string
import random
print("\n--------------------------- Exercise 1 -----------------------")

# 🌟 Exercise 1: Currencies
# Instructions


class Currency:
    num_types = [int, float]

    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

#     #Your code starts HERE

    # def __str__(self) -> str:
    #     return f"{self.amount} {self.currency}s"

    def __repr__(self) -> str:
        return f"{self.amount} {self.currency}s"

    def __int__(self) -> int:
        return int(self.amount)

    def __add__(self, other):
        if type(other) in Currency.num_types:
            return self.amount + other
        if self.currency != other.currency:
            raise TypeError(
                f"Cannot add between Currency type {self.currency} and {other.currency}")
        return self.amount + other.amount

    def __iadd__(self, other):
        if type(other) in Currency.num_types:
            self.amount += other
            return self
        if self.currency != other.currency:
            raise TypeError(
                f"Cannot add between Currency type {self.currency} and {other.currency}")
        self.amount += other.amount
        return self


if __name__ == "__main__":
    c1 = Currency('dollar', 5)
    c2 = Currency('dollar', 10)
    c3 = Currency('shekel', 1)
    c4 = Currency('shekel', 10)

    print(f"str c1 - {str(c1)}")
    print(f"int c1 - {int(c1)}")
    print(f"repr c1 - {repr(c1)}")
    print(f"c1 + 5 - {c1 + 5.5}")
    print(f"c1 + c2 - {c1 + c2}")
    print(f"c1 - {c1}")
    c1 += 5
    print("c1 += 5 - ", c1)
    c1 += c2
    print("c1 += c2 - ", c1)
    try:
        print(f"str c1 + c3 - {c1 + c3}")
    except TypeError as err:
        print(err)


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>


print("\n--------------------------- Exercise 2 -----------------------")
# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

# import module_name

# OR

# from module_name import function_name

# OR

# from module_name import function_name as fn

# OR

# import module_name as mn
print("See exercise_2.py")

print("\n--------------------------- Exercise 3 -----------------------")
# 🌟 Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module


if __name__ == "__main__":
    str_5 = ""
    for i in range(5):
        str_5 += string.ascii_letters[random.randint(
            0, len(string.ascii_letters)-1)]
    print(str_5)


print("\n--------------------------- Exercise 4 -----------------------")
# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.


def current_date():
    return date.today()


if __name__ == "__main__":
    print(current_date())


print("\n--------------------------- Exercise 5 -----------------------")
# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).


def time_left_until_1_january():
    until_time = datetime(2025, 1, 1, 0, 0, 0)
    now = datetime.now()
    left_time = until_time - now
    print(f"the 1st of January is in {left_time} hours.")


if __name__ == "__main__":
    time_left_until_1_january()

print("\n--------------------------- Exercise 6 -----------------------")
# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice), then displays a message stating how many minutes the user lived in his life.

def minutes_lived(day:int, month:int, yaer:int) -> None:
    birthdate = datetime(yaer, month, day)
    now = datetime.now()
    time_lived = now - birthdate
    print("You have lived in life (minutes): ", round(time_lived.total_seconds() / 60, 0))

if __name__ == "__main__":
    minutes_lived(21, 11, 1975)

print("\n--------------------------- Exercise 7 -----------------------")
# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

def add_user(**user_data) -> None:
    users.append(user_data)

if __name__ == "__main__":
    users = []
    fake = Faker()
    for i in range(5):
        add_user(name = fake.first_name(), adress = fake.address(), langage_code = fake.language_code())
    for user in users:
        print(user)
