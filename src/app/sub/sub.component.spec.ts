import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponent } from './sub.component';

describe('SubComponent', () => {
  let component: SubComponent;
  let fixture: ComponentFixture<SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
