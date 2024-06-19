class entityTypes{
  constructor(health,speed,value){
        this.health = health;
        this.speed = speed;
        this.value = value;
        this.name = "entityTypes";
  }
}

class Benthos extends entityTypes{
  constructor(health, speed, value) {
    super(health, speed);
    this.name = "Benthos";
    this.value = 4;
  }
}
class Nekton extends entityTypes{
  constructor(health, speed, value) {
    super(health, speed);
    this.name = "Nekton";
    this.value = 3;
  }
};
