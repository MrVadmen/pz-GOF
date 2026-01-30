interface Transport {
  deliver(): void;
}

class Truck implements Transport {
  deliver() {
    console.log("Deliver by truck");
  }
}

abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery() {
    const transport = this.createTransport();
    transport.deliver();
  }
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

export function factoryMethodDemo() {
  const logistics = new RoadLogistics();
  logistics.planDelivery();
}
