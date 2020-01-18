import express, { Application } from 'express';
import { json, urlencoded } from 'body-parser';
import { has, get } from 'config';
import * as cors from 'cors';
import { MailHandler } from './serverConfig/routes.config';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { validateMail } from './serverConfig/validation.middleware';

export class PostOfficeServer {
    private app: Application = express();
    constructor() {
        of([]).pipe(
            map(() => {
                console.log('Configuring Server');
                this.configServer();
            }),
            map(() => {
                console.log('Configuring Routes');
                this.configRoutes();
            }),
            map(() => {
                console.log('Enabling Server');
                this.enableServer();
            })
        ).subscribe();
    }
    private configServer() {
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
        this.app.use(cors.default({
            allowedHeaders: '*',
            origin: '*',
            exposedHeaders: ['GET', 'PUT', 'POST', 'DELETE'],
            preflightContinue: false
        }))
    }
    private configRoutes() {
        this.app.use('/mailer', [validateMail], MailHandler());
    }
    private enableServer() {
        let port = has('port') ? get<number>('port') : 3100;
        this.app.listen(port, 'localhost', () => {
            console.log(`Application listening at port:${port}.`);
        });
    }
}
new PostOfficeServer();
