import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { FilmTitleComponent } from './film-title/film-title.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailComponent,
    FilmTitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
