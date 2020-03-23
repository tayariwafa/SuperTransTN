import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurgabesComponent } from './chauffeurgabes.component';

describe('ChauffeurgabesComponent', () => {
  let component: ChauffeurgabesComponent;
  let fixture: ComponentFixture<ChauffeurgabesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeurgabesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurgabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
