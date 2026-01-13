import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header-component/header-component";
import { WheelsComponent } from "./component/wheels-component/wheels-component";
import { RoadassistanceComponent } from './component/roadassistance-component/roadassistance-component';
import { ContactComponent } from './component/contact-component/contact-component';
import { MainmenuComponent } from './component/mainmenu-component/mainmenu-component';

export const routes: Routes = [
   { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },
   // { path: 'categories/:categoryName', component: WheelsComponent },
 
     { path: 'anasayfa', component: MainmenuComponent },
     { path: 'iletisim', component: ContactComponent },
     { path: 'yolyardım', component: RoadassistanceComponent },
     { path: 'lastikler', component: WheelsComponent },
      {path:'wheels/categories/:categoryName',component:WheelsComponent}
  
];

@NgModule({

imports: [
  RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled',   // scroll'u kapatır
    anchorScrolling: 'disabled'              // anchor scroll'u kapatır
  })
],    exports:[RouterModule]
})

export class  AppRoutingModule{

}

