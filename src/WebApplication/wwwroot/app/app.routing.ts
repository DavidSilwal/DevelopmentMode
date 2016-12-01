import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: AppComponent },

    
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);