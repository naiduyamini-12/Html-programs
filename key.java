class CSE
{
static int a=10;
static int b=20;
int c=30;
int d=40;
 static void displayStaticBlock()
{
System.out.println("block");
System.out.println("Hello");
}
  static void   block()
{
System.out.println("Instance block");
System.out.println("Hii");
}
 static void m()

{
System.out.println("a");
System.out.println("b");
}
  static void  add()
{
System.out.println("a+b="+(a+b));

}
 void c1()
{
System.out.println("c");
System.out.println("d");
}
void sub()
{
System.out.println("c-d="+(c-d));
}
}
class Csm
{
static int a=10;
static int b=20;
int a=10;
int b=20;
 stati void c1()
{
System.out.println("how");
System.out.prinln("vidya");
}
static void block1()
{
System.out.println("word");
System.out.prinln("java");
}
static void m1()
{
System.out.println("c");
System.out.prinln("d");
}
static void  sub1()
{
System.out.println("c-d="+(c-d));
}
 static void  m2()
{
System.out.println("a="+b);
System.out.prinln("b="+b);
}
 static void  add2()
{
System.out.println("a+b="+(a+b));
}
}
class Menu
{
public static void main(String[] args)
{
CSE c=new CSE();
CSE.displayStaticBlock;
CSE.block;
CSE.m();
CSE.add();
c.c1();
c.sub();
Csm e=new Csm();
Csm.c1;
Csm.block1;
Csm.m1();
Csm.sub();
e.m2();
e.add();
}
}

