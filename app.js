
const myArgs = process.argv.slice(2);
const data = require(`./${myArgs[0]}`);
const command = myArgs[1];
const argument = myArgs[2];

class ParkBot {
  constructor() {
    this.command = command;
    this.argument = argument;
  }
  execute() {
    console.log(this[command](argument).join(", "));
  }
  locate(state) {
    const result = data.filter(garage => garage.address.state === state).map(garage => `${garage.name}`);
    return result;
  }
  find_price_hourly_lte(price) {
    const result = data.filter(garage => garage.price_hourly <= price).map(garage => `${garage.name}`);
    return result;
  }
  find_price_hourly_gt(price) {
    const result = data.filter(garage => garage.price_hourly > price).map(garage => `${garage.name}`);
    return result;
  }
}

new ParkBot().execute();