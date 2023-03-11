import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private login:HttpClient) { }

  baseurl='http://15.206.171.20:9090'

 
  loginpostdata(body:any){
    return this.login.post(`${this.baseurl}/login`,body,{responseType:'text'})
  }

}