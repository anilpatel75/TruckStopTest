import { Component, OnInit} from '@angular/core';
import { MainAppService } from 'src/app/main-app.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  listOfFilm: Object;
  errorMes: Object;
  param:any;

  constructor(private service: MainAppService, private router:Router,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.service.ItemSubject.subscribe((listOfFilm) => {
      this.listOfFilm = listOfFilm;
    })
    this.service.errorSubject.subscribe((data) => {
      this.errorMes = data;
    })
    console.log(this.route.params.subscribe((params) =>{
       this.param = params.item;
    }))
  }
   onclickFIlm(url:string, i:number) {
   this.service.getfilmTitleData(url).subscribe((filmDetail) => {
   this.service.filmSubject.next(filmDetail);
   }, error => this.service.errorSubject.next(error))
   this.router.navigate([`/${this.param}/film${i}`]);
  }
}
