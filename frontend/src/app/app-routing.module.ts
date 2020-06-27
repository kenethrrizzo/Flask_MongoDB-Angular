import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'view',
    component: UserViewComponent,
  },
  {
    path: 'create',
    component: UserCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
