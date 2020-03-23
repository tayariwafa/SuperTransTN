import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurmahdiaComponent } from './chauffeurmahdia.component';

describe('ChauffeurmahdiaComponent', () => {
  let component: ChauffeurmahdiaComponent;
  let fixture: ComponentFixture<ChauffeurmahdiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurmahdiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurmahdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
