import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent } from './components/board-list/board-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'boards', component:BoardListComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
