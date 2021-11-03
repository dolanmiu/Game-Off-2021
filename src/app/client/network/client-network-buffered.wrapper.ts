import { Inject, Singleton } from 'typescript-ioc';
import { ClientNetworkThreadWrapper } from './client-network-thread.wrapper';
import { ClientEventNetwork } from './client-network.model';
import { NetworkDataType, NetworkEvent, NetworkMessage, NetworkPayload } from '../../shared/network/shared-network.model';
import { map, mergeMap, Observable } from 'rxjs';
import { ClientConfig } from '../config/client-config';
import { TimeMapBuffer } from '../../shared/time-map-buffer/time-map-buffer';
import { mapNetworkMessages } from './client-network-buffered.wrapper.utils';

@Singleton
export class ClientNetworkBufferedWrapper implements ClientEventNetwork<NetworkMessage> {
   private readonly bufferTimerMs = 1000 / ClientConfig.NETWORK_TICK_RATE;

   readonly connected$: Observable<void>;
   readonly disconnected$: Observable<void>;
   readonly data$: Observable<NetworkMessage>;

   constructor(
      @Inject private readonly thread: ClientNetworkThreadWrapper<NetworkDataType>,
      @Inject private readonly buffer: TimeMapBuffer<NetworkEvent, NetworkPayload>,
   ) {
      this.connected$ = thread.connected$;
      this.disconnected$ = thread.disconnected$;
      this.data$ = thread.data$.pipe(mergeMap((data) => data));
      this.buffer.data$.pipe(map((data) => mapNetworkMessages(data))).subscribe((messages) => this.sendMessagesToThread(messages));
      this.buffer.setFrameLengthMs(this.bufferTimerMs);
      this.buffer.setDefaultValue({});
   }

   isConnected(): boolean {
      return this.thread.isConnected();
   }

   connect(host: string): void {
      this.thread.connect(host);
   }

   disconnect(): void {
      this.thread.disconnect();
   }

   send<T>(event: NetworkEvent, message: T = {} as T): void {
      this.buffer.add(event, message);
   }

   private sendMessagesToThread(messages: NetworkMessage[]): void {
      if (this.thread.isConnected()) {
         this.thread.send(messages);
      }
   }
}
