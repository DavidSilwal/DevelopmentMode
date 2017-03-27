//observable 

//getting status type 

//get() from url
import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'

@Injectable()
export class StatusTypeService{

    private _url: string = "http://localhost:50353/api/statustype"
    constructor(private _http: Http){

    }
    getStatusType(){
        return this._http.get(this._url)
                 .map((response:Response) => response.json());
    }
}