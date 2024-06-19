from googletrans import Translator

if __name__ == "__main__":
    french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
    english_words = []
    t = Translator()
    for word in french_words:
        english_words.append(t.translate(word, dest="en", src="auto"))

    dictionary = {english_words[i]:french_words[i] for i in range(len(english_words))}
    print(dictionary)