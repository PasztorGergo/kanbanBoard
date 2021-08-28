import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditDialogComponent } from 'src/app/dialogs/task-edit-dialog/task-edit-dialog.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task : Task;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
