import { RoutingStrategy } from './RoutingStrategy';
export class DataTransmitter {
    private strategy!: RoutingStrategy;
    setStrategy(strategy: RoutingStrategy): void {
        this.strategy = strategy;
    }
    transmit(data: string): void {
        console.log(this.strategy.buildRoute(data));
    }
}
