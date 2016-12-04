import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';

import { NewsFeedComponent } from './components/newsfeed/newsfeed.component';
@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        FetchDataComponent,
        NewsFeedComponent

    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'newsfeed', pathMatch: 'full' },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'newsfeed', component: NewsFeedComponent },
            { path: '**', redirectTo: 'newsfeed' }
        ])
    ]
})
export class AppModule {
}
