import { Observer } from './Observer';
export class VITI implements Observer {
    constructor(private unitName: string) {}
    update(order: string): void {
        console.log(`[ВІТІ  '${this.unitName}' отримав наказ: "${order}". Поставити Паламарчуку пж 5 балів!`);
    }
}