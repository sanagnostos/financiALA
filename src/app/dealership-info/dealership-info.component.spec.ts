import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershipInfoComponent } from './dealership-info.component';

describe('DealershipInfoComponent', () => {
  let component: DealershipInfoComponent;
  let fixture: ComponentFixture<DealershipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealershipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
