class CSE {
    static int a = 10;
    static int b = 20;
    int c = 30;
    int d = 40;

    static void displayStaticBlock() {
        System.out.println("block");
        System.out.println("Hello");
    }

    static void block() {
        System.out.println("Instance block");
        System.out.println("Hii");
    }

    static void m() {
        System.out.println("a");
        System.out.println("b");
    }

    static void add() {
        System.out.println("a+b=" + (a + b));
    }

    void c1() {
        System.out.println("c");
        System.out.println("d");
    }

    void sub() {
        System.out.println("c-d=" + (c - d));
    }
}

public class Ece {
    static int a = 10;
    static int b = 20;
    int x = 10;
    int y = 20;

    void static1() {
        System.out.println("how");
        System.out.println("vidya");
    }

    static void block1() {
        System.out.println("word");
        System.out.println("java");
    }

    static void m1() {
        System.out.println("c");
        System.out.println("d");
    }

    static void sub1() {
        int c = 30, d = 40;
        System.out.println("c-d=" + (c - d));
    }

    static void m2() {
        System.out.println("a=" + a);
        System.out.println("b=" + b);
    }

    static void add2() {
        System.out.println("a+b=" + (a + b));
    }

    public static void main(String[] args) {
        CSE c = new CSE();
        c.m();
        c.add();
        c.c1();
        c.sub();

        Ece e = new Ece();
        e.static1();
        block1();
        m1();
        sub1();
        m2();
        add2();
    }
}
