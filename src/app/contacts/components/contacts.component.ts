import {Component, OnInit} from "@angular/core";
import {Contact} from "../../class/contact";
import {ContactService} from "../../contact.service";

@Component({
    templateUrl: './app/contacts/components/contacts.html',
    styleUrls: ['./app/contacts/components/contacts.css']
})
export class ContactsComponent implements OnInit {
    contacts: Contact[];
    selectedContact = {};
    constructor(
        private contactService: ContactService
    ){}
    ngOnInit() {
        this.getContact();
    }
    sort(by: string): void{
        if(by == 'value'){
            this.contacts = this.contacts.sort((a: Contact, b: Contact)=>{
                const aNumber = this.formatPhoneNumber(a[by]);
                const bNumber = this.formatPhoneNumber(b[by]);
                return aNumber-bNumber;
            });
        }else if(by == 'name'){
            this.contacts = this.sortProperties(this.contacts,by);
        }
    }
    getContact(): void{
        this.contactService.getContact()
            .then(contacts => this.contacts = contacts);
    }
    delete(contact: Contact): void{
        this.contactService.delete(contact.id)
            .then(()=>{
                this.contacts = this.contacts.filter((c)=>c.id !== contact.id);
                this.selectedContact = {};
            })
    }
    add(arr: Array): void{
        if(arr[0].length>0 && arr[1].length>0){
            if(arr[2].id){
                this.update(arr[2],null);
                console.error('update...')
            }else{
                this.contactService.create(arr)
                    .then(contact => {
                        this.contacts.push(contact);
                        this.selectedContact = {};
                    })
            }
        }else{
            console.error('Name or Number is not valid');
            if(arr[2].id){
                this.delete(arr[2]);
            }
            this.selectedContact = {};
        }
    }
    update(selectedContact: any,newContact: Contact): void{
        if(selectedContact.id){
            if(selectedContact.name.length == 0 || selectedContact.value.length == 0){
                this.delete(selectedContact);
            }else{
                this.contactService.update(selectedContact)
                    .then(contact => {
                        if(newContact){this.selectedContact = newContact}
                        else{this.selectedContact = {}}
                    })
            }
        }else{
            console.error('You need to save first');
        }

    }
    edit(contact: Contact): void{
        if(this.selectedContact.hasOwnProperty('id')){
            this.update(this.selectedContact,contact);
            console.log('saved');
        }
        this.selectedContact = contact;
    }
    private formatPhoneNumber(s: string): number {
        var s2 = (""+s).replace(/\D/g, '');
        return +s2;
    }
    private sortProperties(objArr: Contact[], by: string): Contact[] {
        let arr = [];
        let newObjArr = [];
        objArr.forEach((elem)=>{
            arr.push(elem[by])
        });
        arr.sort();
        for (let i = 0; i < arr.length; i++) {
            objArr.forEach((elem, count)=> {
                if (arr[i] == elem[by]) {
                    newObjArr.push(elem)
                }
            });
        }
        return newObjArr;
    }
}