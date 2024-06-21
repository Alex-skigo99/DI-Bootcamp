# Part II - Rock-Paper-Scissors.Py
# rock-paper-scissors.py : create 3 functions
# get_user_menu_choice() - this should display a simple menu, get the user’s choice (with data validation), and return the choice. No looping should occur here.
# The possibles choices are : Play a new game or Show scores or Quit

# print_results(results) – this should print the results of the games played. It should have a single parameter named results; which will be a dictionary of the results of the games played. It should display these results in a user-friendly way, and thank the user for playing.


# Note: results should be in this form: {win: 2,loss: 4,draw: 3}. Bear in mind that this dictionary will need to be created and populated in some other part of our code, and passed in to the print_results function at the right time.

# main() - the main function. It should take care of 3 things:
# Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)

# When the user chooses to play a game:
# Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
# Remember the results of every game that is played.

# When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.

from game import Game

MENU = {
    "p": "Play a new game",
    "s": "Show scores",
    "q": "Quit"
}

def get_user_menu_choice() -> str:
    for key, value in MENU.items():
        print(f"({key}) {value}")
    while True:
        choice = input("Your choice: ")
        if choice in MENU.keys():
            return choice
        else:
            print("Wrong choice. Repeat please.")


def print_results(results:dict) -> None:
    print("\n  Game resalts:")
    for key, value in results.items():
        print(f"You {key} {value} times.")
    print("\nThank you for playing!\n")


def main():
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0,
    }
    while True:
        choice = get_user_menu_choice()
        if choice == "q":
            return
        elif choice == "s":
            print_results(results)
        elif choice == "p":
            play = Game()
            game_result = play.play()
            results[game_result] += 1

if __name__ == "__main__":
    main()
