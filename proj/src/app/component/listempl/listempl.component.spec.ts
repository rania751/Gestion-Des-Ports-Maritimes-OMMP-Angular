import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemplComponent } from './listempl.component';

describe('ListemplComponent', () => {
  let component: ListemplComponent;
  let fixture: ComponentFixture<ListemplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListemplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
