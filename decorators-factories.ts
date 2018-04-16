const greaterOrEqual = (n: number)  => {
  return (target: Object, key: string | symbol) => {
      let value = target[key];

      const getter = () =>  value;
      const setter = (val) => {
          if (val < n) {
              throw new Error(`Value smaller than ${n}`);
          }
          value = val;
      }
      Reflect.deleteProperty[key];
      Reflect.defineProperty(target, key, {
          get: getter,
          set: setter
      });
  }
}


class Box {
  @greaterOrEqual(0) numberOfItems: number;
}

const box = new Box();
box.numberOfItems = 10; //OK
box.numberOfItems = -1 //throws Error
