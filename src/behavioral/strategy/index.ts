interface PaymentStrategy {
  pay(amount: number): void;
}

class CardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} by card`);
  }
}

class CashPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} by cash`);
  }
}

class Shop {
  constructor(private strategy: PaymentStrategy) {}

  checkout(amount: number) {
    this.strategy.pay(amount);
  }
}

export function strategyDemo() {
  const shop = new Shop(new CardPayment());
  shop.checkout(100);
}
