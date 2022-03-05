import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminskoSuceljeComponent } from './adminsko-sucelje.component';

describe('AdminskoSuceljeComponent', () => {
  let component: AdminskoSuceljeComponent;
  let fixture: ComponentFixture<AdminskoSuceljeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminskoSuceljeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminskoSuceljeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
