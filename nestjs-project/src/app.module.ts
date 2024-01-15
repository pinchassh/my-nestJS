import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisOptions } from './configs/redis.options';
import { CacheModule } from '@nestjs/cache-manager';
import { LoggerMiddleware } from './common/middleware/logger.middleware';


@Module({
  imports: [
    CacheModule.registerAsync(RedisOptions),

    UsersModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/ZmanimApplication'),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/ZmanimApplication', {
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('connected to mongoDB! 🥳');
        });
        connection._events.connected();
        return connection;
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule { }
export class AppModule implements NestModule {
  constructor() {
    this.initalData();
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
  initalData() {
    console.log('hello');
  }
}