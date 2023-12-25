import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ObstacleModule } from './obstacle/obstacle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: "mysql",
          host: "localhost",
          port: 3306,
          username: "root",
          password: "1475963",
          database: "prevent_disaster",
          entities: ["dist/**/*.entity{.ts,.js}"],
          synchronize: true
        }
      }
      
    }),
    ObstacleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

