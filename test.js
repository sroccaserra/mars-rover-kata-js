const { expect } = require('chai');

// on est sur une grille (x, y)

// advance forward
// advance backward
// turn right
// turn left
// wrap on edge

//     (y)
//      .
//      .
//      .
//      .
// .....>......(x)
//      .
//      .
//      .
//      .

class Robot {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction
  }

  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }

  move(commands) {
    if (commands == "b") {
       this.moveBackward();
    }
    else if (commands == "f"){
      this.moveForward();
    }
  }

  moveForward() {
    if (this.direction == "S") {
      this.y = this.y - 1;
    }
    else if (this.direction == "E") {
      this.x = this.x + 1;
    }
    else if (this.direction == "N"){
      this.y = this.y + 1;
    }
    else if (this.direction == "W"){
      this.x = this.x - 1;
    }
  }

  moveBackward() {
    if (this.direction == "S") {
      this.y = this.y + 1;
    }
    else if (this.direction == "E") {
      this.x = this.x - 1;
    }
    else if (this.direction == "N"){
      this.y = this.y - 1;
    }
    else if (this.direction == "W"){
      this.x = this.x + 1;
    }
  }
}

///////////////////////////////////////////////////

it('gives its position', () => {
  // given
  const robot = new Robot(0, 0, "N");

  // then
  expect(robot.getPosition()).to.deep.equal({x: 0, y: 0});
});

it('gives its position after starting at 1,1', () => {
  // given
  const robot = new Robot(1, 1, "N");

  // then
  expect(robot.getPosition()).to.deep.equal({x: 1, y: 1});
});

it('moves forward when facing north', () => {
  // given
  const robot = new Robot(0, 0, "N");

  // when
  robot.move("f");

  // then
  expect(robot.getPosition()).to.deep.equal({x: 0, y: 1});
});

it('moves forward when facing north from another position', () => {
  // given
  const robot = new Robot(0, 1, "N");

  // when
  robot.move("f");

  // then
  expect(robot.getPosition()).to.deep.equal({x: 0, y: 2});
});

it('moves forward when facing south', () => {
  // given
  const robot = new Robot(0, 0, "S");

  // when
  robot.move("f");

  // then
  expect(robot.getPosition()).to.deep.equal({x: 0, y: -1});
});

it('moves forward when facing east', () => {
  // given
  const robot = new Robot(0, 0, "E");

  // when
  robot.move("f");

  // then
  expect(robot.getPosition()).to.deep.equal({x: 1, y: 0});
});

it('moves forward when facing west', () => {
  // given
  const robot = new Robot(0, 0, "W");

  // when
  robot.move("f");

  // then
  expect(robot.getPosition()).to.deep.equal({x: -1, y: 0});
});

it('moves backward when facing north', () => {
  // given
  const robot = new Robot(0, 0, "N");

  // when
  robot.move("b");

  // then
  expect(robot.getPosition()).to.deep.equal({x: 0, y: -1});
});
