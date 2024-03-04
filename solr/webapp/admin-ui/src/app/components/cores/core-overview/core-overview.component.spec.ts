import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreOverviewComponent } from './core-overview.component';

describe('CoreOverviewComponent', () => {
  let component: CoreOverviewComponent;
  let fixture: ComponentFixture<CoreOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
