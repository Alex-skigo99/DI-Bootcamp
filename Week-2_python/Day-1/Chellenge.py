# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod

import random


l = 0
while l != 10:
    st = input("Eneter 10 charecters string: ")
    l = len(st)
    if l > 10:
        print("string too long")
    if l < 10:
        print("string not long enough")
print("perfect string")
print(st[0], st[-1])
cons = ""
# for i in range(l):
#     cons = cons + st[i]
#     print(cons)

for i in range(l+1):
    print(st[0:i])

st_list = list(st)
random.shuffle(st_list)
st_shuffle = "".join(st_list)
print(st_shuffle)
