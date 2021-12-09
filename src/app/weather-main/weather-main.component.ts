import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from "../service/weatherService.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {parseJson} from "@angular/cli/utilities/json-file";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {
  saveForm!: FormGroup;
 ville!: string;


  constructor(private fb: FormBuilder, private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.saveForm = this.fb.group({
      nameVille: []
    });
  }

  getVille(){
    let r = this.weatherService.getWeather(this.saveForm.value.nameVille);
    r.subscribe(data=> {
      console.log(JSON.stringify(data));
    })

  }


}
