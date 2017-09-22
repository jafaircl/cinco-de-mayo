import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const ToolbarFlipAnimation = trigger('ToolbarFlipAnimation', [
    state('void', style({
        position: 'absolute',
        width: '100%',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(180deg)',
        '-webkit-backface-visibility': 'hidden',
        backfaceVisibility: 'hidden'
    }) ),
    state('*', style({
        position: 'absolute',
        width: '100%',
        transformStyle: 'preserve-3d',
        transform: 'rotateX(0)',
        '-webkit-backface-visibility': 'hidden',
        backfaceVisibility: 'hidden'
    }) ),
    transition(':enter', [
        animate('375ms cubic-bezier(0.0, 0.0, 0.2, 1)')
    ]),
    transition(':leave', [
        animate('375ms cubic-bezier(0.0, 0.0, 0.2, 1)')
    ])
]);
