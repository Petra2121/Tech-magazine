import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopisClanakaComponent } from './popis-clanaka.component';

describe('PopisClanakaComponent', () => {
  let component: PopisClanakaComponent;
  let fixture: ComponentFixture<PopisClanakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopisClanakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopisClanakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
