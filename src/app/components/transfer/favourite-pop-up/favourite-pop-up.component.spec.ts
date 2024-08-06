import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePopUpComponent } from './favourite-pop-up.component';

describe('FavouritePopUpComponent', () => {
  let component: FavouritePopUpComponent;
  let fixture: ComponentFixture<FavouritePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouritePopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
