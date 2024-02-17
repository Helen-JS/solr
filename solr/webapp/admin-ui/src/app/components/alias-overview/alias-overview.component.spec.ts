import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasOverviewComponent } from './alias-overview.component';

describe('AliasOverviewComponent', () => {
  let component: AliasOverviewComponent;
  let fixture: ComponentFixture<AliasOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliasOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AliasOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
