import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIconsComponent } from './m-icons.component';

describe('MIconsComponent', () => {
  let component: MIconsComponent;
  let fixture: ComponentFixture<MIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
