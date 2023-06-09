import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FinancialReleasesDocument = HydratedDocument<FinancialReleases>;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class FinancialReleases {
  @Prop({ required: true })
  releaseDate: Date;
  
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  value: number;
  
  @Prop({ required: false })
  description: string;

}

export const FinancialReleaseSchema = SchemaFactory.createForClass(FinancialReleases);