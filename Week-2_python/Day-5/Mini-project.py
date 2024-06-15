instruction = """
\nThe game is played on a grid that's 3 squares by 3 squares.
Players take turns putting their marks (O or X) in empty squares. Enter coordinates: column row (for example: 1 3) (q - exit)
The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.\n
"""

board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
]


def display_board() -> None:
    """To display the Tic Tac Toe board (GUI)."""

    global board

    rows_num = len(board)
    cols_num = len(board[0])

    grid_row = "|---" * cols_num + "|"
    for row in range(rows_num):
        data_row = ""
        for column in range(cols_num):
            data_row += f"| {board[row][column]} "
        data_row += "|"
        print(grid_row)
        print(data_row)
    print(grid_row)


def player_input(player: str) -> str:
    """To get the position from the player."""

    global board

    while True:
        move_str = input(f"{player}, your move (column row): ")
        if move_str == "q":
            break
        move = move_str.strip().split(" ")
        row = int(move[1])
        col = int(move[0])
        if not ((1 <= col <= 3) and (1 <= row <= 3)):
            print("Incorrect input. Repeat please.")
        elif board[row - 1][col - 1] != " ":
            print("Oops, it's busy here. Repeat please.")
        else: 
            board[row - 1][col - 1] = player
            break
    return move_str



def check_win() -> str:
    """To check whether there is a winner or not. Return winner name."""

    global board

    rows_num = len(board)
    diag_1, diag_2 = "", ""
    for i in range(rows_num):
        col_str, row_str = "", ""
        diag_1 += board[i][i]
        diag_2 += board[i][2 - i]
        for j in range(rows_num):
            col_str += board[i][j]
            row_str += board[j][i]
        if row_str == "xxx" or col_str == "xxx":
            return "x"
        elif row_str == "ooo" or col_str == "ooo":
            return "o"
    if diag_1 == "xxx" or diag_2 == "xxx":
        return "x"
    elif diag_1 == "ooo" or diag_2 == "ooo":
        return "o"
    return ""


def play():
    """The main function, which calls all the functions created above."""

    print(instruction)
    display_board()
    players = {True: "x", False: "o"}   # init dict of player's letters
    player = True   # set first moove player 
    is_drow = True  # set drow as default  
    for _ in range(9):      # 9 mooves
        if player_input(players[player]) == "q":
            is_drow = False
            break
        player = not player     # next player
        display_board()
        if winner := check_win():
            print(f"\n!!!!!!! {winner} is winner !!!!!!\n")
            is_drow = False
            break
    if is_drow:
        print("\nThe game ends in a tie.\n")
    print("----- Game is over ------\n")


if __name__ == "__main__":
    play()
