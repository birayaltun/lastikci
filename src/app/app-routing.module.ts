import {  RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./component/categories-component/categories-component";
import { HeaderComponent } from "./component/header-component/header-component";
import { Sandwichescomponent } from "./component/KategoriTurleri/sandwiches-component/sandwiches-component";
import { Burgerscomponent } from "./component/KategoriTurleri/burgers-component/burgers-component";


export const routes: Routes = [
  
    { path: 'categories', component: CategoriesComponent },
    {path:"categories/burgers",component:Sandwichescomponent},
    {path:"categories/snacks",component:Burgerscomponent}
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

