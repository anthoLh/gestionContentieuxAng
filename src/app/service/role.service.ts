import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) { }

  public getAllRole(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/roles').map(Response => Response);
  }
  public getRole(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionContentieux/roles/' + id);
  }
  public saveRole(role: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/gestionContentieux/roles', role);
  }
  public deleteRole(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/gestionContentieux/roles/'+id);
  }
  public updateRole(role: any): Observable<any> {
    var roleParse = JSON.parse(role);
    return this.httpClient.put('http://localhost:9090/gestionContentieux/roles/' + roleParse.idRole, roleParse);
  }
}
