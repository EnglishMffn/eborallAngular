// fade.animation.ts
import {
   transition,
   trigger,
   query,
   style,
   animate,
} from '@angular/animations';

export const fadeAnimation =
  trigger('fadeAnimation', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          opacity: 0,
          position: 'absolute',
          transform: 'translateY(15px)',
        })
      ]),
      query(':enter', [
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({transform: 'translateY(-15px)', opacity: 1})
        )
      ])
    ])
  ]);
