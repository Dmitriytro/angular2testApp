import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Contact} from "./contacts/class/Contact";

@Injectable()
export class ContactService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private contactsUrl = 'api/contacts';  // URL to web api
    constructor(private http: Http) { }
    getContact(): Promise<Contact[]> {
        return this.http.get(this.contactsUrl)
            .toPromise()
            .then(response => response.json().data as Contact[])
            .catch(this.handleError);
    }
    delete(id: number): Promise<null>{
        const url = `${this.contactsUrl}/${id}`;
        return this.http.delete(url,{headers:this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
    }
    create(arr: Array): Promise<Contact>{
        return this.http.post(this.contactsUrl, JSON.stringify({name:arr[0],value:arr[1]}),{headers:this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    update(selectedContact: Contact): Promise<Contact>{
        const url = `${this.contactsUrl}/${selectedContact.id}`;
        return this.http.put(url, JSON.stringify(selectedContact), {headers: this.headers})
            .toPromise()
            .then(() => selectedContact)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
