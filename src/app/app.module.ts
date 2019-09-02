import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { AffaireService } from './service/affaire.service';
import { DocumentService } from './service/document.service';
import { PhaseService } from './service/phase.service';
import { RoleService } from './service/role.service';
import { TacheService } from './service/tache.service';
import { TribunalService } from './service/tribunal.service';
import { UtilisateurService } from './service/utilisateur.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [AffaireService, DocumentService, PhaseService, RoleService, TacheService, TribunalService, UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
