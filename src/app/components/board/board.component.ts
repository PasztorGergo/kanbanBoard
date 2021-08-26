import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() board;

  constructor(private dbService:DataService) { }

  ngOnInit(): void {
  }

  handleDelete(){
    this.dbService.deleteBoard(this.board);
  }
  onUpdateBoard(){
    this.dbService.updateBoard(this.board)
  }
}
