import { Directive } from '@angular/core';
import { LazyImgDirective } from './lazy-img.directive';

@Directive({
  selector: 'img[rigid]',
  standalone: true,
  host: {
    draggable: 'false',
    class: 'select-none',
  },
  hostDirectives: [LazyImgDirective],
})
export class RigidImgDirective {}
