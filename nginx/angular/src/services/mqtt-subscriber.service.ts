import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MqttSubscriberService {

  constructor(private httpClient:HttpClient){ }
  baseUrl = environment.apiHost;

  getMessage() {
    return this.httpClient.get('http://'+ this.baseUrl +'/api');
  }

  getTopics() {
    return this.httpClient.get('http://'+ this.baseUrl + '/api/topics');
  }

  subscribe(){}

  publish(){}
}
