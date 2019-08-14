import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInventoryComponent } from './crud-inventory.component';

describe('CrudInventoryComponent', () => {
  let component: CrudInventoryComponent;
  let fixture: ComponentFixture<CrudInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
