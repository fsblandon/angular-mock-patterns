import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionalesComponent } from './creacionales.component';

describe('CreacionalesComponent', () => {
  let component: CreacionalesComponent;
  let fixture: ComponentFixture<CreacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
