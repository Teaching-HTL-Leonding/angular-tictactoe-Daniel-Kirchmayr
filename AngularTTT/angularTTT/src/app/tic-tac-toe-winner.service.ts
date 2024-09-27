import { Injectable } from '@angular/core';

//Union Type of X and O
export type Player = 'X' | 'O';

export type Cellcontent = Player | ' ';

export type WinningStatus = Player | "draw" | undefined;

@Injectable({
  providedIn: 'root'
})
export class TicTacToeWinnerService {

  public getWinner(board: Cellcontent[]): WinningStatus {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] !== ' ' && board[a] === board[b] && board[a] === board[c]) {
        return board[a] as WinningStatus;
      }
    }

    if (board.includes(' ')) {
      return undefined;
    } else {
      return 'draw';
    }
  }
}
