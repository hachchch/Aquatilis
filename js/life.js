public class App {
    public static void main(String[] args) {
        entityTypes et = new entityTypes();
        et.setName(EntityName);
        et.setHealth(EntityHelth);
        et.setSpeed(EntitySpeed);
    }
    public static void main(String[] args) {
        Benthos benthos = new Benthos();
        benthos.setValue(6);
    }
    public static void main(String[] args) {
        Nekton nekton = new Nekton();
        nekton.setValue(5);
    }
}

class entityTypes{
        int health;
        int speed;
        int value;
    String name;
    public void setHealth(int health){
        this.health = health;
    }
   public void setSpeed(int speed){
        this.speed = speed;
    }
    public void setValue(int value){
        this.value = value;
    }
    public void setName(String name){
        this.name = name;
    }
}

class Benthos extends entityTypes{
        public Benthos(){
        }
}
class Nekton extends entityTypes{
        public Nekton(){
        }
};
