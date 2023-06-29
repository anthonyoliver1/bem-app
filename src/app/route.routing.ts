import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '/', component: LoginComponent },
];

export const RouteRoutes = RouterModule.forChild(routes);
