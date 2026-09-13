import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { RoadassistanceComponent } from './roadassistance-component';

describe('RoadassistanceComponent', () => {
  let component: RoadassistanceComponent;
  let fixture: ComponentFixture<RoadassistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadassistanceComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadassistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
