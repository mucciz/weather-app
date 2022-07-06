import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeHumidityComponent } from './relative-humidity.component';

describe('RelativeHumidityComponent', () => {
  let component: RelativeHumidityComponent;
  let fixture: ComponentFixture<RelativeHumidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelativeHumidityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativeHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
