import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: 'app', loadChildren: 'src/app/app-home/app-home.module#AppHomeModule'},
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'login', loadChildren: 'src/app/security/security.module#SecurityModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

