import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ContactsComponent} from "./contacts/components/contacts.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'contacts', pathMatch: 'full'},
    {path: 'about', component: AboutComponent, data: {title: 'AboutList'}},
    {path: 'contacts', component: ContactsComponent, data: {title: 'ContactList'}}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
