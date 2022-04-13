import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TODOService } from 'src/app/services/todo.service';
import { AlertController, IonList } from '@ionic/angular';
import { ListTODO } from 'src/app/models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {


  @ViewChild( IonList) ionList: IonList;
  @Input() finish = true;
  
  constructor(  public todoService      : TODOService, 
                private router          : Router,
                private alerController  : AlertController ) { }

  
  edit( list: ListTODO) {
    if(this.finish){
      this.router.navigateByUrl(`tabs/tab2/add/${list.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${list.id}`);
    }
  }
  
  delete ( index : number ) {
    this.todoService.list.splice(index, 1);
    this.todoService.saveStorage();
  }

  async refactor(index : number) {
    const alert = await this.alerController.create( {
      header: 'Change name of list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: this.todoService.list[index].title
        }
      ],
      buttons: [ 
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Add',
          handler: (data) => {
            if( data.title.length === 0 ) {
              return;
            }
            this.todoService.list[index].title = data.title;
            this.todoService.saveStorage();
            this.ionList.closeSlidingItems()
          }
        }
      
      ]
    })
    alert.present();
  }
}
