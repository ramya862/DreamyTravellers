import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private auth:AuthService,private router:Router)
  {

  }

onSubmit():void {
  if(this.loginForm.valid)
  {
    this.auth.login(this.loginForm.value).subscribe((result)=>
    {
   this.router.navigate(['admin']);
    },
    (err:Error)=>
    {
      alert(err.message)
    });
  }
console.log(this.loginForm.value)}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loginForm=new FormGroup
  (
    {
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,Validators.required)
    }
  );
  
}
