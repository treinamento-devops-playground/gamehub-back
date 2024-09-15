import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UtilsService } from 'src/shared/services/utils.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtService, UtilsService],
})
export class AuthModule { }