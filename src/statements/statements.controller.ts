import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatementsService } from './statements.service';

@Controller('statements')
export class StatementsController {
  constructor(private readonly statementsService: StatementsService) {}

  @Get(':date')
  findDateRange(@Param('date') date: string) {

    return this.statementsService.find(date);
  }
}
