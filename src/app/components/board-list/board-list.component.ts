import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatorDialogComponent } from 'src/app/dialogs/creator-dialog/creator-dialog.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards: Array<any>;
  sub : Subscription;
  constructor(private dbService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub = this.dbService.getBoards().subscribe(x => this.boards = x);
  }
  onAddBoard(boardName : string){
    const board = {boardName:boardName, taskArray:["Hello"]};
    this.dbService.addBoard(board);
  }
  openCreatorDialog(){
    const dialogRef = this.dialog.open(CreatorDialogComponent,{
      data:"",
      width:"30vw",
      minHeight:"35vh"
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data)
        this.onAddBoard(data);
    });
  }
  drop(event:CdkDragDrop<any[]>){
    moveItemInArray(this.boards,event.previousIndex,event.currentIndex);
    this.dbService.sortBoards(this.boards);
  }
}
