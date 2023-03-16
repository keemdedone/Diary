import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInProcessComponent } from './work-in-process.component';

describe('WorkInProcessComponent', () => {
  let component: WorkInProcessComponent;
  let fixture: ComponentFixture<WorkInProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkInProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkInProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
