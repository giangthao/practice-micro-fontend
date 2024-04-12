import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, RouterModule.forRoot(routes)],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
