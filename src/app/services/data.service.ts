import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Board } from '../models/board.model';
import { Task } from '../models/task.model';
import firebase from 'firebase/compat/app';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFirestore, private afAuth: AngularFireAuth) { }

  getBoards(){
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.db.collection<Board>('Boards',ref => 
            ref.where('uid','==',user.uid).orderBy('priority')
          ).valueChanges({idField:'id'})
        }
        else{
          return [];
        }
      })
    );
  }
  deleteBoard(board:Board){
    return this.db.collection('Boards').doc(board.id).delete();
  }
  updateBoard(board:Board){
    return this.db.collection('Boards').doc(board.id).update(board);
  }
  async addBoard(board:Board){
    return this.db.collection('Boards').add({
      ...board, uid: (await this.afAuth.currentUser).uid
    });
  }
  sortBoards(boards:Array<Board>){
    const db = this.db.firestore
    const batch = db.batch();
    const refs = boards.map(b => db.collection('Boards').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref,{priority: idx}));
    batch.commit();
  }

  addTask(board:Board){
    this.db.collection('Boards').doc(board.id).update({taskArray:board.taskArray})
  }
  sortTasks(board:Board){
    const db = this.db.firestore
    const batch = db.batch();
    batch.update(db.collection('Boards').doc(board.id),{taskArray:board.taskArray})
    batch.commit();
  }
  updateTask(board:Board){
    return this.db.collection('Boards').doc(board.id).update({taskArray:board.taskArray});
  }
  deleteTask(boardId:string,task:Task){
    return this.db.collection('Boards').doc(boardId).update({taskArray: firebase.firestore.FieldValue.arrayRemove(task)});
  }
}
