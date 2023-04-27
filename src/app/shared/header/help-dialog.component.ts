import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
})
export class HelpDialogComponent {
  constructor(private dialogRef: MatDialogRef<HelpDialogComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
