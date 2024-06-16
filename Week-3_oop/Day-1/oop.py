from itertools import groupby

thislist = ["banana", "obange", "oawi", "cherry"]
# thislist.sort(key = str.lower)
# thislist.sort()
thislist.sort(key=lambda s: s[0])
# print(thislist)

# list1=['asdf','hello','hope','hate','hack','bit','basket','code','come','chess']
# groups = {}
# for word in thislist:
#     groups.setdefault(word[0], []).append(word)
# lst = [group for group in groups.values()]

group_list = [list(g) for k, g in groupby(thislist, key=lambda x: x[0])]

dct = dict(enumerate(group_list))
print(dct)
