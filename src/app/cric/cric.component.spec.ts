import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricComponent } from './cric.component';

describe('CricComponent', () => {
  let component: CricComponent;
  let fixture: ComponentFixture<CricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
