import { Component, OnInit } from '@angular/core';

import { Community } from '../models/community.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listA: Community[] = [];
  listB: Community[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.listA = this.dataService.getListA();
    this.listB = this.dataService.getListB();
  }

  add(list: Community[], newName: string) {
    const newCommunity = this.dataService.generateCommunity(newName);
    list.unshift(newCommunity);
  }

  remove(list: Community[], item: Community) {
    list.splice(list.indexOf(item), 1);
  }


}
