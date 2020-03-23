import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeursousseComponent } from './chauffeursousse.component';

describe('ChauffeursousseComponent', () => {
  let component: ChauffeursousseComponent;
  let fixture: ComponentFixture<ChauffeursousseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeursousseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeursousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
