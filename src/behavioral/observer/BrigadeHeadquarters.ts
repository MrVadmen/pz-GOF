import { Observer } from './Observer';

// Клас видавця (Штаб)
export class BrigadeHeadquarters {
    private units: Observer[] = [];

    subscribe(unit: Observer): void {
        this.units.push(unit);
    }
    
    issueOrder(order: string): void {
        // правильна передача змінної
        console.log(`[Штаб] Видано новий наказ: ${order}`);
        this.units.forEach(u => u.update(order));
    }
}