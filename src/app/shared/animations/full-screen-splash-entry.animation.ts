import { trigger, state, animate, transition, style } from '@angular/animations';

export const FullScreenSplashEntryAnimation = trigger('FullScreenSplashEntryAnimation', [
    state('void', style({
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '100%'
    }) ),
    state('*', style({
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '100%'
    }) ),
    transition(':enter', [
        style({ transform: 'translate3d(0,100%,0)' }),
        animate('0.375s cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translate3d(0,0,0)'}))
    ])
]);

