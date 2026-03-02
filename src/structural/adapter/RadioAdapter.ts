import { DigitalCommSystem } from './DigitalCommSystem';
import { AnalogRadio } from './AnalogRadio';

export class RadioAdapter extends DigitalCommSystem {
    constructor(private analogRadio: AnalogRadio) { 
        super(); 
    }
    sendDigitalData(packet: string) { 
        super.sendDigitalData('[Оцифровано: ' + this.analogRadio.getAnalogSignal() + '] + ' + packet); 
    }
}