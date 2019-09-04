import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDealComponent } from './find-deal.component';

describe('FindDealComponent', () => {
  let component: FindDealComponent;
  let fixture: ComponentFixture<FindDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
