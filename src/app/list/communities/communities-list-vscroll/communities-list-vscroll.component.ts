import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Community } from 'src/app/models/community.model';

@Component({
  selector: 'app-communities-list-vscroll',
  templateUrl: './communities-list-vscroll.component.html',
  styleUrls: ['./communities-list-vscroll.component.css']
})
export class CommunitiesListVscrollComponent implements OnInit {
  @Input() title: string;
  data: Community[] = [];
  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<Community>();

  nameInput = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.data = this.generateCommunities();
  }

  generateCommunities() {
    return Array.from({
      length: 100000
    }).map((value, i) => ({
      name: `Community ${i}`,
      members: i*10,
      created_at: new Date()
    })) as Community[];
  }

  handleEnter() {
    this.add.emit(this.nameInput.value);
    this.nameInput.setValue('');
  }

  onRemove(item: Community) {
    this.remove.emit(item);
  }
}
