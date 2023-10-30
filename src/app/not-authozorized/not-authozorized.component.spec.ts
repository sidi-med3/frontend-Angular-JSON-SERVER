import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthozorizedComponent } from './not-authozorized.component';

describe('NotAuthozorizedComponent', () => {
  let component: NotAuthozorizedComponent;
  let fixture: ComponentFixture<NotAuthozorizedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotAuthozorizedComponent]
    });
    fixture = TestBed.createComponent(NotAuthozorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
