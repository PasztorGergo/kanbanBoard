import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Task) { }

  ngOnInit(): void {
  }
  OnNoClick(){
    this.dialogRef.close();
  }
}
