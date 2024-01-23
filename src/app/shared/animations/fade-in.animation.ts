import { animate, animation, style } from '@angular/animations';

export const FADE_IN_ANIMATION = animation([
  style({ opacity: '{{ from }}' }),
  animate('{{ time }} {{ delay }} {{ transitionFn }}',
    style({ opacity: '{{ to }}' }),
  ),
], {
  params: {
    from: 0,
    to: 1,
    time: '500ms',
    delay: 0,
    transitionFn: 'ease',
  },
});
