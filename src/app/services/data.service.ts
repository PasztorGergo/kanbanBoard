import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db:AngularFirestore) { }

  getBoards(){
    return this.db.collection('Boards').valueChanges({idField:"id"});
  }
  deleteBoard(board){
    return this.db.collection('Boards').doc(board.id).delete();
  }
  updateBoard(board){
    return this.db.collection('Boards').doc(board.id).update(board);
  }
  addBoard(board){
    return this.db.collection('Boards').add(board);
  }
  sortBoards(boards:Array<any>){
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('Boards').doc(b.id));
    refs.forEach((ref, index) => batch.update(ref,{priority: index}));
    batch.commit();
  }
}
