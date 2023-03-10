import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryPostComponent } from './diary-post.component';

describe('DiaryPostComponent', () => {
  let component: DiaryPostComponent;
  let fixture: ComponentFixture<DiaryPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
