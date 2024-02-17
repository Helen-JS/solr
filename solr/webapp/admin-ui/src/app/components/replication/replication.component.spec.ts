import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicationComponent } from './replication.component';

describe('ReplicationComponent', () => {
  let component: ReplicationComponent;
  let fixture: ComponentFixture<ReplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
