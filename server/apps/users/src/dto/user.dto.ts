import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator'

const commonErrorMessage = (field: string): string => `${field} is required.`

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: commonErrorMessage('Name') })
  @IsString({ message: 'Name must be a string.' })
  name: string

  @Field()
  @IsNotEmpty({ message: commonErrorMessage('Email') })
  @IsEmail({}, { message: 'Email must be valid.' })
  email: string

  @Field()
  @IsNotEmpty({ message: commonErrorMessage('Password') })
  @MinLength(8, { message: 'Password must have at least 8 characters.' })
  password: string
}
