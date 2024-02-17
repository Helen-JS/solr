import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDesignerComponent } from './schema-designer.component';

describe('SchemaDesignerComponent', () => {
  let component: SchemaDesignerComponent;
  let fixture: ComponentFixture<SchemaDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemaDesignerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchemaDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
