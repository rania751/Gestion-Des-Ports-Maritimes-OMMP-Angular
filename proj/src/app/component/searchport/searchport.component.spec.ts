import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchportComponent } from './searchport.component';

describe('SearchportComponent', () => {
  let component: SearchportComponent;
  let fixture: ComponentFixture<SearchportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
