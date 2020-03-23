import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurTunisComponent } from './chauffeur-tunis.component';

describe('ChauffeurTunisComponent', () => {
  let component: ChauffeurTunisComponent;
  let fixture: ComponentFixture<ChauffeurTunisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurTunisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
