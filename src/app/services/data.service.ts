import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { Community } from '../models/community.model';
import { COMMUNITIES } from './communities';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getListA(limit: number = 50) {
    return this.generateCommunities(limit);
  }

  getListB(limit: number = 50) {
    return this.generateCommunities(limit);
  }

  generateName() {
    const index = this.getRandomInt(0, COMMUNITIES.length - 1);
    return COMMUNITIES[index];
  }

  generateDate() {
    const days = this.getRandomInt(0, 1000);
    return moment().subtract(days, 'days').toISOString();
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateCommunity(newName?: string): Community {
    return {
      name: newName ? newName : this.generateName(),
      members: this.getRandomInt(100, 500),
      created_at: this.generateDate(),
    };
  }

  generateCommunities(limit: number = 50): Community[] {
    const result = [];
    for (let index = 0; index < limit; index++) {
      result.push(this.generateCommunity());
    }
    return result;
  }
}
