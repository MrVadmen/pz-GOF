interface MilitaryTransport { deliverSupplies(): string; }
class ArmoredVehicle implements MilitaryTransport { deliverSupplies() { return 'Доставка боєприпасів бронеавтомобілем по землі.'; } }
class CargoDrone implements MilitaryTransport { deliverSupplies() { return 'Доставка медикаментів вантажним дроном повітрям.'; } }
abstract class LogisticsCommand {
    abstract createTransport(): MilitaryTransport;
    planDelivery(): void { console.log('[Командування логістики] ' + this.createTransport().deliverSupplies()); }
}
class GroundLogistics extends LogisticsCommand { createTransport() { return new ArmoredVehicle(); } }
class AirLogistics extends LogisticsCommand { createTransport() { return new CargoDrone(); } }
console.log('=== FACTORY METHOD ===');
new GroundLogistics().planDelivery();
new AirLogistics().planDelivery();
console.log('');
