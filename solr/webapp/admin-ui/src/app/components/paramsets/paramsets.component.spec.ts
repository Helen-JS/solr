import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsetsComponent } from './paramsets.component';

describe('ParamsetsComponent', () => {
  let component: ParamsetsComponent;
  let fixture: ComponentFixture<ParamsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamsetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParamsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
