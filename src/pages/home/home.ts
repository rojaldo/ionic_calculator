import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  email: string;
  account: number;
  users: User[];

  constructor(public navCtrl: NavController) {
    this.users = new Array<User>();
  }

  addUser() {
    const myuser = new User (this.name, this.email, this.account);
    this.users.push(myuser);
  }

}

