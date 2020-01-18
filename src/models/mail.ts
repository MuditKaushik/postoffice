import { ISenderRecevier } from './senderRecevier';
import { IDestinationMail } from './destination';

export interface IMail {
    sender: ISenderRecevier;
    recevier: IDestinationMail;
}
