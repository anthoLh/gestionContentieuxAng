import { Component, OnInit } from '@angular/core';
import { Tribunal } from 'src/app/model/tribunal';
import { TribunalService } from 'src/app/service/tribunal.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-tribunaux',
  templateUrl: './tribunaux.component.html',
  styleUrls: ['./tribunaux.component.scss']
})
export class TribunauxComponent implements OnInit {
  tribunals: any[];
  tribunal: Tribunal = new Tribunal();

  constructor(private tribunalService: TribunalService, private router: Router, private appService: AppService) { }

  authenticated() {
    return this.appService.authenticated;
  }

  ngOnInit() {
    this.loadTribunal();
  }
  
  loadTribunal(){
    this.tribunalService.getAllTribunal().subscribe(
      data => {this.tribunals = data; },
      error => {console.log(error); }
    )
  }
  createTribunal() {
    this.tribunalService.saveTribunal(this.tribunal).subscribe(
      () => { this.loadTribunal(); this.tribunal = new Tribunal(); }
    )
  }
  deleteTribunal(tribunal) {
    this.tribunalService.deleteTribunal(tribunal.idTribunal).subscribe(
      () => { this.loadTribunal(); },
      error => { console.log(error); }
    )
  }

}
