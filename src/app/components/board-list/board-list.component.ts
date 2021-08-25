import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards: Observable<any>;
  constructor(private dbService: DataService) { }

  ngOnInit(): void {
    this.boards = this.dbService.getBoards();
  }

}
