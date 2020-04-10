import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        id: 1,
        name:'parin',
        email:'amlaniparin666@gmail.com',
        password:'parinamlani1121',
        dob:'20/02/1998',
        doj:'20/02/1998'
      },
      {
        id: 2,
        name:'hrittik',
        email:'amlanihrittik666@gmail.com',
        password:'hrittikamlani1121',
        dob:'20/11/1998',
        doj:'05/02/1998'
      },


      {
        id: 3,
        name:'purvi',
        email:'purviamlani666@gmail.com',
        password:'purvi1121',
        dob:'20/02/1998',
        doj:'20/02/1877'
      }
    ];
    return { products };
  }
}
