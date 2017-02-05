import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from './app.routing';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent} from "./app.component";
import {ContactsComponent} from "./contacts/components/contacts.component";
import {ContactService} from "./contact.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AboutComponent} from "./about/about.component";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ContactsComponent,
        AboutComponent
    ],
    providers: [ContactService],
    bootstrap: [AppComponent]
})
export class AppModule {
}