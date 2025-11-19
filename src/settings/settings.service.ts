import { Injectable } from '@nestjs/common';
import { UpdateSettingsDto } from './dto/update-settings.dto';
import { CreateSettingsDto } from './dto/create-settings.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}

  async create(createSettingsDto: CreateSettingsDto) {
    return this.prisma.settings.create({
      data: createSettingsDto,
    });
  }

  async findAll() {
    return this.prisma.settings.findMany();
  }

  async findOne(id: number) {
    return this.prisma.settings.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSettingsDto: UpdateSettingsDto) {
    return this.prisma.settings.update({
      where: { id },
      data: updateSettingsDto,
    });
  }

  async remove(id: number) {
    return this.prisma.settings.delete({
      where: { id },
    });
  }

  // Assuming there's only one settings record, id=1
  async getSettings() {
    let settings = await this.prisma.settings.findFirst();
    if (!settings) {
      settings = await this.prisma.settings.create({
        data: {},
      });
    }
    return settings;
  }

  async updateSettings(updateSettingsDto: UpdateSettingsDto) {
    let settings = await this.prisma.settings.findFirst();
    if (!settings) {
      return this.prisma.settings.create({
        data: updateSettingsDto,
      });
    }
    return this.prisma.settings.update({
      where: { id: settings.id },
      data: updateSettingsDto,
    });
  }
}
