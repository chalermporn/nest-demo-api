import { Module } from '@nestjs/common';
import { PrismaService } from './prima.service';

@Module({
  providers: [PrismaService],
})
export class PrimaModule {}
