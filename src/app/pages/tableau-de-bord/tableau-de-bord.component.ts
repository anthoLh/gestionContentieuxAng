import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.scss']
})
export class TableauDeBordComponent implements OnInit {

  constructor(private router : Router, private appService: AppService) { }

  authenticated() {
    return this.appService.authenticated;
  }

  ngOnInit() {
  }

}
