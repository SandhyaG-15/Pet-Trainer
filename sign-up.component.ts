import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../signUp';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  user:User=new User();
  onSignUp(): void{
    this.userService.createUser(this.user).subscribe(data=> {});
  }

}
