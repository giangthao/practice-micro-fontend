import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, RouterModule.forRoot(routes)],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
