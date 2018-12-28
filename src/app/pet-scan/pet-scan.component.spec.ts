import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetScanComponent } from './pet-scan.component';

describe('PetScanComponent', () => {
  let component: PetScanComponent;
  let fixture: ComponentFixture<PetScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
