import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000)
  Logger.debug({
    Port: `Listening on port ${process.env.PORT ?? 3000}`,
    Environment: process.env.NODE_ENV ?? 'development',
    Message: 'Server started',
  })
}
void bootstrap()
