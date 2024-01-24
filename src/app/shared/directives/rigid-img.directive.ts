import { Directive } from '@angular/core';

@Directive({
  selector: 'img[rigid]',
  standalone: true,
  host: {
    draggable: 'false',
    class: 'select-none',
  },
})
export class RigidImgDirective {}
