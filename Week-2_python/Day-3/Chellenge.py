print(
    "----------------------------------------Challenge 1-------------------------------------------------"
)

# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}


letters_dict = dict()
word = input("Input word: ")

for i in range(len(word)):
    if word[i] in letters_dict.keys():
        letters_dict[word[i]].append(i)
    else:
        letters_dict.update({word[i]: [i]})

print(f"{word} -> {letters_dict}")


print(
    "----------------------------------------Challenge 2-------------------------------------------------"
)

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# Examples

# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100"

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan,
# # instead you can by the Spoon that is $2

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1"

# ➞ "Nothing"


items_purchase_1 = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}

wallet_1 = "$300"

items_purchase_2 = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2",
}

wallet_2 = "$100"

items_purchase_3 = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200",
}

wallet_3 = "$1"


def get_int(money: str) -> int:
    money = money.replace("$", "")
    money = money.replace(",", "")
    return int(money)


def get_items(items_purchase: dict, wallet: str):
    result = []
    total = 0
    for name, price in items_purchase.items():
        if total + get_int(price) <= get_int(wallet):
            result.append([name])
            total += get_int(price)
    if not result:
        result = "Nothing"
    else:
        result.sort()
    return result


print(get_items(items_purchase_1, wallet_1))
print()
print(get_items(items_purchase_2, wallet_2))
print()
print(get_items(items_purchase_3, wallet_3))
print()
