import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { UserStatusService } from './services/userstatus.service';
    

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [
        appRoutingProviders,
        UserStatusService
    
    ],
    declarations: [
        AppComponent,
    
      
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }