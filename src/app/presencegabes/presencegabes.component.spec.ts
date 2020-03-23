import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresencegabesComponent } from './presencegabes.component';

describe('PresencegabesComponent', () => {
  let component: PresencegabesComponent;
  let fixture: ComponentFixture<PresencegabesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresencegabesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresencegabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
