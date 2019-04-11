import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Food } from '../_model/food';


@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  upc: number;
  maintext: Food;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.upc = this.route.snapshot.params.upc;
    this.http.get('https://api.edamam.com/api/food-database/parser?upc=' +
    this.upc +
    '&app_id=0ae6af72&app_key=12eade76ad5a3dbc2b3c636647f81741')
    .subscribe((res: any ) => {
      this.maintext = res.hints[0].food;
      console.log(this.maintext);
  });

  }

}
