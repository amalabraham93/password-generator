import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiUrl = 'https://ai-weather-by-meteosource.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  getWeatherDataByCoords(lat: number, lon: number): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '1587d53a95msh58a6de256a35a2bp115e9ajsn4a4f2488f16b',
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
    });

    const options = { headers: headers };

    return this.http.get(`${this.apiUrl}/current?lat=${lat}&lon=${lon}&timezone=auto&language=en&units=auto`, options);
  }

  // currentWeather(): Observable<any>{
  //   const headers = new HttpHeaders({
  //     'X-RapidAPI-Key': '1587d53a95msh58a6de256a35a2bp115e9ajsn4a4f2488f16b',
  //     'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
  //   });

  //   const options = { headers: headers };

  //   return this.http.get(`${this.apiUrl}/current?text=${place}&language=en`, options);
  // }
}