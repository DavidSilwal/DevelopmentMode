import { Component, Input, OnInit} from '@angular/core';
import { Http} from '@angular/http';

import { EmitterService } from '../../../services/emitter.service';
import { UserStatusService } from '../../../services/userstatus.service';
import { UserStatus } from '../../../models/userstatus';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
    
    selector: 'app-status-detail',
    template: require('./detailstatus.component.html')
})
export class DetailStatusComponent implements OnInit {

    

    constructor(private _http: Http,
                private route: ActivatedRoute,

        private statusService: UserStatusService,
         private router: Router
    ) {


     }
    
    userstatus: UserStatus[];
   
    

    loadStatusss() {
        

        this.route.params
        .map(params => params['id'])
        .subscribe((id)=> {
            this.statusService
                .statusDetail(id)
                .subscribe(
                    userstatus => this.userstatus = userstatus, //Bind to view
                            err => {
                  console.log(err);
            });          
        })
                                   
        
    }

   ngOnInit(){
        // Load status
         this.loadStatusss()

    }

}