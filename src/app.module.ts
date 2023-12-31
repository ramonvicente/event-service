import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './event.controller';

@Module({
  imports: [],
  controllers: [AppController, EventController],
  providers: [AppService],
})
export class AppModule {}
