import { IMailService } from './IMailService';
import { IMail } from '../../models';
import { Observable, throwError } from 'rxjs';

export class MailService implements IMailService {
    sendMail(mail: IMail): Observable<boolean> {
        return throwError(new Error("Method not implemented."));
    }
}