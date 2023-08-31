import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class OpenwatherService {
  constructor() {}

  private params = new URLSearchParams({
    units: 'metric',
    lang: 'pt_br',
    appid: '9835ad32d6d8e12b3a8e73f5a321d36b',
  });

  getWeatherByCity(city: string): Promise<Response> {
    this.params.set('q', city);
    return fetch(`${API_BASE_URL}?${this.params}`);
  }
}
