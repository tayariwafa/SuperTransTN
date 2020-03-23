import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisclientComponent } from './avisclient.component';

describe('AvisclientComponent', () => {
  let component: AvisclientComponent;
  let fixture: ComponentFixture<AvisclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
