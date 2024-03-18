import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../../../prisma/prisma.service'
import { User } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import { Response } from 'express'
import { RegisterDto } from './dto/user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async registerUser(registerDto: RegisterDto, response: Response) {
    const { name, email, password } = registerDto

    await this.checkExistingEmail(email)
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await this.prisma.user.create({
      data: { name, email, password: hashedPassword }
    })
    return { user, response }
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({})
  }

  private async checkExistingEmail(email: string): Promise<void> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email }
    })
    if (existingUser) {
      throw new BadRequestException(
        'A user with this email already exists. Please use a different email address.'
      )
    }
  }
}
