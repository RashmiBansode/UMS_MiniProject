import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {


  constructor(private register:HttpClient) { }

  baseurl:string="http://15.206.171.20:9090"

getRegister(mail:any){
  return this.register.get(`${this.baseurl}/forgotPwd/${mail}`,{responseType:'text'})
}

}