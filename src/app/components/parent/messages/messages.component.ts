import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  users: any
  user: any
  display: boolean = true
  constructor(private http: HttpService) { }
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.http.get("users?limit=8").subscribe((res: any) => {
      if (res.status == 200) {
        console.log('====================================');
        console.log(res);
        this.users = res.body
        console.log('====================================');
      }
    })
  }
  selectedUser(user: any) {
    this.user = user
    this.display = false
  }
}
