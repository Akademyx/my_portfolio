import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RubyComponentComponent } from './ruby-component.component';

describe('RubyComponentComponent', () => {
  let component: RubyComponentComponent;
  let fixture: ComponentFixture<RubyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RubyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RubyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
