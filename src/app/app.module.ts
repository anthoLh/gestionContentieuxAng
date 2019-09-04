import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injectable } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { AffaireService } from './service/affaire.service';
import { DocumentService } from './service/document.service';
import { PhaseService } from './service/phase.service';
import { RoleService } from './service/role.service';
import { TacheService } from './service/tache.service';
import { TribunalService } from './service/tribunal.service';
import { UtilisateurService } from './service/utilisateur.service';
import { AppService } from './app.service';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [
    AppService,
    AffaireService,
    DocumentService, 
    PhaseService,
    RoleService, 
    TacheService, 
    TribunalService, 
    UtilisateurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
