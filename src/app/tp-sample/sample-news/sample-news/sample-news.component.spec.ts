import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNewsComponent } from './sample-news.component';

describe('SampleNewsComponent', () => {
  let component: SampleNewsComponent;
  let fixture: ComponentFixture<SampleNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
