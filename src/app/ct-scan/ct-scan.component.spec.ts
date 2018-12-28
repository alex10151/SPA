import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtScanComponent } from './ct-scan.component';

describe('CtScanComponent', () => {
  let component: CtScanComponent;
  let fixture: ComponentFixture<CtScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
