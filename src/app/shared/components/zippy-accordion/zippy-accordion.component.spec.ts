import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyAccordionComponent } from './zippy-accordion.component';

describe('ZippyAccordionComponent', () => {
  let component: ZippyAccordionComponent;
  let fixture: ComponentFixture<ZippyAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZippyAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZippyAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
