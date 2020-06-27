import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  formCreateUser = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  createUser(user){
    this.userService.createUser(user).subscribe((res) => {
      console.log(res)
    })
  }

}
