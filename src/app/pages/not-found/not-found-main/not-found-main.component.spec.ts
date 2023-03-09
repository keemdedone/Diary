import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundMainComponent } from './not-found-main.component';

describe('NotFoundMainComponent', () => {
  let component: NotFoundMainComponent;
  let fixture: ComponentFixture<NotFoundMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
