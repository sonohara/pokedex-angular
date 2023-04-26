import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orNoImage',
})
export class OrNoImagePipe implements PipeTransform {
  transform(image: string | null | undefined): string {
    return image ?? 'assets/no-image.png';
  }
}
