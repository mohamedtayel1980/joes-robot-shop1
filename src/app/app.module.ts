import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent  // Declare AppComponent here
  ],
  imports: [
    BrowserModule  // Import necessary Angular modules
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent
})
export class AppModule { }
