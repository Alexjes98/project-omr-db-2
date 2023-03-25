import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule  } from "@nestjs/mongoose";


import { TransactionSchema } from './schemas/transaction.schema'
import { AccountModule } from 'src/account/account.module';

@Module({
  imports:[
    AccountModule,
    MongooseModule.forFeature([
      {name: 'Transaction', schema: TransactionSchema}
    ])
  ],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
