import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.userService.users = res as User[]
    });
  }

  preUpdateUser(user){
    this.userService.selectedUser = user
  }

  updateUser(){
    const user = this.userService.selectedUser
    this.userService.updateUser(user).subscribe((res)=> {
      return res
    })
  }

  deleteUser(_id){
    this.userService.deleteUser(_id).subscribe((res)=>{
      this.getUsers()
    })
  }

}
