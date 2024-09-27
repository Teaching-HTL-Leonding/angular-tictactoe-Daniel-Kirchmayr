import { Component, inject } from '@angular/core';
import { Cellcontent, Player, TicTacToeWinnerService } from '../tic-tac-toe-winner.service';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  board: Cellcontent[] = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  status = '';
  currentPlayer: Player = 'X';
  winnerService = inject(TicTacToeWinnerService);

  onClick(index: number) {
    if (this.board[index] !== ' ') {
      return;
    }
    this.board[index] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';

    const winner = this.winnerService.getWinner(this.board);
    if (winner) {
      this.status = winner === 'draw' ? 'Draw!' : `Player ${winner} wins!`;
    }
  }
}
