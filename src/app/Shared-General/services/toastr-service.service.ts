import { Injectable } from '@angular/core';
declare var toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToastrServiceService {

  constructor() {
    this.settings()
  }
  Success(message: string, title?: string) {
    toastr.success(message, title);
  }

  Info(message: string, title?: string) {
    toastr.info(message, title);
  }

  Warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  Error(message: string, title?: string) {
    toastr.error(message, title);
  }
  settings() {
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': true,
      'progressBar': false,
      'positionClass': 'toast-top-right',
      'preventDuplicates': true,
      'onclick': null,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    };
  }
}
