import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { TransactionModule } from './transaction/transaction.module';
import { PersonModule } from './person/person.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bank-nest-api'),
    TransactionModule,
    PersonModule,
    AccountModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
