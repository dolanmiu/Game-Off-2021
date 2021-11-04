export class CommonSharedConfig {
   static readonly NETWORK_TICK_RATE: number = 15; // Max data sync per sec
   static readonly SERVER_SOCKET_PORT: number = parseInt(process.env.PORT ?? '3001');
}
