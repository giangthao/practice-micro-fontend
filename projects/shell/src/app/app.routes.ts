import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: 'mailbox',
      loadChildren: () => import('mailbox/MailboxModule').then((m) => m.MailboxModule),
   },
   {
      path: 'calendar',
      loadChildren: () => import('calendar/CalendarModule').then((m) => m.CalendarModule),
   },
];
