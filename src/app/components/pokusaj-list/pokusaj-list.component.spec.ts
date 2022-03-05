import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokusajListComponent } from './pokusaj-list.component';

describe('PokusajListComponent', () => {
  let component: PokusajListComponent;
  let fixture: ComponentFixture<PokusajListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokusajListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokusajListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
