import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor() { }

  addCar(make:string, model: string, year: string, imageURL:string): boolean{

    let tempCar = new Car(make,model,year,imageURL);
    return false;
  }
  ngOnInit() {
  }

}
