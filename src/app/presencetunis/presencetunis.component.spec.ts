import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencetunisComponent } from './presencetunis.component';

describe('PresencetunisComponent', () => {
  let component: PresencetunisComponent;
  let fixture: ComponentFixture<PresencetunisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencetunisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencetunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
