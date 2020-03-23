import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencesousseComponent } from './presencesousse.component';

describe('PresencesousseComponent', () => {
  let component: PresencesousseComponent;
  let fixture: ComponentFixture<PresencesousseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencesousseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencesousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
