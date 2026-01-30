class OldPrinter {
  printOld(text: string) {
    console.log("Old printer:", text);
  }
}

interface Printer {
  print(text: string): void;
}

class PrinterAdapter implements Printer {
  constructor(private oldPrinter: OldPrinter) {}

  print(text: string) {
    this.oldPrinter.printOld(text);
  }
}

export function adapterDemo() {
  const printer = new PrinterAdapter(new OldPrinter());
  printer.print("Hello Adapter");
}
