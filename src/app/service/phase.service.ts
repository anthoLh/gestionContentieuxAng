import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  constructor(private httpClient: HttpClient) { }

  public getAllPhase(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/phases').map(Response => Response);
  }
  public getPhase(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/phases/' + id);
  }
  public savePhase(phase: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/phases', phase);
  }
  public deletePhase(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/phases/'+id);
  }
  public updatePhase(phase: any): Observable<any> {
    var phaseParse = JSON.parse(phase);
    return this.httpClient.put('http://localhost:9090/phases/' + phaseParse.idPhase, phaseParse);
  }
}
