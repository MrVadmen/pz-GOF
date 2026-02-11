interface RoutingStrategy { buildRoute(data: string): string; }
class FastRouting implements RoutingStrategy { buildRoute(data: string) { return 'Швидка передача: ' + data; } }
class SecureRouting implements RoutingStrategy { buildRoute(data: string) { return 'Захищена передача (VPN): ' + data; } }
class DataTransmitter {
    private strategy!: RoutingStrategy;
    setStrategy(s: RoutingStrategy) { this.strategy = s; }
    transmit(data: string) { console.log(this.strategy.buildRoute(data)); }
}
console.log('=== STRATEGY ===');
const tx = new DataTransmitter();
tx.setStrategy(new FastRouting()); tx.transmit('Звичайний звіт');
tx.setStrategy(new SecureRouting()); tx.transmit('Секретні координати');
console.log('');
