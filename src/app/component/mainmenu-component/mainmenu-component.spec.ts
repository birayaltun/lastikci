import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MainmenuComponent } from './mainmenu-component';

describe('MainmenuComponent', () => {
  let component: MainmenuComponent;
  let fixture: ComponentFixture<MainmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainmenuComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
