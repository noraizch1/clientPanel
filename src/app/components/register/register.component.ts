import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService } from 'angular2-flash-messages'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email: string;
passsword: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }


  onSubmit(){
    this.authService.register(this.email, this.passsword)
    .then(res => {
      this.flashMessage.show('you are now register and logged in',{
        cssClass: 'alert-success',timeout:4000
      });
      this.router.navigate(['/']);
    })
    .catch(err => {
      console.log(err.message);
      this.flashMessage.show(err.message,{
        cssClass: 'alert-danger',timeout:4000
      });
    });  
  }

}