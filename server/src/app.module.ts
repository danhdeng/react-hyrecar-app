import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentModule } from './components/comonents.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, GraphQLModule.forRoot(
    {
      playground: process.env.NODE_DEV && true || false,
      debug: process.env.NODE_DEV && true || false,
      autoSchemaFile: true,
    }
  ), ComponentModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
