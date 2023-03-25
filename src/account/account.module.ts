import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { PersonModule } from 'src/person/person.module';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountSchema } from './schemas/account.schema';

@Module({
  imports: [
    PersonModule,    
    MongooseModule.forFeature([
      { name: 'Account', schema: AccountSchema }
    ])
  ],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule { }
