import { Routes } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HelloSignalsComponent } from './hello-signals/hello-signals.component';
import { GreetingComponent } from './greeting/greeting.component';

export const routes: Routes = [
  {path: 'ttt', component: TicTacToeComponent},
  {path: 'signals', component: HelloSignalsComponent},
  {path: 'greeting', component: GreetingComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];
