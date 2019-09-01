import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  user: Utilisateur=new Utilisateur();

  constructor(private userService: UtilisateurService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    let userId= localStorage.getItem("editUserId");
    if(!userId){
    alert("Invalid action...")
    this.router.navigate(['user']);
  }
  this.editForm = this.formBuilder.group({
    idUtilisateur:[],
    nomUtilisateur: [''],
    prenomUtilisateur: [''],
  })
  this.userService.getUtilisateur(+userId).subscribe(data => {this.editForm.setValue(data)})
}

updateUtilisateur(){
  var varJSON = JSON.stringify(this.editForm.value);
  this.userService.updateUtilisateur(varJSON).subscribe(() => this.router.navigate(['user']));
}

}
