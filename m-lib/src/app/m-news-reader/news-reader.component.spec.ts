import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsReaderComponent } from './news-reader.component';

describe('NewsReaderComponent', () => {
  let component: NewsReaderComponent;
  let fixture: ComponentFixture<NewsReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
