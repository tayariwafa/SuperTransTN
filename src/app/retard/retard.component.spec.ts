import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardComponent } from './retard.component';

describe('RetardComponent', () => {
  let component: RetardComponent;
  let fixture: ComponentFixture<RetardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
