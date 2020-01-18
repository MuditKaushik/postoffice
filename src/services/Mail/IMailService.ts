import { IMail } from '../../models';
import { Observable } from 'rxjs';

export interface IMailService {
    sendMail(mail: IMail): Observable<boolean>;
}