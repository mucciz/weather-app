import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCoverComponent } from './cloud-cover.component';

describe('CloudCoverComponent', () => {
  let component: CloudCoverComponent;
  let fixture: ComponentFixture<CloudCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
