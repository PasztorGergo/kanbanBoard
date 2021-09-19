import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  atBoards:boolean;
  sideOpen:boolean;
  constructor(public auth: AuthService){
    this.atBoards;
  }
}
