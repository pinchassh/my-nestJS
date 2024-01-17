import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ZmanimSchema } from "./schemas/zmanim.schama";
import { ZmanimResolver } from "./resolvers/zmanim.resolver";
import { ZmanimService } from "./services/zmanim.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Zmanims', schema: ZmanimSchema }])],
    providers: [ZmanimResolver, ZmanimService]
})
export class ZmanimModule { }
