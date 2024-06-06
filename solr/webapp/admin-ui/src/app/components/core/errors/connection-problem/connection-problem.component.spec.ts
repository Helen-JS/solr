import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionProblemComponent } from './connection-problem.component';

describe('ConnectionProblemComponent', () => {
  let component: ConnectionProblemComponent;
  let fixture: ComponentFixture<ConnectionProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionProblemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectionProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
