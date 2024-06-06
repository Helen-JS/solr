import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationFailuresComponent } from './authorization-failures.component';

describe('AuthorizationFailuresComponent', () => {
  let component: AuthorizationFailuresComponent;
  let fixture: ComponentFixture<AuthorizationFailuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorizationFailuresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorizationFailuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
