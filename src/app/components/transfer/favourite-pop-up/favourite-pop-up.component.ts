import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FavoriteService } from '../../../services/favourite/favourite.service';

@Component({
  selector: 'app-favourite-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favourite-pop-up.component.html',
  styleUrls: ['./favourite-pop-up.component.css'],
})
export class FavouritePopUpComponent implements OnInit {
  @Output() closePopupEvent = new EventEmitter<void>();
  favorites$: Observable<any> | undefined;
  accountNumber: string = ''; // Default to an empty string

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.accountNumber = localStorage.getItem('accNum') || '';
    if (this.accountNumber) {
      this.favorites$ = this.favoriteService.getFavorites(this.accountNumber);
      this.favorites$.subscribe(
        (response) => {
          console.log('Fetched favorites:', response);
        },
        (error) => {
          console.error('Error fetching favorites:', error);
        }
      );
    }
  }

  closePopup() {
    this.closePopupEvent.emit();
  }

  removeFavorite(favorite: any) {
    if (this.accountNumber) {
      this.favoriteService
        .deleteFavorite(this.accountNumber, favorite.recipientName)
        .subscribe({
          next: () => {
            this.favorites$ = this.favoriteService.getFavorites(
              this.accountNumber
            );
          },
          error: (err) => {
            console.error('Error removing favorite:', err);
          },
        });
    }
  }
}
