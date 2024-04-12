import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      pathMatch: 'full',
      redirectTo: 'mailbox',
   },
   {
      path: 'mailbox',
      loadChildren: () => import('./mailbox/mailbox.module').then((m) => m.MailboxModule),
   },
];
