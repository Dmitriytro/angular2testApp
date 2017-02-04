import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppRoutingModule} from './app.routing';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent} from "./app.component";
import {TaskListComponent} from "./todo/components/task-list.component";
import {TaskComponent} from "./todo/components/task.component";
import {ContactsComponent} from "./contacts/components/contacts.component";
import {ContactService} from "./contact.service";



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent,
        TaskComponent,
        TaskListComponent,
        ContactsComponent
    ],
    providers: [ContactService],
    bootstrap: [AppComponent]
})
export class AppModule {
}