import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const ToolbarSlideInDownAnimation = trigger('ToolbarSlideInDownAnimation', [
    state('void', style({
        position: 'fixed',
        // left: 0,
        width: '100%'
    }) ),
    state('*', style({
        position: 'fixed',
        // left: 0,
        width: '100%'
    }) ),
    transition(':enter', [
        style({ transform: 'translate3d(0,-72px,0)' }),
        animate('0.225s cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translate3d(0,0,0)'}))
    ]),
    transition(':leave', [
        style({transform: 'translate3d(0,0,0)'}),
        animate('0.195s cubic-bezier(0.4, 0.0, 1, 1)', style({transform: 'translate3d(0,-72px,0)'}))
    ])
]);
