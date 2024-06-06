import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleStackTraceButtonComponent } from './toggle-stack-trace-button.component';

describe('ToggleStackTraceButtonComponent', () => {
  let component: ToggleStackTraceButtonComponent;
  let fixture: ComponentFixture<ToggleStackTraceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleStackTraceButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleStackTraceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
