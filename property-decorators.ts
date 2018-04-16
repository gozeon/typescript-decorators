const log = (target: Object, key: string | symbol) => {
  let value = target[key];

  const getter = () => {
    console.log('Getting value: ', value);
    return value;
  }

  const setter = (val) => {
    console.log('Setting value: ', val);
    value = val;
  }

  /**
   * Reflect
   * @link http://devdocs.io/javascript/global_objects/reflect
   */
  Reflect.deleteProperty[key];
  Reflect.defineProperty(target, key, {
    get: getter,
    set: setter
  })
}

class Box<T> {

  @log
  item: T;
}

const numberBox = new Box<number>();
numberBox.item = 12;
numberBox.item;
