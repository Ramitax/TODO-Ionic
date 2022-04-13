import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { ListTODO } from 'src/app/models/list.model';
import { TODOService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  
  list : ListTODO;
  nameItem: string;

  constructor(  private todo   : TODOService,
                private route  : ActivatedRoute  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.list = this.todo.loadList(Number(id));
  }
  
  addItem() {
    if ( this.nameItem.length === 0 ) {
      return;
    }
    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = '';
    this.todo.saveStorage();
  }

  changeCheck( item: ListItem) {
    const pending = this.list.items.filter ( item => {
      return !item.complete;
    }).length;
    if(pending === 0 ) {
      this.list.complete = true;
      this.list.finish = new Date();
    } else {
      this.list.complete = false;
      this.list.finish = null;
    }
    this.todo.saveStorage();
  }

  delete( index: number ) {
    this.list.items.splice(index, 1);
    this.todo.saveStorage();
  }
}
