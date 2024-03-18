import { ObjectType, Field } from '@nestjs/graphql'
import { User } from '../entities/user.entity'

@ObjectType()
export class ErrorType {
  @Field()
  message: string

  @Field({ nullable: true })
  code?: string
}

@ObjectType()
export class RegisterResponse {
  @Field(() => User)
  user: User | any

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType
}
