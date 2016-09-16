import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice IMDS'},
      {id: 12, name: 'Narco IMDS'},
      {id: 13, name: 'Bombasto IMDS'},
      {id: 14, name: 'Celeritas IMDS'},
      {id: 15, name: 'Magneta IMDS'},
      {id: 16, name: 'RubberMan IMDS'},
      {id: 17, name: 'Dynama IMDS'},
      {id: 18, name: 'Dr IQ IMDS'},
      {id: 19, name: 'Magma IMDS'},
      {id: 20, name: 'Tornado IMDS'}
    ];
    return {heroes};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/