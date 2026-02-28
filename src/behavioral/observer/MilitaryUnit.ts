import { Observer } from './Observer';
export class MilitaryUnit implements Observer {
    constructor(private callsign: string) {}
    update(order: string): void {
        console.log(`Підрозділ '${this.callsign}' отримав наказ: ${order}`);
    }
}
