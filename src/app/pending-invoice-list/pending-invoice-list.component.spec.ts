import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInvoiceListComponent } from './pending-invoice-list.component';

describe('PendingInvoiceListComponent', () => {
  let component: PendingInvoiceListComponent;
  let fixture: ComponentFixture<PendingInvoiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingInvoiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
