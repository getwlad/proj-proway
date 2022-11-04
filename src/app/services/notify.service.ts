import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(private snackBar: MatSnackBar) {}
  notify(msg: string, error: boolean = false) {
    this.snackBar.open(msg, 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: error ? 'error' : 'sucess',
    });
  }
}
