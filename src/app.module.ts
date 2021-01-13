import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import config from 'src/config';

@Module({
  imports: [
    CustomersModule,
    ArticlesModule,
    MongooseModule.forRoot(config.mongoUri),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
