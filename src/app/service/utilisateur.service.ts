import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient: HttpClient) { }

  public getAllUtilisateur(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/utilisateurs').map(response => response);
  }
  public getUtilisateur(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/utilisateurs/' + id);
  }
  public saveUtilisateur(utilisateur: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/utilisateurs', utilisateur);
  }
  public deleteUtilisateur(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/utilisateurs/' + id);
  }
  public updateUtilisateur(utilisateur: any): Observable<any> {
    var utilisateurParse = JSON.parse(utilisateur);
    return this.httpClient.put('http://localhost:9090/utilisateurs/' + utilisateurParse.idUtilisateur, utilisateurParse);
  }
}
