import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureSlidersComponent } from './picture-sliders.component';

describe('PictureSlidersComponent', () => {
  let component: PictureSlidersComponent;
  let fixture: ComponentFixture<PictureSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureSlidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
