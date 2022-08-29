import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefirstComponent } from './homefirst.component';

describe('HomefirstComponent', () => {
  let component: HomefirstComponent;
  let fixture: ComponentFixture<HomefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
