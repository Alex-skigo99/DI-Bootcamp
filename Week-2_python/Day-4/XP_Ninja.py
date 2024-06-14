def get_full_name(**words):
    full_name = words["first_name"] + " "
    if "middle_name" in words.keys():
        full_name += words["middle_name"]
        full_name += " "
    full_name += words["last_name"]
    return full_name

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))