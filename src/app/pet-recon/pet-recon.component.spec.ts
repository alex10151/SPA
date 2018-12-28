import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetReconComponent } from './pet-recon.component';

describe('PetReconComponent', () => {
  let component: PetReconComponent;
  let fixture: ComponentFixture<PetReconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetReconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
