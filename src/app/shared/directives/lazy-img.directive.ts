import { Directive } from '@angular/core';

@Directive({
  selector: 'img[lazy]',
  standalone: true,
  host: {
    loading: 'lazy',
  },
})
export class LazyImgDirective {}
