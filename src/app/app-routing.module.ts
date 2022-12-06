import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuardGuard} from './services/auth-guard.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'app', loadChildren: 'src/app/app-home/app-home.module#AppHomeModule'},
  {path: 'login', loadChildren: 'src/app/security/security.module#SecurityModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule {
}

