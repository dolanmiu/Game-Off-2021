import {CommonClientConfig, ServerHost} from './common-client-config';

// Import this class for config properties, though, you should define here only development properties
export class ClientConfig extends CommonClientConfig {
   static readonly ASSET_FOLDER: string = '../../src/asset/';
   static readonly SERVER_HOSTS: ServerHost[] = [
      {
         url: `http://localhost:${CommonClientConfig.SERVER_SOCKET_PORT}`,
         name: 'Localhost',
      },
   ];
}
