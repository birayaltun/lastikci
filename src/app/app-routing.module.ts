import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./component/header-component/header-component";
import { WheelsComponent } from "./component/wheels-component/wheels-component";


export const routes: Routes = [
  // { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: 'categories/:categoryName', component: WheelsComponent },
 
  //   { path: '', redirectTo: 'categories', pathMatch: 'full' },
  // // Diğer route’lar buraya
  // { path: '**', redirectTo:'categories' } // bilinmeyen URL’leri categories’e yönlendir
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

