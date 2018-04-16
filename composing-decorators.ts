const printA = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
  console.log("A");
}

const printB = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
  console.log("B");
}

class Printer {
  @printA
  @printB
  printC() {
      console.log("C");
  }
}

new Printer().printC();
