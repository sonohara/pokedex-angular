import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading = false;

  start() {
    this.loading = true;
  }

  finish() {
    this.loading = false;
  }
}
