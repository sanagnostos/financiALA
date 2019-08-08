import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedFinanceComponent } from './logged-finance.component';

describe('LoggedFinanceComponent', () => {
  let component: LoggedFinanceComponent;
  let fixture: ComponentFixture<LoggedFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
