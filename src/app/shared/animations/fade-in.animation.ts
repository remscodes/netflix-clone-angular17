import { animate, animation, style, useAnimation } from '@angular/animations';

const FADE_ANIMATION = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ duration }} {{ delay }} {{ transitionFn }}',
    style({ opacity: '{{ to }}' }),
  ),
], {
  params: { duration: '300ms', delay: '0ms', transitionFn: 'ease' },
});

export const FADE_IN_ANIMATION = useAnimation(FADE_ANIMATION, {
  params: { from: 0, to: 1 },
});

export const FADE_OUT_ANIMATION = useAnimation(FADE_ANIMATION, {
  params: { from: 1, to: 0 },
});
