import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreqReceiptComponent } from './userreq-receipt.component';

describe('UserreqReceiptComponent', () => {
  let component: UserreqReceiptComponent;
  let fixture: ComponentFixture<UserreqReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserreqReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserreqReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
