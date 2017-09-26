import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const ContentSlideInRightAnimation = trigger('ContentSlideInRightAnimation', [
    state('void', style({
        position: 'absolute',
        left: 0,
        width: '100%',
        // 'overflow-y': 'scroll'
    }) ),
    state('*', style({
        position: 'absolute',
        left: 0,
        width: '100%',
        // 'overflow-y': 'scroll'
    }) ),
    transition(':enter', [
        style({ transform: 'translate3d(100%,0,0)' }),
        animate('0.375s cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translate3d(0,0,0)'}))
    ]),
    transition(':leave', [
        style({transform: 'translate3d(0,0,0)'}),
        animate('0.375s cubic-bezier(0.4, 0.0, 1, 1)', style({transform: 'translate3d(100%,0,0)'}))
    ])
]);
