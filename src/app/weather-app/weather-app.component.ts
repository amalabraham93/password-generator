import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent {
  place = 'kannur';
  weatherData: any;
  errorMessage: string = '';
  

  constructor(private weatherService: WeatherServiceService) {}

  getCurrentWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          
          this.weatherService.getWeatherDataByCoords(lat, lon).subscribe(
            (data) => {
              this.weatherData = data;
              console.log(this.weatherData);
            },
            (error) => {
              console.error(error);
              this.errorMessage = 'Failed to fetch weather data.';
            }
          );
        },
        (error) => {
          console.error(error);
          this.errorMessage = 'Failed to get location.';
        }
      );
    } else {
      this.errorMessage = 'Geolocation is not supported by this browser.';
    }
  }


  getWeatherIcon(iconCode: string): string {
    switch (iconCode) {
      case '01d':
        return 'fas fa-sun sun';
      case '01n':
        return 'fas fa-moon moon';
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return 'fas fa-cloud clouds';
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return 'fas fa-cloud-rain rain';
      default:
        return 'fas fa-question';
    }
  }
}