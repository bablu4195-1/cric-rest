import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Names } from './cric.model';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }

  url: string ="https://sportsradio.app/sportsradioappapi/interviewtasks/task1";

  getNames(){
    return this.http.get<Names>(this.url);
  }
}
