import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellersSection } from './top-sellers-section';

describe('TopSellersSection', () => {
  let component: TopSellersSection;
  let fixture: ComponentFixture<TopSellersSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSellersSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSellersSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
