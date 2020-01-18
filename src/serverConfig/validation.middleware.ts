import { Request, Response, NextFunction } from "express";
import { IsMailLocal, isReceiverLocal } from '../validators/validation-schema';
import { IMail } from "../models";

export function validateMail(req: Request, res: Response, next: NextFunction): void {
    let mailObject = <IMail>req.body;
    if (Object.keys(mailObject).length > 0 && mailObject && mailObject.recevier && mailObject.sender) {
        if (IsMailLocal(mailObject) && isReceiverLocal(mailObject.sender, mailObject.sender)) {
            next();
        } else {
            res.status(400).send('Mail can only be send in local.');
        }
    } else {
        res.status(400).send('Invalid Object');
    }
}
