// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type ZmanimDocument = HydratedDocument<Zmanim>;

// @Schema()
// export class Address {
//     @Prop()
//     areaCountry: string;

//     @Prop()
//     city: string;

//     @Prop()
//     street: string;
// }

// @Schema()
// export class Zmanim {
//     @Prop()
//     name: string;

//     @Prop()
//     genre: string;

//     @Prop()
//     description: string;

//     @Prop()
//     contactNumber: string;

//     @Prop()
//     imageUrl: string;

//     @Prop()
//     imageAlt: string;

//     @Prop({ type: Date, default: Date.now })
//     dateGame: Date;

//     @Prop({ enum: ['PC', 'PS4'] })
//     platforms: string;

//     @Prop()
//     userId: string;

//     @Prop()
//     email: string;
// }

// export const ZmanimSchema = SchemaFactory.createForClass(Zmanim);






import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class ZmanimEntry {
    @Prop({ required: false })
    CivilDate: string;

    @Prop({ required: false })
    JewishDate: string;

    @Prop({ required: false })
    Day: string;

    @Prop({ required: false })
    ParshasHashavuaOrYomTov: string;

    @Prop({ required: false })
    Alos16: string;

    @Prop({ required: false })
    Alos72Minutes: string;

    @Prop({ required: false })
    misheyakir: string;

    @Prop({ required: false })
    sunrise: string;

    @Prop({ required: false })
    sofZmanShmaMGA: string;

    @Prop({ required: false })
    sofZmanShmaGRA: string;

    @Prop({ required: false })
    sofZmanTfilaMGA: string;

    @Prop({ required: false })
    sofZmanTfilaGRA: string;

    @Prop({ required: false })
    chatzos: string;

    @Prop({ required: false })
    minchaGedolaGRA: string;

    @Prop({ required: false })
    plag: string;

    @Prop({ required: false })
    candleLighting18Minutes: string;

    @Prop({ required: false })
    sunset: string;

    @Prop({ required: false })
    tzaisGeonim: string;

    @Prop({ required: false })
    tzais72: string;

    @Prop({ required: false })
    tzais16: string;
}

export type ZmanimDocument = ZmanimEntry & Document;

@Schema()
export class Zmanim {
    @Prop({ type: [ZmanimEntry] })
    Jerusalem: ZmanimEntry[];

    @Prop({ type: [ZmanimEntry] })
    Tlv: ZmanimEntry[];

    @Prop({ type: [ZmanimEntry] })
    BeerSheva: ZmanimEntry[];

    @Prop({ type: [ZmanimEntry] })
    Zefat: ZmanimEntry[];

    @Prop({ type: [ZmanimEntry] })
    London: ZmanimEntry[];

    @Prop({ type: [ZmanimEntry] })
    BoroPark: ZmanimEntry[];
}

export type ZmanimModel = Zmanim & Document;

// export const ZmanimEntrySchema = SchemaFactory.createForClass(ZmanimEntry);
export const ZmanimSchema = SchemaFactory.createForClass(Zmanim);
