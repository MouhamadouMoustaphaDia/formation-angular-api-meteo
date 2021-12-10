import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from "../service/weatherService.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {
  saveForm!: FormGroup;
 //ville = new Object();
  nameVille="" ;
  temperature="";
  humidite="";
  tempMax="";
  tempMin="";


  constructor(private fb: FormBuilder, private weatherService: WeatherServiceService) { }



  ngOnInit(): void {
    this.saveForm = this.fb.group({
      nameVille: []
    });
  }

  getVille(){
    let r = this.weatherService.getWeather(this.saveForm.value.nameVille);
    r.subscribe(data=> {

       this.nameVille = data.name;
       this.temperature = data.main.temp;
       this.tempMin = data.main.temp_min;
       this.tempMax = data.main.temp_max;
       this.humidite = data.main.humidity;
      console.log(data);


    })

  }



}
