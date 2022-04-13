import { Injectable } from '@angular/core';
import { ListTODO } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TODOService {
  
  list: ListTODO [] = []

  constructor() { 
    this.loadStorage();
  }

  createList ( title : string ) : number { 
    const newList =  new ListTODO (title);
    this.list.push ( newList );
    this.saveStorage();
    return newList.id;
  }

  loadList ( id : number ) : ListTODO {
    return this.list.find( (list) => list.id === id);
  }

  saveStorage ( ) : void {
    localStorage.setItem('data', JSON.stringify(this.list))
  }

  loadStorage () : void{
    const data = localStorage.getItem('data');
    if ( data !== null ) {
      this.list = JSON.parse( data );
    } else {
      this.list = []
    }
  }
}
