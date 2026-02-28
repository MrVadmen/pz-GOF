import { DataTransmitter } from './DataTransmitter';
import { FastRouting } from './FastRouting';
import { SecureRouting } from './SecureRouting';


console.log('=== STRATEGY ===');
const tx = new DataTransmitter();
tx.setStrategy(new FastRouting());
tx.transmit('Звичайний звіт');
tx.setStrategy(new SecureRouting());
tx.transmit('Секретні координати');
console.log('');
