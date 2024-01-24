import { animate, animation, style } from '@angular/animations';

export const FADE_IN_ANIMATION = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ duration }} {{ delay }} {{ transitionFn }}',
    style({ opacity: '{{ to }}' }),
  ),
], {
  params: {
    from: 0,
    to: 1,
    duration: '300ms',
    delay: '0ms',
    transitionFn: 'ease',
  },
});
