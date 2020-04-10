import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Empleave } from './empleave';

export class EmpleaveData implements InMemoryDbService {

  createDb() {
    const empleaves: Empleave[] = [
      {
        id: 1,
       leavetype:'casual leave',
        fromdt:new Date('20/08/2001'),
        todt:new Date('23/08/2001'),
        noOfDays:4,
        status:'approved',
      },
      {
        id: 2,
       leavetype:'sick leave',
        fromdt:new Date('05/08/2004'),
        todt:new Date('07/08/2004'),
        noOfDays:3,
        status:'pending'
      },


      {
        id: 3,
       leavetype:'occasional leave',
        fromdt:new Date('24/08/2001'),
        todt:new Date('28/08/2001'),
        noOfDays:5,
        status:'rejected',
      }
    ];
    return { empleaves };
  }
}
