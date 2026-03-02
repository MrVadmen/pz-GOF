import { RadioAdapter } from './RadioAdapter';
import { AnalogRadio } from './AnalogRadio';
import { VITI} from './viti';

console.log('=== ADAPTER ===');
const adapter = new RadioAdapter(new AnalogRadio());
adapter.sendDigitalData('Метадані');
const vitiAdapter = new  VITI();
vitiAdapter.sendDigitalData("Палама В -5 балів");

console.log('');