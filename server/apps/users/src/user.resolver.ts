import { BadRequestException } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { RegisterResponse } from './types/user.types'
import { RegisterDto } from './dto/user.dto'
import { User } from './entities/user.entity'
import { Response } from 'express'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('registerInput') registerInput: RegisterDto,
    @Context('response') response: Response
  ): Promise<RegisterResponse> {
    const { name, email, password } = registerInput

    if (!name || !email || !password) {
      throw new BadRequestException('Please provide all required fields')
    }
    const user = await this.userService.registerUser(registerInput, response)

    return { user }
  }

  @Query(() => [User])
  async users() {
    return this.userService.getAllUsers()
  }
}
