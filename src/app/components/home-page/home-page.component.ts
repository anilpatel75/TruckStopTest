import { Component,  } from '@angular/core';
import { MainAppService } from 'src/app/main-app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  listOfChar: Object;
  errorMes: Object;

  // geting Json Data from Json File
  constructor(private service: MainAppService, private router: Router) {
    this.service.getJsonData().subscribe((listOfChar) => {
      this.listOfChar =  listOfChar;
    },
    error => this.errorMes = error);
  }

   // Calling the list of Films On Click
  onCharClick(item: string, name: string) {
    this.service.getSelectedItem(item).subscribe((data) => {
      this.service.ItemSubject.next(data)
    },
      //handling erro for responce 404
      error => this.service.errorSubject.next(error))
      // Navigate to diffrent route
     this.router.navigateByUrl(`/${name}`);
  }
}