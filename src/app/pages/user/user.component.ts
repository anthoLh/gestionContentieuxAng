import { Component, OnInit } from "@angular/core";
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  users:any[];
  user: Utilisateur = new Utilisateur();
  constructor(private userService: UtilisateurService, private router: Router) {}

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getAllUtilisateur().subscribe(
      data => {this.users = data;},
      error => {console.log(error);}
    )
  }
  createUser() {
    this.userService.saveUtilisateur(this.user).subscribe(
      () => {this.loadUser(); this.user = new Utilisateur(); }
    )
  }
  deleteUser(user) {
    this.userService.deleteUtilisateur(user.idUtilisateur).subscribe(
      () => { this.loadUser(); },
      error => { console.log(error); }
    )
  }
  editUser(user){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",user.idUtilisateur.toString());
    this.router.navigate(['updateUser',user.idUtilisateur]);
  }
}
