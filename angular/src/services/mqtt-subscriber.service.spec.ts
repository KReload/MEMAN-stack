import { TestBed, inject } from '@angular/core/testing';

import { MqttSubscriberService } from './mqtt-subscriber.service';

describe('MqttSubscriberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MqttSubscriberService]
    });
  });

  it('should be created', inject([MqttSubscriberService], (service: MqttSubscriberService) => {
    expect(service).toBeTruthy();
  }));
});
