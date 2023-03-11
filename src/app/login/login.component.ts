import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {




constructor(private login: LoginService){ this.post()}
data:any

loginform=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  pwd:new FormControl('',[Validators.required,Validators.minLength(5)])
})


post(){
  this.login.loginpostdata(this.loginform.value).subscribe(Response=>alert(Response))
}
}
