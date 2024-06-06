import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitializationFailuresComponent } from './initialization-failures.component';

describe('InitializationFailuresComponent', () => {
  let component: InitializationFailuresComponent;
  let fixture: ComponentFixture<InitializationFailuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitializationFailuresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitializationFailuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
