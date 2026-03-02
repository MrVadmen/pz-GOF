import { PowerGenerator } from './PowerGenerator';
import { SatelliteAntenna } from './SatelliteAntenna';
import { CryptoModule } from './CryptoModule';

export class CommStationFacade {
    private power = new PowerGenerator(); 
    private antenna = new SatelliteAntenna(); 
    private crypto = new CryptoModule();
    
    deploy() { 
        this.power.turnOn(); 
        this.antenna.connect(); 
        this.crypto.encrypt(); 
        console.log('Станція готова.'); 
    }
}