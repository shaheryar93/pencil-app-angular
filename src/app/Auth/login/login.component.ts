import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagerService } from 'src/app/Shared-General/services/session-manager.service';
import { ToastrServiceService } from 'src/app/Shared-General/services/toastr-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = "";
  public password = "";
  constructor(public router: Router,
    public Toastr: ToastrServiceService,
    public SessionManagerServiceObj: SessionManagerService) { }

  ngOnInit() {


  }

  login() {


       if(this.email=='test@pencilApp.com' && this.password=='test'){

      this.SessionManagerServiceObj.saveGenericJSON('user', {email:'test@pencilApp.com',password:'test'});
      this.SessionManagerServiceObj.setUserLoggedInStatus(true);
      this.router.navigate(['home']);
      this.Toastr.Success('Welcome', "Login Successfull")
       }

  }

}
