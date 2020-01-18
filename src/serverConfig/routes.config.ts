import { Router } from 'express';
import { MailController } from '../controller/mail.controller';

export function MailHandler() {
    let mailRoutes: Router = Router();
    new MailController(mailRoutes);
    return mailRoutes;
}