import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EditUserComponent } from 'src/app/pages/edit-user/edit-user.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AffaireComponent } from 'src/app/pages/affaire/affaire.component';
import { TacheComponent } from 'src/app/pages/tache/tache.component';
import { TribunauxComponent } from 'src/app/pages/tribunaux/tribunaux.component';
import { TableauDeBordComponent } from 'src/app/pages/tableau-de-bord/tableau-de-bord.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    UserComponent,
    EditUserComponent,
    LoginComponent,
    AffaireComponent,
    TacheComponent,
    TribunauxComponent,
    DashboardComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    TableauDeBordComponent,
    // MapComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
