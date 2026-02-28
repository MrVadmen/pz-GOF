import { RoutingStrategy } from './RoutingStrategy';
export class SecureRouting implements RoutingStrategy {
    buildRoute(data: string): string {
        return 'Захищена передача (VPN): ' + data;
    }
}
