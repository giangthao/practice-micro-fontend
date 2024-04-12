import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      pathMatch: 'full',
      redirectTo: 'calendar',
   },
   {
      path: 'calendar',
      loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule),
   },
];
