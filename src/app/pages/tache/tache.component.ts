import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/model/tache';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { TacheService } from 'src/app/service/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  taches: any[];
  tache: Tache = new Tache();
  viewDate: Date = new Date();
  events = [];

  constructor(private tacheService: TacheService, private router: Router, private appService: AppService) { }

  authenticated() {
    return this.appService.authenticated;
  }

  ngOnInit() {
    this.loadTache();
  }
  loadTache(){
    this.tacheService.getAllTache().subscribe(
      data => {this.taches = data; },
      error => {console.log(error); }
    )
  }
  createTache() {
    this.tacheService.saveTache(this.tache).subscribe(
      () => { this.loadTache(); this.tache = new Tache(); }
    )
  }
  deleteTache(tache) {
    this.tacheService.deleteTache(tache.idTache).subscribe(
      () => { this.loadTache(); },
      error => { console.log(error); }
    )
  }

}
