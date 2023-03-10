import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideComponent } from './app-side.component';

describe('AppSideComponent', () => {
  let component: AppSideComponent;
  let fixture: ComponentFixture<AppSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
