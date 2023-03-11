import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgetService } from '../services/forget.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {


  constructor(private forgetPass:ForgetService){}

  pass=new FormGroup({
    emailId:new FormControl()
  })

  getPassword(){
    this.forgetPass.getRegister(this.pass.value.emailId).subscribe(res=>alert(res))
  }
}



