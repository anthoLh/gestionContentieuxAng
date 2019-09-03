import { Component, OnInit } from "@angular/core";
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  users: any[];
  user: Utilisateur = new Utilisateur();
  constructor(private userService: UtilisateurService, private router: Router, private appService: AppService) { }

  authenticated() {
    return this.appService.authenticated;
  }

  ngOnInit() {
    this.loadUser();
  }
  // TEST A FAIRE chercher un utilisateur
  lookForUser() {
    this.userService.getUtilisateurByName(this.user.nomUtilisateur).subscribe(
      data => {this.user ; },
    error => { console.log(error); }
    )
  }
  // TEST A FAIRE ^^

  loadUser() {
    this.userService.getAllUtilisateur().subscribe(
      data => { this.users = data; console.log("Les utilisateurs = " + this.users) },
      error => { console.log(error); }
    )
  }
  createUser() {
    this.userService.saveUtilisateur(this.user).subscribe(
      () => { this.loadUser(); this.user = new Utilisateur(); }
    )
  }
  deleteUser(user) {
    this.userService.deleteUtilisateur(user.idUtilisateur).subscribe(
      () => { this.loadUser(); },
      error => { console.log(error); }
    )
  }
  editUser(user) {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.idUtilisateur.toString());
    this.router.navigate(['updateUtilisateur', user.idUtilisateur]);
  }
}
