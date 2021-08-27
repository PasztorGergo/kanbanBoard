import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {A11yModule} from '@angular/cdk/a11y';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonToggleModule} from "@angular/material/button-toggle"

import {AngularFireModule} from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { HeaderComponent } from './components/header/header.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardComponent } from './components/board/board.component';
import { TaskComponent } from './components/task/task.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { CreatorDialogComponent } from './dialogs/creator-dialog/creator-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';
import { TaskEditDialogComponent } from './dialogs/task-edit-dialog/task-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardListComponent,
    BoardComponent,
    TaskComponent,
    DeleteButtonComponent,
    CreatorDialogComponent,
    TaskDialogComponent,
    TaskEditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    A11yModule,
    BrowserAnimationsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
