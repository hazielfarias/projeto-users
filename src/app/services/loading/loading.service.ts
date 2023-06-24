import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading = false;
  dialogRef: MatDialogRef<LoadingComponent> | undefined;
  constructor(private dialog: MatDialog) { }

  startLoading() {
    this.dialogRef = this.dialog.open(LoadingComponent, { disableClose: true })
  }

  stopLoading() {
    this.dialogRef?.close()
  }

  isLoading() {
    return this.loading;
  }
}
