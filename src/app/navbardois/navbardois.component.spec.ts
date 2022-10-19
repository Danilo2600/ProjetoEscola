import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardoisComponent } from './navbardois.component';

describe('NavbardoisComponent', () => {
  let component: NavbardoisComponent;
  let fixture: ComponentFixture<NavbardoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbardoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
