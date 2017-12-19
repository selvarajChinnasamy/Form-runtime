import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitData } from './data';

@Injectable()
export class DataService {

  constructor(private _http:HttpClient) { }
  getJobs(){ // https://api.github.com/users/selvarajchinnasamy
    return this._http.get('assets/data.json');
   }
}
