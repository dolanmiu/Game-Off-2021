import { Inject, Singleton } from 'typescript-ioc';
import { ClientPlayerService } from './client-player.service';
import { ClientNetworkService } from '../network/client-network.service';

@Singleton
export class ClientPlayerManager {
   constructor(@Inject private readonly service: ClientPlayerService, @Inject private readonly network: ClientNetworkService) {
      network.loginOk$.subscribe((response) => {
         this.service.setClientPlayer(response.player);
      });
   }
}
