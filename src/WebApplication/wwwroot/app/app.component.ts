import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http, Headers } from '@angular/http';


import { UserStatusService } from './services/userstatus.service';

@Component({   
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
   
})
   

export class AppComponent implements OnInit
{   title = 'user status'; 
    userstatus: string[];

    constructor(private userStatusService: UserStatusService) { }

    ngOnInit() {
        this.userStatusService.getUserStatus()
            .subscribe(userstatus => this.userstatus = userstatus);
    }

    }