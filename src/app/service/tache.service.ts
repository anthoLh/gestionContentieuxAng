import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private httpClient: HttpClient) { }

  public getAllTache(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/taches').map(Response => Response);
  }
  public getTache(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/taches/' + id);
  }
  public saveTache(tache: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/gestionContentieux/taches', tache);
  }
  public deleteTache(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/gestionContentieux/taches/'+id);
  }
  public updateTache(tache: any): Observable<any> {
    var tacheParse = JSON.parse(tache);
    return this.httpClient.put('http://localhost:9090/gestionContentieux/taches/' + tacheParse.idTache, tacheParse);
  }
}
