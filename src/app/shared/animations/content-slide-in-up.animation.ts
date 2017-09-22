import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const ContentSlideInUpAnimation = trigger('ContentSlideInUpAnimation', [
    state('void', style({
        position: 'absolute',
        left: 0, // top: '100%',
        width: '100%',
        // 'overflow-y': 'scroll'
    }) ),
    state('*', style({
        position: 'absolute',
        left: 0, top: '64px',
        width: '100%',
        // 'overflow-y': 'scroll'
    }) ),
    transition(':enter', [
        style({ transform: 'translate3d(0,100%,0)' }),
        animate('0.375s cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translate3d(0,64px,0)'}))
    ]),
    transition(':leave', [
        style({transform: 'translate3d(0,0,0)'}),
        animate('0.375s cubic-bezier(0.4, 0.0, 1, 1)', style({transform: 'translate3d(0,100%,0)'}))
    ])
]);
