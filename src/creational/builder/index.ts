class House {
  walls?: number;
  roof?: boolean;
}

class HouseBuilder {
  private house = new House();

  buildWalls(count: number) {
    this.house.walls = count;
    return this;
  }

  buildRoof() {
    this.house.roof = true;
    return this;
  }

  getResult() {
    return this.house;
  }
}

export function builderDemo() {
  const house = new HouseBuilder()
    .buildWalls(4)
    .buildRoof()
    .getResult();

  console.log(house);
}
