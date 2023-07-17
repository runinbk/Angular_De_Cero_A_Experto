import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Searchresponce } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = '16CVSRicTCO6icMT6I7TeZTZhgRsILVg';
  private serviceURL: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) { }

  get tagHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLocaleLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0, 10)
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return
    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<Searchresponce>(`${this.serviceURL}/search`, { params })
      .subscribe(resp => {

        console.log(resp)

      })
  }

}
