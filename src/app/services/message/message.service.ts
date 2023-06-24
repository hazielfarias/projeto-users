import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private defaultPosition = {
    vertical: 'top' as MatSnackBarVerticalPosition,
    horizontal: 'end' as MatSnackBarHorizontalPosition
  }
  constructor(private snackBar: MatSnackBar) { }

  show(message: string) {
    this.snackBar.open(message, 'fechar', {
      verticalPosition: this.defaultPosition.vertical,
      horizontalPosition: this.defaultPosition.horizontal,
      duration: 3000
    })
  }
}
