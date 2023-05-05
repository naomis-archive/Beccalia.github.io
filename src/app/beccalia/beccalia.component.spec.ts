import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeccaliaComponent } from './beccalia.component';

describe('BeccaliaComponent', () => {
  let component: BeccaliaComponent;
  let fixture: ComponentFixture<BeccaliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeccaliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeccaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
