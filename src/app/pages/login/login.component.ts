import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username: '',password:''};
  constructor(private appService: AppService, private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.appService.authenticate(this.credentials,() => {this.router.navigateByUrl('/dashboard');
  });
  return false;
  }
}
