import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortinfoComponent } from './portinfo.component';

describe('PortinfoComponent', () => {
  let component: PortinfoComponent;
  let fixture: ComponentFixture<PortinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
