import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {

  constructor(private httpClient: HttpClient) { }

  public getAllAffaire(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/affaires').map(Response => Response);
  }
  public getAffaire(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/affaires/id/' + id);
  }
  public saveAffaire(affaire: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/gestionContentieux/affaires', affaire);
  }
  public deleteAffaire(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/gestionContentieux/affaires/'+id);
  }
  public updateAffaire(affaire: any): Observable<any> {
    var affaireParse = JSON.parse(affaire);
    return this.httpClient.put('http://localhost:9090/gestionContentieux/affaires/' + affaireParse.idAffaire, affaireParse);
  }
}
