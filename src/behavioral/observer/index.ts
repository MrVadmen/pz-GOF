import { BrigadeHeadquarters } from './BrigadeHeadquarters';
import { MilitaryUnit } from './MilitaryUnit';
import { DroneSwarm } from './DroneSwarm';
import { VITI } from './viti'; 

console.log("=== OBSERVER ===");
const hq = new BrigadeHeadquarters();
hq.subscribe(new MilitaryUnit("Сокіл-1"));
hq.subscribe(new MilitaryUnit("Барс-2"));
hq.subscribe(new DroneSwarm("Байрактар-Груп"));
hq.subscribe(new VITI("Курсанти ВІТІ"));

hq.issueOrder("Негайно розгорнути польовий вузол зв'язку!");
console.log("");