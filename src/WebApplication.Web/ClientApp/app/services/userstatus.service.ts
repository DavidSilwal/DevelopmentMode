import { UserStatus } from './../models/userstatus';
import { Comments } from './../models/comments';
//import { Likes } from './../models/likes';




import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserStatusService {

    constructor(private http: Http) { }

    private Url = "http://localhost:50353/api/feed";
   
    

private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

   getStatus(): Observable<UserStatus[]> {

        return this.http.get(this.Url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    statusDetail(_id: string): Observable<UserStatus[]> {
        return this.http.get(this.Url+ '/' + _id)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    disLike(_id:string):Observable<UserStatus[]>{
          let bodyString = JSON.stringify(_id); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.Url+'/'+ _id + '/unlike',_id,options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    addLike(_id: string): Observable<UserStatus[]>{
         let bodyString = JSON.stringify(_id); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.Url+'/'+ _id + '/like',_id,options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    
    }
// addLike(_id:string):Observable<likes[]>{
        

//         return this.http.get(this.likeUrl+'/'+ _id + '/like')
//                     .map((res: Response) => res.json())
//                     .catch(this.handleError);
//     }
  
    


    //add a new status
    addStatus(body: UserStatus): Observable<UserStatus[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.Url, body, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError);
    }

    // Update a status
    updateStatus(id:string, body: UserStatus): Observable<UserStatus[]> {
        console.log(id);
        console.log('mahesh');
        console.log(body);
        console.log(body.Status);
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var editedText = body.Status;
        return this.http.put(this.Url + '/edit' + '/' + id + '/' + editedText, editedText) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: Response) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // detail of status 
  
   
    // Delete a status
    removeStatus(_id: string): Observable<UserStatus[]> {
        return this.http.delete(`${this.Url}/${_id}`) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    }
    
    // Add a new comment
    addComment(id: string, body: Comments): Observable<Comments[]> {
        console.log(id);
        console.log(body);
        let commentsString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        console.log(body);
        console.log(id);
        console.log("mahesh");
        var commentText = body.text;

        return this.http.post(this.Url + '/' + id +'/'+ commentText, commentText, headers) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch(this.handleError); //...errors if any
    } 

   


  
    }
