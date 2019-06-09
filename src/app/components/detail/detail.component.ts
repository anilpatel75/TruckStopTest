import { Component, OnInit} from '@angular/core';
import { MainAppService } from 'src/app/main-app.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  listOfFilm: Object;
  errorMes: Object;

  constructor(private service: MainAppService) {
  }

  ngOnInit() {
    this.service.ItemSubject.subscribe((listOfFilm) => {
      this.listOfFilm = listOfFilm;
    })
    this.service.errorSubject.subscribe((data) => {
      this.errorMes = data;
    })
  }
}
