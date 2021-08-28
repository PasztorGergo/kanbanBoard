import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Board } from '../models/board.model';
import { Task } from '../models/task.model';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFirestore) { }

  getBoards(){
    return this.db.collection<Board>('Boards',ref => ref.orderBy('priority','asc')).valueChanges({idField: 'id'});
  }
  deleteBoard(board:Board){
    return this.db.collection('Boards').doc(board.id).delete();
  }
  updateBoard(board:Board){
    return this.db.collection('Boards').doc(board.id).update(board);
  }
  addBoard(board:Board){
    return this.db.collection('Boards').add(board);
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
