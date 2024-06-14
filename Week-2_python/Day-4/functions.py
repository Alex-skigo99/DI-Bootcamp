myList = [10, 25, 17, 9, 30, -5]
# Double the value of each element
myList2 = list(map(lambda n: n * 2, myList))
print(myList2)

myList = [10, 25, 17, 9, 30, -5]
# Filters the elements which are not multiples of 5
myList2 = list(filter(lambda n : n%5 == 0, myList))
print(myList2)

# *args

def emails_list(*usernames):
    print(usernames) # it's a tuple
    emails_list = []
    for user in usernames:
        user_email = user + "@gmail.com"
        emails_list.append(user_email)
    return emails_list

print(emails_list("sasha", "jon", "adam"))

# **kwargs

def user_info(**info):
    return info

print(user_info(name = "Sasha", email = "s@gmail.com", age = 48))

dict = {True: "x", False: "o"}
player = False
print(dict[player])