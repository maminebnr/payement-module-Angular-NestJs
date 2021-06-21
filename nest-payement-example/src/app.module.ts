import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnexionService } from './services/connexion/connexion.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, ConnexionService],
})
export class AppModule {}
