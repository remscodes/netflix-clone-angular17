import { animateChild, animation, group, query, style, transition, trigger, useAnimation } from '@angular/animations';
import { BOUNCE_ANIMATION } from './shared/animations/bounce.animation';
import { FADE_IN_ANIMATION, FADE_OUT_ANIMATION } from './shared/animations/fade-in.animation';
import { SCALE_IN_ANIMATION } from './shared/animations/scale.animation';

const PREPARE_POSITION = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }),
  ]),
]);

const HIDE_ENTER_AND_PLAY_LEAVE = animation([
  query(':enter', [
    style({ opacity: 0 }),
  ]),
  query(':leave', [
    animateChild(),
  ]),
]);

const ROUTE_PRE_ANIMATION = animation([
  useAnimation(PREPARE_POSITION),
  useAnimation(HIDE_ENTER_AND_PLAY_LEAVE),
]);

export const ROUTES_ANIMATION = trigger('routesAnimation', [
  transition('Login => Profiles', [
    useAnimation(ROUTE_PRE_ANIMATION),
    group([
      query(':leave', [
        useAnimation(FADE_OUT_ANIMATION),
      ]),
      query(':enter', [
        useAnimation(FADE_IN_ANIMATION),
      ]),
      query(':leave @loginBackground', [
        animateChild(),
      ]),
    ]),
    query(':enter @selector', [
      animateChild(),
    ]),
  ]),

  transition('Profiles => Login', [
    useAnimation(ROUTE_PRE_ANIMATION),
    group([
      query(':leave @selector', [
        group([
          useAnimation(FADE_IN_ANIMATION),
          query('#profile-selector', [
            useAnimation(SCALE_IN_ANIMATION, { params: { from: 1, to: 1.2 } }),
          ]),
        ]),
      ]),
      query(':enter', [
        useAnimation(FADE_IN_ANIMATION),
      ]),
      query(':enter @loginBackground', [
        animateChild(),
      ]),
    ]),
  ]),

  transition('Profiles => Browse', [
    useAnimation(ROUTE_PRE_ANIMATION),
    query(':leave .selectedBox', [
      useAnimation(BOUNCE_ANIMATION),
    ], { optional: true }),
    group([
      query(':leave @selector', [
        animateChild(),
      ]),
      query(':enter', [
        useAnimation(FADE_IN_ANIMATION),
      ]),
    ]),
  ]),

  transition('Browse => Profiles', [
    useAnimation(ROUTE_PRE_ANIMATION),
    group([
      query(':leave', [
        useAnimation(FADE_OUT_ANIMATION),
      ]),
      query(':enter', [
        useAnimation(FADE_IN_ANIMATION),
      ]),
      query(':enter @selector', [
        group([
          useAnimation(FADE_IN_ANIMATION),
          query('#profile-selector', [
            useAnimation(SCALE_IN_ANIMATION),
          ]),
        ]),
      ]),
    ]),
  ]),
]);
