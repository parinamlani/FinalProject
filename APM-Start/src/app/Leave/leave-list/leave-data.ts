
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Leave } from './leave';

export class LeaveData implements InMemoryDbService {

  createDb() {
    const leaves: Leave[] = [
      {
        id:1,
       leavename:'Casual Leave',
       numberOfDays:20
      },
      {
        id:2,
       leavename:'sick Leave',
       numberOfDays:20
      },


      {
        id:3,
        leavename:' Leave',
        numberOfDays:20
      }
    ];
    return { leaves };
  }
}
