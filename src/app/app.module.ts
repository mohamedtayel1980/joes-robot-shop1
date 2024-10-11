import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  // Declare AppComponent here
  ],
  imports: [
    BrowserModule  // Import necessary Angular modules
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent
})
export class AppModule { }
