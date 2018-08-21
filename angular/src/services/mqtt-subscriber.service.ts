import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MqttSubscriberService {

  constructor(private httpClient:HttpClient){ }
  baseUrl = environment.baseUrl;

  getMessage() {
    return this.httpClient.get(this.baseUrl);
  }
  getTopics() {
    return this.httpClient.get(this.baseUrl + '/topics');
  }

  subscribe(){}

  publish(){}
}
