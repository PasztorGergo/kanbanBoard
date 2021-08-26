import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-creator-dialog',
  templateUrl: './creator-dialog.component.html',
  styleUrls: ['./creator-dialog.component.scss']
})
export class CreatorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit(): void {
  }

  OnNoClick(){
    this.dialogRef.close();
  }

}
