import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencemahdiaComponent } from './presencemahdia.component';

describe('PresencemahdiaComponent', () => {
  let component: PresencemahdiaComponent;
  let fixture: ComponentFixture<PresencemahdiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencemahdiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencemahdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
