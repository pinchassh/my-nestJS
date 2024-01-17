import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Zmanim } from '../schemas/zmanim.schama';

@Injectable()
export class ZmanimService {
    constructor(@InjectModel('Zmanims') private zmanimModel: Model<Zmanim>) { }

    async findZmanim() {
        try {
            const zmanim = await this.zmanimModel.find();
            return zmanim;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
