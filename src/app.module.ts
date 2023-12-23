import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ObstacleModule } from './obstacle/obstacle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "databaseTear299151119",
      database: "prevent_disaster",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    ObstacleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

