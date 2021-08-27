import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Board } from '../models/board.model';
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
}
