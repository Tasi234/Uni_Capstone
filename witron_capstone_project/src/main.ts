import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
//import { ContactsComponent } from './app/contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';



bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClient)]
})
  .catch(err => console.error(err));
