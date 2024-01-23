import { animate, animation, style } from '@angular/animations';

export const TOP_TO_BOT_ANIMATION = animation([
  style({ transform: 'translateY({{ from }})' }),
  animate('{{ time }} {{ delay }} {{ transitionFn }}',
    style({ transform: 'translateY({{ to }})' }),
  ),
], {
  params: {
    from: '-20px',
    to: '0',
    time: '300ms',
    delay: 0,
    transitionFn: 'ease',
  },
});
