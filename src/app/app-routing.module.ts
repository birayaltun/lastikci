import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./component/categories-component/categories-component";
import { HeaderComponent } from "./component/header-component/header-component";
import { SweetComponent } from "./component/KategoriTurleri/sweet-component/sweet-component";
import { FastfoodComponent } from "./component/KategoriTurleri/fastfood-component/fastfood-component";


export const routes: Routes = [
    { path: 'categories', component: CategoriesComponent },
    {path:"categories/sweets",component:SweetComponent},
    {path:"categories/fastfoods",component:FastfoodComponent}
  //   { path: '', redirectTo: 'categories', pathMatch: 'full' },
  // // Diğer route’lar buraya
  // { path: '**', redirectTo:'categories' } // bilinmeyen URL’leri categories’e yönlendir
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class  AppRoutingModule{

}

