interface Observer { update(order: string): void; }
class BrigadeHeadquarters {
    private units: Observer[] = [];
    subscribe(u: Observer) { this.units.push(u); }
    issueOrder(order: string) { console.log('[Штаб] Наказ: ' + order); this.units.forEach(u => u.update(order)); }
}
class MilitaryUnit implements Observer {
    constructor(private callsign: string) {}
    update(order: string) { console.log('Підрозділ ' + this.callsign + ' отримав наказ: ' + order); }
}
console.log('=== OBSERVER ===');
const hq = new BrigadeHeadquarters();
hq.subscribe(new MilitaryUnit('Сокіл-1')); hq.subscribe(new MilitaryUnit('Барс-2'));
hq.issueOrder('Зміна частот');
console.log('');
