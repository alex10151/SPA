import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetWebComponent } from './pet-web.component';

describe('PetWebComponent', () => {
  let component: PetWebComponent;
  let fixture: ComponentFixture<PetWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
