import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListTODO } from 'src/app/models/list.model';
import { TODOService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  

  constructor(  public todoService      : TODOService, 
                private router          : Router,
                private alerController  : AlertController  ) { }


  async add() {
    const alert = await this.alerController.create( {
      header: 'Add new list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name of new list'
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
            const id = this.todoService.createList(data.title);
            this.router.navigateByUrl(`tabs/tab1/add/${id}`);
          }
        }
      
      ]
    })
    alert.present();
  }

}
