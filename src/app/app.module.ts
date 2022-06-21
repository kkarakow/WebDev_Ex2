import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeadfootModule } from './modules/headfoot/headfoot.module';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Karakow01tabComponent } from './karakow01tab/karakow01tab.component';
import { Karakow02tabComponent } from './karakow02tab/karakow02tab.component';
import { Karakow03tabComponent } from './karakow03tab/karakow03tab.component';
import { Karakow04tabComponent } from './karakow04tab/karakow04tab.component';

@NgModule({
  declarations: [
    AppComponent,
    Karakow01tabComponent,
    Karakow02tabComponent,
    Karakow03tabComponent,
    Karakow04tabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeadfootModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
	  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
