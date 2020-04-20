import {HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HelperService {
  covidData: any;
  configUrl = 'https://api.covid19india.org/data.json';
  stateUrl ='https://api.covid19india.org/state_district_wise.json';
  websiteData ='https://api.covid19india.org/website_data.json';
  constructor(public http: HttpClient) { }
    /** GET heroes from the server */
    getcovidDate (): Observable<any[]> {
      return this.http.get<any[]>(this.configUrl)
    }

    getIndiaStateData():Observable<any[]>{
      return this.http.get<any[]>(this.stateUrl);
    }

    getQuestions():Observable<any[]>{
      return this.http.get<any[]>(this.websiteData);
    }

}
