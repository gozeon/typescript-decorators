const log = (target: any, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
  return {
    value: function (...args: any[]) {
      console.log('Arguments: ', args.join(', '));
      /**
       * Function.apply
       * @link http://devdocs.io/javascript/global_objects/function/apply
       */
      const result = descriptor.value.apply(target, args);
      console.log('Result: ', result);

      return result;
    }
  };
}

class Calculator {

  @log
  add(x: number, y: number): number {
    return x + y;
  }
}

new Calculator().add(2, 4);
