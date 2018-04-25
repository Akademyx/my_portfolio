import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsComponentComponent } from './js-component.component';

describe('JsComponentComponent', () => {
  let component: JsComponentComponent;
  let fixture: ComponentFixture<JsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
