import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoVideosComponent } from './crypto-videos.component';

describe('CryptoVideosComponent', () => {
  let component: CryptoVideosComponent;
  let fixture: ComponentFixture<CryptoVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
