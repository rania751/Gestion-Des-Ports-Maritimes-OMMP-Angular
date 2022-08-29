import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortlComponent } from './portl.component';

describe('PortlComponent', () => {
  let component: PortlComponent;
  let fixture: ComponentFixture<PortlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
