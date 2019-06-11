import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailComponent } from './components/detail/detail.component';
import { FilmTitleComponent } from './film-title/film-title.component';

const routes: Routes = [
{path:"", component:HomePageComponent},
{path:":item" , component:DetailComponent},
{path:":item/:title" , component:FilmTitleComponent},
{path: "**" , component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
