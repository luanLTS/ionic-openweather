import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OpenwatherService } from '../services/openwather.service';
import { getApiIconUrl } from '../constants/endpoints';

interface weatherInfos {
  temp: string;
  temp_min: string;
  temp_max: string;
  url_icon: string;
  description: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SearchPage implements OnInit {
  isLoading = false;
  cityNotFound = false;
  weatherInfoCity!: weatherInfos;

  constructor(private openweatherService: OpenwatherService) {}

  ngOnInit() {
    this.cleanInfos();
  }

  cleanInfos() {
    this.weatherInfoCity = {
      temp: '',
      temp_min: '',
      temp_max: '',
      url_icon: '',
      description: '',
    };
  }

  async onSearchWeather(searchTerm: any) {
    this.cleanInfos();
    this.cityNotFound = false;
    if (searchTerm === '') return;

    this.isLoading = true;

    const res = await (
      await this.openweatherService.getWeatherByCity(searchTerm)
    ).json();

    console.log(res.cod);
    switch (res.cod) {
      case 200: {
        const { temp, temp_min, temp_max } = res.main;
        const { icon, description } = res.weather[0];
        const url_icon = getApiIconUrl(icon);
        this.weatherInfoCity = {
          temp: Math.round(temp).toString(),
          temp_min: Math.round(temp_min).toString(),
          temp_max: Math.round(temp_max).toString(),
          url_icon,
          description,
        };
        break;
      }
      case '404': {
        this.cityNotFound = true;
        break;
      }
    }

    this.isLoading = false;
  }
}
