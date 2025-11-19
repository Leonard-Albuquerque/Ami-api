import { IsOptional, IsString } from 'class-validator';

export class CreateSettingsDto {
  @IsOptional()
  @IsString()
  whatsapp?: string;

  @IsOptional()
  @IsString()
  instagram?: string;

  @IsOptional()
  @IsString()
  tiktok?: string;

  @IsOptional()
  @IsString()
  defaultWhatsappMessage?: string;

  @IsOptional()
  @IsString()
  storeBanner?: string;

  @IsOptional()
  additionalSettings?: any;
}
