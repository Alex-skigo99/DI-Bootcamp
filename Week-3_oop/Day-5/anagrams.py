from anagram_checker import AnagramChecker

def word_validator(ac:AnagramChecker, word:str) -> str:
    word = word.strip().upper()
    if len(word.split(" ")) > 1:
        raise ValueError("You should input only one word.")
    if not word.isalpha():
        raise ValueError("You should input only letters.")
    if not ac.is_valid_word(word):
        raise ValueError("Unknown word.")
    return word
   

def main():
    ac = AnagramChecker("sowpods.txt")
    while True:
        print("""
            1 - enter a word
            2 - exit  
              """)
        choise = input("Your choise: ")
        if choise == "2":
            break   # quit from while loop
        elif choise == "1":
            word = word_validator(ac, input("Input a word: "))
            anagrams = ac.get_anagrams(word)
            print(f"\nYOUR WORD: \"{word}\"")
            print("this is a valid English word.")
            str = "Anagrams for your word: "
            for anagram in anagrams:
                if word != anagram:
                    str = str + anagram + ", "
            print(str + "\b\b.")
            
            # checking out is_anagram method
            print("Are SWORD and WORDS an anagram? ", ac.is_anagram("SWORD", "WORDS"))
        else:
            print("Wrong choice. Repeat please.")

if __name__ == "__main__":
    main()
            
