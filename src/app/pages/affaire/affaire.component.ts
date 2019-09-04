import { Component, OnInit } from '@angular/core';
import { Affaire } from 'src/app/model/affaire';
import { AffaireService } from 'src/app/service/affaire.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-affaire',
  templateUrl: './affaire.component.html',
  styleUrls: ['./affaire.component.scss']
})
export class AffaireComponent implements OnInit {
  affaires: any[];
  affaire: Affaire = new Affaire();

  constructor(private affaireService: AffaireService, private router: Router, private appService: AppService) { }

  authenticated() {
    return this.appService.authenticated;
  }
  
  ngOnInit() {
    this.loadAffaire();
  }

  loadAffaire(){
    this.affaireService.getAllAffaire().subscribe(
      data => {this.affaires = data; },
      error => {console.log(error); }
    )
  }
  createAffaire() {
    this.affaireService.saveAffaire(this.affaire).subscribe(
      () => { this.loadAffaire(); this.affaire = new Affaire(); }
    )
  }
  deleteAffaire(affaire) {
    this.affaireService.deleteAffaire(affaire.idAffaire).subscribe(
      () => { this.loadAffaire(); },
      error => { console.log(error); }
    )
  }


}
