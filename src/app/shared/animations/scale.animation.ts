import { animate, animation, style, useAnimation } from '@angular/animations';

const SCALE_ANIMATION = animation([
  style({ transform: 'scale({{ from }})' }),
  animate('{{ duration }} {{ delay }} {{ transitionFn }}',
    style({ transform: 'scale({{ to }})' }),
  ),
], {
  params: { duration: '300ms', delay: '0ms', transitionFn: 'ease' },
});

export const SCALE_IN_ANIMATION = useAnimation(SCALE_ANIMATION, {
  params: { from: 0.8, to: 1 },
});

export const SCALE_OUT_ANIMATION = useAnimation(SCALE_ANIMATION, {
  params: { from: 1, to: 0.8 },
});
