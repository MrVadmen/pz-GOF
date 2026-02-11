class PowerGenerator { turnOn() { console.log('Генератор: Увімкнено.'); } }
class SatelliteAntenna { connect() { console.log('Антена: Лінк встановлено.'); } }
class CryptoModule { encrypt() { console.log('Криптомодуль: Канал зашифровано.'); } }
class CommStationFacade {
    private power = new PowerGenerator(); private antenna = new SatelliteAntenna(); private crypto = new CryptoModule();
    deploy() { this.power.turnOn(); this.antenna.connect(); this.crypto.encrypt(); console.log('Станція готова.'); }
}
console.log('=== FACADE ===');
new CommStationFacade().deploy();
console.log('');
