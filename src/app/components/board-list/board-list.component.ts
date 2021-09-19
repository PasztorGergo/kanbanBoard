import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatorDialogComponent } from 'src/app/dialogs/creator-dialog/creator-dialog.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards: Array<Board>;
  constructor(private dbService: DataService, private dialog: MatDialog, private auth: AuthService) { }

  ngOnInit() {
      this.dbService.getBoards().subscribe(x => this.boards = x)
  }
  onAddBoard(boardName : string){
    const board : Board= {boardName:boardName, taskArray:[{taskName:"Hello",labelColor:"yellow"}], priority: this.boards.length};
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
  drop(event:CdkDragDrop<Board[]>){
    moveItemInArray(this.boards,event.previousIndex,event.currentIndex);
    this.dbService.sortBoards(this.boards);
  }
}
