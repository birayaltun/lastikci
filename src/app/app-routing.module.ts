import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WheelsComponent } from './component/wheels-component/wheels-component';
import { RoadassistanceComponent } from './component/roadassistance-component/roadassistance-component';
import { ContactComponent } from './component/contact-component/contact-component';
import { MainmenuComponent } from './component/mainmenu-component/mainmenu-component';

export const routes: Routes = [
  { path: '', redirectTo: 'anasayfa', pathMatch: 'full' },

  { path: 'anasayfa', component: MainmenuComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'yol-yardim', component: RoadassistanceComponent },
  { path: 'yolyardım', redirectTo: 'yol-yardim' },

  { path: 'lastikler', component: WheelsComponent },
  { path: 'lastikler/:categoryName', component: WheelsComponent },
  { path: 'wheels/categories/:categoryName', redirectTo: 'lastikler/:categoryName' },

  { path: '**', redirectTo: 'anasayfa' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
