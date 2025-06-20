public class MyClass {

    // Static variables (shared by all)
    static String school = "ABC School";
    static int count = 100;

    // Instance variables (each object has its own)
    String name;
    int age;

    // Static method 1
    static void printSchool() {
        System.out.println("School: " + school);
    }

    // Static method 2
    static void printCount() {
        System.out.println("Total Students: " + count);
    }

    // Instance method 1
    void printName() {
        System.out.println("Name: " + name);
    }

    // Instance method 2
    void printAge() {
        System.out.println("Age: " + age);
    }

    // Main method
    public static void main(String[] args) {
        
        // Call static methods
        printSchool();
        printCount();

        // Create object to use instance methods
        MyClass obj = new MyClass();
        obj.name = "John";
        obj.age = 15;

        // Call instance methods
        obj.printName();
        obj.printAge();
    }
}
