import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerstartComponent } from './bannerstart.component';

describe('BannerstartComponent', () => {
  let component: BannerstartComponent;
  let fixture: ComponentFixture<BannerstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
