import { NestFactory } from '@nestjs/core'
import { UsersModule } from './users.module'

async function bootstrap() {
  const app = await NestFactory.create(UsersModule)
  await app.listen(4001)
}
bootstrap()
