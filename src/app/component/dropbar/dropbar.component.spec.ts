import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropbarComponent } from './dropbar.component';

describe('DropbarComponent', () => {
  let component: DropbarComponent;
  let fixture: ComponentFixture<DropbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
