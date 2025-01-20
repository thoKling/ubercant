import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatererProductListComponent } from './caterer-product-list.component';

describe('CatererProductListComponent', () => {
  let component: CatererProductListComponent;
  let fixture: ComponentFixture<CatererProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatererProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatererProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
