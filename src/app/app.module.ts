import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material-module';
import { InlineEditDirective } from './inline-edit/inline-edit.directive';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyPageComponent,
    CompanyListComponent,
    InlineEditDirective,
    InlineEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {
}
