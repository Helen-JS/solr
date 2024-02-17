import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaPropertiesComponent } from './java-properties.component';

describe('JavaPropertiesComponent', () => {
  let component: JavaPropertiesComponent;
  let fixture: ComponentFixture<JavaPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaPropertiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavaPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
