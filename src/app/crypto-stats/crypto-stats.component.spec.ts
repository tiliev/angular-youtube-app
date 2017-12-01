import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoStatsComponent } from './crypto-stats.component';

describe('CryptoStatsComponent', () => {
  let component: CryptoStatsComponent;
  let fixture: ComponentFixture<CryptoStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
