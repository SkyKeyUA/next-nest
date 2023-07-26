import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath: ['.env.development.local', '.env.development'],
      //isGlobal: true,
      //ignoreEnvVars: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    TrackModule,
  ],
})
export class AppModule {}
