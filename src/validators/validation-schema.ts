import { IMail, ISenderRecevier } from '../models';

export function IsMailLocal(mail: IMail): boolean {
    return (mail.recevier.stamp.kind === 'Local');
}

export function isReceiverLocal(receiver: ISenderRecevier, sender: ISenderRecevier): boolean {
    return (receiver.address.state === sender.address.state);
}
