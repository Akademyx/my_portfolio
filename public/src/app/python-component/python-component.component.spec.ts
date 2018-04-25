import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonComponentComponent } from './python-component.component';

describe('PythonComponentComponent', () => {
  let component: PythonComponentComponent;
  let fixture: ComponentFixture<PythonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
