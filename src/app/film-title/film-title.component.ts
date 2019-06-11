import { Component, OnInit } from '@angular/core';
import { MainAppService } from '../main-app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-title',
  templateUrl: './film-title.component.html',
  styleUrls: ['./film-title.component.css']
})
export class FilmTitleComponent implements OnInit {
  film:any;
  filmParam:any;
  error:any;

  constructor( private service: MainAppService) { }

  ngOnInit() {
  this.service.filmSubject.subscribe((film) => {
    this.film = film
    console.log(this.film)
  })
  this.service.errorSubject.subscribe((error) => {
      this.error = error;
  })
  }

}
