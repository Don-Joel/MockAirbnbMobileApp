import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];

  //parameters
  public name: string;
  public surName: string;
  public cellPhone: string;
  public email: string;
  public password: string;
  public role: string;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getAll().then((response : any) => {
      console.log(response);
      this.users = response;
    }).catch((err) => {
    });
  }

}
