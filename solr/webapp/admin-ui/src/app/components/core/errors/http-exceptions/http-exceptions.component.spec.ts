import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpExceptionsComponent } from './http-exceptions.component';

describe('HttpExceptionsComponent', () => {
  let component: HttpExceptionsComponent;
  let fixture: ComponentFixture<HttpExceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpExceptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
