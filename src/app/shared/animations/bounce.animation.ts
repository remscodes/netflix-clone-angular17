import { animate, animation, style } from '@angular/animations';

export const BOUNCE_ANIMATION = animation([
  animate('{{ duration }} {{ delay }} {{ transitionFn }}',
    style({ transform: 'translate({{ maxX }}, {{ maxY }})' }),
  ),
  animate('{{ duration }} {{ transitionFn }}',
    style({ transform: 'translate(0, 0)' }),
  ),
], {
  params: { maxX: 0, maxY: '-20px', duration: '100ms', delay: '0ms', transitionFn: 'ease' },
});
