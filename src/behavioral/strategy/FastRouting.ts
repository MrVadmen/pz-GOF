import { RoutingStrategy } from './RoutingStrategy';
export class FastRouting implements RoutingStrategy {
    buildRoute(data: string): string {
        return `Швидка передача: ${data}`;
    }
}
