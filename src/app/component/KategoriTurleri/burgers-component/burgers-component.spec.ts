import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burgerscomponent } from './burgers-component';

describe('FastfoodComponent', () => {
  let component: Burgerscomponent;
  let fixture: ComponentFixture<Burgerscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Burgerscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Burgerscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
