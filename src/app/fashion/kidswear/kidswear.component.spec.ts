import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidswearComponent } from './kidswear.component';

describe('KidswearComponent', () => {
  let component: KidswearComponent;
  let fixture: ComponentFixture<KidswearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidswearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
