import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreacionalesComponent } from './components/creacionales/creacionales.component';

@NgModule({
  declarations: [
    AppComponent,
    CreacionalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
