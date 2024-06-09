# Exercise 1 : Hello World-I Love Python
# Instructions
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

for i in range(8):
    if i < 4:
        print("Hello World")
    else:
        print("I love Python")

# Exercise 2 : What Is The Season ?
# Instructions
# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

mon = int(input("Month: "))
# if mon == 12:
#     mon = 0
mon = mon - 12 * (mon // 11) * (mon % 11)
print(mon)
if mon < 3:
    print("Winter")
elif mon < 6:
    print("Spring")
elif mon < 9:
    print("Summer")
else:
    print("Autumn")
