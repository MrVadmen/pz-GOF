import { Observer } from './Observer';

// Наша нова сутність
export class DroneSwarm implements Observer {
    constructor(private swarmId: string) {}

    // Обов'язковий метод update, якого вимагає інтерфейс Observer!
    update(order: string): void {
        console.log(`[Розвід-Дрони '${this.swarmId}'] Прийняли наказ: "${order}". Коригуємо маршрут польоту.`);
    }
}