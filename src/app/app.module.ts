import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop"

import {AngularFireModule} from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HeaderComponent } from './components/header/header.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardComponent } from './components/board/board.component';
import { TaskComponent } from './components/task/task.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardListComponent,
    BoardComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
