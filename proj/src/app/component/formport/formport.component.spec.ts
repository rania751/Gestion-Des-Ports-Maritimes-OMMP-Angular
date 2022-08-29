import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormportComponent } from './formport.component';

describe('FormportComponent', () => {
  let component: FormportComponent;
  let fixture: ComponentFixture<FormportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
