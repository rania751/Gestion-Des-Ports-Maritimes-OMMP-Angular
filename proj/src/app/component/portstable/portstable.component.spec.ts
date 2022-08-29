import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortstableComponent } from './portstable.component';

describe('PortstableComponent', () => {
  let component: PortstableComponent;
  let fixture: ComponentFixture<PortstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
