import { Component } from '@angular/core';


//Union Type of X and O
type Player = 'X' | 'O';

type Cellcontent = Player | ' ';

type WinningStatus = Player | "draw" | undefined;
//  Customer type with name and age
type Customer = {
  name: string;
  age: number;
};
//  CustomerWithId type with name, age and id
type CustomerWithId = Customer & { id: number };

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  board: Cellcontent[] = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  status = ''

  currentPlayer: Player = 'X';

  onClick(index: number) {
    if (this.board[index] !== ' ') {
      return;
    }
    this.board[index] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

  }

  getWinner(): WinningStatus {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (this.board[a] !== ' ' && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a] as WinningStatus;
      }
    }

    if (this.board.includes(' ')) {
      return undefined;
    } else {
      return 'draw';
    }
  }
}
