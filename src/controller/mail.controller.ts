import { Request, Response, NextFunction, Router } from 'express';
import { IMailService, MailService } from '../services/Mail';
import { IMail } from '../models';
export class MailController {
    constructor(route: Router) {
        route.get('/mail', this.mailHandler.bind(this));
    }
    mailHandler(req: Request, res: Response, next: NextFunction): void {
        let mailservice: IMailService = new MailService();
        let mail: IMail = req.body;
        mailservice.sendMail(mail)
            .subscribe((response) => {
                res.status(200).send(response);
                return next();
            }, (err: Error) => {
                res.status(500).send(err);
            });
    }
}
