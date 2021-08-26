import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  @Output() delete = new EventEmitter();
  canDelete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onCancel(){
    this.canDelete = false;
  }
  onPrepareDelete(){
    this.canDelete = true;
  }
  onDelete(){
    this.delete.emit();
    this.canDelete = false;
  }
}
