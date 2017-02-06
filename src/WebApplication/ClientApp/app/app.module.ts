import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';

import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';

import { FeedBoxComponent } from './components/feedbox/feedbox.component';

import { UserStatus } from './models/userstatus';

import { UserStatusService } from './services/userstatus.service';
import { EmitterService } from './services/emitter.service';


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        PostComponent,
        FeedComponent,
        FeedBoxComponent

    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [UserStatusService, EmitterService]
})
export class AppModule {
}
