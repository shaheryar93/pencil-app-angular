import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { SessionManagerService } from '../services/session-manager.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router,
    public SessionManagerServiceObj: SessionManagerService) { }
    activeUrl = '';
    public user: any = false;
  ngOnInit() {
    this.SessionManagerServiceObj.userLoggedInStatusObs.subscribe(res => {
      this.user = this.SessionManagerServiceObj.getGenericJSON('user');
    });
    $(document).ready(function () {
      $('.navbar-light .dmenu').hover(
        function () {
          $(this)
            .find('.sm-menu')
            .first()
            .stop(true, true)
            .slideDown(150);
        },
        function () {
          $(this)
            .find('.sm-menu')
            .first()
            .stop(true, true)
            .slideUp(105);
        }
      );
    });
  }

  logout() {
    this.SessionManagerServiceObj.logout();
    this.router.navigate(['login']);
  }

}
