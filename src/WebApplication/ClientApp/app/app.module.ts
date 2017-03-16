import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';

import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';

import { FeedBoxComponent } from './components/feedbox/feedbox.component';
//import { EditStatusComponent } from './components/feedbox/editstatus/editstatus.component';
import { DetailStatusComponent } from './components/feedbox/detailstatus/detailstatus.component';

import { CommentListComponent } from './components/comment/comment-list.component';
import { CommentFormComponent } from './components/comment/comment-form.component';

import { DomainExpertComponent } from './components/domainexpert/domainexpert.component';

import { DateFormatPipe } from './pipes/date-format.pipe';

import { UserStatus } from './models/userstatus';

import { UserStatusService } from './services/userstatus.service';
import { StatusTypeService } from './services/statusType.sevice';
import { EmitterService } from './services/emitter.service';


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        PostComponent,
        FeedComponent,
        FeedBoxComponent,
        CommentListComponent,
        CommentFormComponent,
        DateFormatPipe,
        DomainExpertComponent,
        DetailStatusComponent
        

    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },

            { path:'home/domainexpert', component: DomainExpertComponent },

            //detail 
            { path: 'home/detail/:id', component: DetailStatusComponent },
            { path: '**', redirectTo: 'home' }
           
            
        ])
    ],
    providers: [UserStatusService, EmitterService,StatusTypeService]
})
export class AppModule {
}
