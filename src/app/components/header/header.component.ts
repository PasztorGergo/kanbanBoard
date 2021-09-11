import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen:boolean = false;
  @Output() sideToggle = new EventEmitter<boolean>();
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }
  toggle(){
    this.isOpen = !this.isOpen;
    this.sideToggle.emit(this.isOpen);
  }
}
