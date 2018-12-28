import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtReconComponent } from './ct-recon.component';

describe('CtReconComponent', () => {
  let component: CtReconComponent;
  let fixture: ComponentFixture<CtReconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtReconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
