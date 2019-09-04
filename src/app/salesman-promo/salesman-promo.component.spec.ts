import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanPromoComponent } from './salesman-promo.component';

describe('SalesmanPromoComponent', () => {
  let component: SalesmanPromoComponent;
  let fixture: ComponentFixture<SalesmanPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
