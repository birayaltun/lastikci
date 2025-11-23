import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandwichescomponent } from './sandwiches-component';

describe('SweetComponent', () => {
  let component: Sandwichescomponent;
  let fixture: ComponentFixture<Sandwichescomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sandwichescomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sandwichescomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
