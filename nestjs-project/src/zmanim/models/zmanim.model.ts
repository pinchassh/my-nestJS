import { Field, ID, ObjectType } from "@nestjs/graphql"
import { GraphQLJSONObject } from "graphql-scalars";

@ObjectType()
class ZmanimEntryType {
    @Field({ nullable: true })
    CivilDate?: string;
    @Field({ nullable: true })
    JewishDate?: string;
    @Field({ nullable: true })
    Day?: string;
    @Field({ nullable: true })
    ParshasHashavuaOrYomTov?: string;
    @Field({ nullable: true })
    Alos16?: string;
    @Field({ nullable: true })
    Alos72Minutes?: string;
    @Field({ nullable: true })
    misheyakir?: string;
    @Field({ nullable: true })
    sunrise?: string;
    @Field({ nullable: true })
    sofZmanShmaMGA?: string;
    @Field({ nullable: true })
    sofZmanShmaGRA?: string;
    @Field({ nullable: true })
    sofZmanTfilaMGA?: string;
    @Field({ nullable: true })
    sofZmanTfilaGRA?: string;
    @Field({ nullable: true })
    chatzos?: string;
    @Field({ nullable: true })
    minchaGedolaGRA?: string;
    @Field({ nullable: true })
    plag?: string;
    @Field({ nullable: true })
    candleLighting18Minutes?: string;
    @Field({ nullable: true })
    sunset?: string;
    @Field({ nullable: true })
    tzaisGeonim?: string;
    @Field({ nullable: true })
    tzais72?: string;
    @Field({ nullable: true })
    tzais16?: string;
    @Field(() => ID, { nullable: true })
    _id?: string;
}

@ObjectType()
export class ZmanimType {

    @Field(() => [ZmanimEntryType], { nullable: true })
    Jerusalem: ZmanimEntryType[];

    @Field(() => [ZmanimEntryType], { nullable: true })
    Tlv: ZmanimEntryType[];

    @Field(() => [ZmanimEntryType], { nullable: true })
    BeerSheva: ZmanimEntryType[];

    @Field(() => [ZmanimEntryType], { nullable: true })
    Zefat: ZmanimEntryType[];

    @Field(() => [ZmanimEntryType], { nullable: true })
    London: ZmanimEntryType[];

    @Field(() => [ZmanimEntryType], { nullable: true })
    BoroPark: ZmanimEntryType[];




}




// import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

// @ObjectType()
// export class ZmanimAddress {
//     @Field()
//     areaCountry: string;
//     @Field()
//     city: string;
//     @Field()
//     street: string;
// }

// @ObjectType()
// export class ZmanimType {
//     @Field(() => ID)
//     id: string;
//     @Field()
//     name: string;
//     @Field()
//     genre: String;
//     @Field()
//     platforms: String;
//     @Field()
//     description: String;
//     @Field()
//     contactNumber: String;
//     @Field()
//     imageUrl: String;
//     @Field()
//     imageAlt: String;
//     @Field()
//     address: ZmanimAddress;
//     @Field()
//     userId: string;
//     @Field()
//     email: String;
// }

// @ObjectType()
// export class MessageType {
//     @Field()
//     massage: string;
// }

