# MEMAN-stack

  MEMAN Stack is an IoT technology stack. It has a Mosquitto broker for MQTT communication, a Mongodb for storing data, an Express API and an Angular 6 application. With it, you can subscribe to the MQTT broker and display the data on your Angular application. It is still in work in progress. Services need to be improved and I will soon provide ssl support.

## Prerequisites

- Git [Download link](https://git-scm.com/downloads) 
- NodeJS [Download link](https://nodejs.org/en/download/)

## Clone the repository

In a terminal
`git clone https://github.com/KReload/MEMAN-stack.git`

## Production deploy

- Install [docker](https://docs.docker.com/install/)

- If you have a Linux system install [compose](https://docs.docker.com/compose/install/)

- If you are using docker tools with windows, fill /nginx/angular/src/environments/environment.prod.ts with the API hostname and the MQTT Broker hostname. The IP adress can be found when launching the docker quickstart terminal. (Usually 192.168.99.100)

`export const environment = {
  production: true,
  apiUrl: '192.168.99.100',
  mqttbroker: '192.168.99.100'
};`

For online deployment, don't use windows 10 (or use Pro version) because it will run on a virtual machine.

- Run the application in the project folder

`docker-compose up --build`
