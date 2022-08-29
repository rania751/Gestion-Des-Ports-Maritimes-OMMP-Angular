import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaduserComponent } from './headuser.component';

describe('HeaduserComponent', () => {
  let component: HeaduserComponent;
  let fixture: ComponentFixture<HeaduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
