import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtWebComponent } from './ct-web.component';

describe('CtWebComponent', () => {
  let component: CtWebComponent;
  let fixture: ComponentFixture<CtWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
