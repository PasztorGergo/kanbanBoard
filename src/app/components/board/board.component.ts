import { Component, OnInit, Input } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from 'src/app/dialogs/task-dialog/task-dialog.component';
import { Task } from 'src/app/models/task.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() board:Board;

  constructor(private dbService:DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleDelete(){
    this.dbService.deleteBoard(this.board);
  }
  onUpdateBoard(){
    this.dbService.updateBoard(this.board)
  }
  addTask(){
    const dialogRef = this.dialog.open(TaskDialogComponent,{
      data:"",
      width:"50vw",
      minHeight:"45vh"
    });
    dialogRef.afterClosed().subscribe(task => {
      if(task){
        this.board.taskArray.push({taskName:task, labelColor:"yellow"});
        this.dbService.addTask(this.board)
      }
    });
  }
  drop(event:CdkDragDrop<Task[]>){
    moveItemInArray(this.board.taskArray,event.previousIndex,event.currentIndex);
    this.dbService.sortTasks(this.board)
  }
  editTask(){
    
  }
}
