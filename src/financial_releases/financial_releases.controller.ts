import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialReleasesService } from './financial_releases.service';
import { CreateFinancialReleaseDto } from './dto/create-financial_release.dto';

@Controller('financial-releases')
export class FinancialReleasesController {
  constructor(private readonly financialReleasesService: FinancialReleasesService) {}

  @Post()
  create(@Body() createFinancialReleaseDto: CreateFinancialReleaseDto) {
    return this.financialReleasesService.create(createFinancialReleaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialReleasesService.remove(+id);
  }
}
