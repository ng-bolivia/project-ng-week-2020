import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesListVscrollComponent } from './communities-list-vscroll.component';

describe('CommunitiesListVscrollComponent', () => {
  let component: CommunitiesListVscrollComponent;
  let fixture: ComponentFixture<CommunitiesListVscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesListVscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesListVscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
