import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewchauffeurComponent } from './newchauffeur.component';

describe('NewchauffeurComponent', () => {
  let component: NewchauffeurComponent;
  let fixture: ComponentFixture<NewchauffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewchauffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewchauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
