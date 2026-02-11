class DigitalCommSystem { sendDigitalData(packet: string) { console.log('[Цифрова мережа] Передача: ' + packet); } }
class AnalogRadio { getAnalogSignal() { return '~~~аналоговий_сигнал~~~'; } }
class RadioAdapter extends DigitalCommSystem {
    constructor(private analogRadio: AnalogRadio) { super(); }
    sendDigitalData(packet: string) { super.sendDigitalData('[Оцифровано: ' + this.analogRadio.getAnalogSignal() + '] + ' + packet); }
}
console.log('=== ADAPTER ===');
const adapter = new RadioAdapter(new AnalogRadio());
adapter.sendDigitalData('Метадані');
console.log('');
