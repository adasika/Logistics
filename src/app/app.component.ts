import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {UserService} from './user.service';
import {StorageService} from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'LogisticApp';
  constructor(private user: UserService, private storage: StorageService) {}
  logout() {
    this.user.logout();
  }
  @ViewChild('NavBar', {static:false}) myTemplate; 

  ngAfterViewInit(){
    console.log(this.myTemplate)

  }
}
