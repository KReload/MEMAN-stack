import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MqttSubscriberService } from '../services/mqtt-subscriber.service';
import { HttpClientModule  } from '@angular/common/http'
import {
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';
import { environment } from "../environments/environment";

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: environment.mqttBrokerHost,
  port: 80,
  path: '/mqtt'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [MqttSubscriberService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
