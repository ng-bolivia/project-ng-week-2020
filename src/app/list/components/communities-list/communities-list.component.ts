import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { Community } from '../../../models/community.model';

@Component({
  selector: 'app-communities-list',
  templateUrl: './communities-list.component.html',
  styleUrls: ['./communities-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunitiesListComponent implements OnInit {

  @Input() title: string;
  @Input() data: Community[] = [];
  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<Community>();

  nameInput = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  handleEnter() {
    this.add.emit(this.nameInput.value);
    this.nameInput.setValue('');
  }

  onRemove(item: Community) {
    this.remove.emit(item);
  }
}
