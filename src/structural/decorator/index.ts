interface Coffee {
  cost(): number;
}

class SimpleCoffee implements Coffee {
  cost() {
    return 10;
  }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost() {
    return this.coffee.cost() + 5;
  }
}

export function decoratorDemo() {
  const coffee = new MilkDecorator(new SimpleCoffee());
  console.log("Coffee cost:", coffee.cost());
}
