import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingLevelComponent } from './logging-level.component';

describe('LoggingLevelComponent', () => {
  let component: LoggingLevelComponent;
  let fixture: ComponentFixture<LoggingLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggingLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggingLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
