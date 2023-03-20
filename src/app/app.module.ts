import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule}from '@angular/material/input';
import {MatFormFieldModule}from '@angular/material/form-field'
import {MatRadioModule} from '@angular/material/radio';

import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './pages/header/header.component';
import { ProfessionalsComponent } from './pages/professionals/professionals.component';
import { TrusteesComponent } from './pages/trustees/trustees.component';
import { HomeComponent } from './pages/home/home.component';
import { DialogBodyComponent } from './pages/dialog-body/dialog-body.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    ProfessionalsComponent,
    TrusteesComponent,
    HomeComponent,
    DialogBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
