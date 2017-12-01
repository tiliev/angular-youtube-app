import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPopularityComponent } from './crypto-popularity.component';

describe('CryptoPopularityComponent', () => {
  let component: CryptoPopularityComponent;
  let fixture: ComponentFixture<CryptoPopularityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoPopularityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoPopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
