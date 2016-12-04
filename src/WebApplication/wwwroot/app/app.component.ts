import { Component, OnInit } from '@angular/core';

import { UserStatusService } from './services/userstatus.service';


@Component({   
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
   
})
   
export class AppComponent 
{   title = 'user status'; 
    userstatus: string[];
    

    constructor(
         private userStatusService: UserStatusService) { }


    nxgOnInit() {
        this.userStatusService.getUserStatus()
            .subscribe(userstatus => this.userstatus = userstatus);
    }

    }