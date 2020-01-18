import { ISenderRecevier } from './senderRecevier';
import { IAddress } from './address';
import { IStamp } from './stamp';

export interface IDestinationMail {
    recevier: ISenderRecevier;
    address: IAddress;
    stamp: IStamp;
}
