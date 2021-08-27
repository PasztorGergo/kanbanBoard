import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.scss']
})
export class TaskEditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) { }

  ngOnInit(): void {
  }
  OnNoClick(){
    this.dialogRef.close();
  }
}
