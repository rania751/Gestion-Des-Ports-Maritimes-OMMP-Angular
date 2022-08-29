import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadhomeComponent } from './headhome.component';

describe('HeadhomeComponent', () => {
  let component: HeadhomeComponent;
  let fixture: ComponentFixture<HeadhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
