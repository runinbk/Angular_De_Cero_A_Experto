import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.com/v3.1/lang/spanish')
      .subscribe(paises => {
        console.log(paises);
      })
  }
}
