import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
//import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { EditUserComponent } from 'src/app/pages/edit-user/edit-user.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AffaireComponent } from 'src/app/pages/affaire/affaire.component';
import { TacheComponent } from 'src/app/pages/tache/tache.component';
import { TribunauxComponent } from 'src/app/pages/tribunaux/tribunaux.component';
import { TableauDeBordComponent } from 'src/app/pages/tableau-de-bord/tableau-de-bord.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [

  { path: '', redirectTo: '/login', pathMatch:'full'},
  { path: "login", component: LoginComponent },
  { path: "tdb", component: TableauDeBordComponent },
  { path: "user", component: UserComponent },
  { path: "affaire", component: AffaireComponent },
  { path: "tache", component: TacheComponent },
  { path: "tribunaux", component: TribunauxComponent },
  { path: "updateUtilisateur/:id", component: EditUserComponent },
  //{ path: "resultatrecherche/:name", component: RechercheUserComponent },
  //{ path: "maps", component: MapComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  //{ path: "rtl", component: RtlComponent }
];
