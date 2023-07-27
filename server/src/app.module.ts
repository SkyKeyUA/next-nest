import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigModule } from '@nestjs/config';
import { FileModule } from './file/file.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath: ['.env.development.local', '.env.development'],
      //isGlobal: true,
      //ignoreEnvVars: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', 'dist', 'static'),
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
