# MEMAN-stack
A stack for IoT usage

## Production deploy

- Install [docker](https://docs.docker.com/install/)

- If you have a Linux system install [compose](https://docs.docker.com/compose/install/)

- In /nginx/angular/src/environments/environment.prod.ts specify the API hostname and the MQTT Broker hostname

`export const environment = {
  production: true,
  apiUrl: 'API HOSTNAME',
  mqttbroker: 'MQTT BROKER HOSTNAME'
};`

- Run the application

`docker-compose up --build`
