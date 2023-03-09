import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryMainComponent } from './diary-main.component';

describe('DiaryMainComponent', () => {
  let component: DiaryMainComponent;
  let fixture: ComponentFixture<DiaryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
