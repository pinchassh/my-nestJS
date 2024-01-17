
import { Query, Resolver } from '@nestjs/graphql';
import { ZmanimService } from '../services/zmanim.service';
import { ZmanimType } from '../models/zmanim.model';
import { NotFoundException } from '@nestjs/common';

@Resolver()
export class ZmanimResolver {
    constructor(private readonly zmanimService: ZmanimService) { }



    @Query(() => [ZmanimType])
    async allZmanim() {
        try {
            const zmanim = await this.zmanimService.findZmanim();
            return zmanim;
        } catch (error) {
            return new NotFoundException('zmanim a not founds');
        }
    }


}
