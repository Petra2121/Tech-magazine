import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaslovnaComponent } from './naslovna.component';

describe('NaslovnaComponent', () => {
  let component: NaslovnaComponent;
  let fixture: ComponentFixture<NaslovnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaslovnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaslovnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
