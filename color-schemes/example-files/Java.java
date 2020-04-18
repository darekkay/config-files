/* Block comment */

import Java.Annotation;

import java.util.Date;

/**
 * Doc comment here for <code>SomeClass</code>
 *
 * @see Math#sin(double)
 */
@Annotation(name = "Name")
public class Java<T extends Runnable> { // some comment
    private T field = null;
    private double unusedField = 12345.67890;
    private String anotherString = "Another\nString";
    private AnInterface anInterface = null;
    private AnEnum anEnum = AnEnum.CONST1;
    public static int staticField = 0;

    /*
     * Block comment
     */
    public Java() {
        SomeAbstractClass someAbstractClass = new SomeAbstractClass() {
            // TODO: write code here
        };
        System.out.println(someAbstractClass.toString() + anEnum.toString());
        anInterface.method(AnInterface.CONSTANT);
    }

    /**
     * Comment <code>Muh</code>
     * @param param muh
     */
    public Java(AnInterface param) {
        final String localVar = "IntelliJ";
        System.out.println(anotherString + toString() + localVar);
        long time = Date.parse("1.2.3"); // Method is deprecated
        int reassignedValue = staticField;
        anInterface.method(reassignedValue);
        reassignedValue++;
        field.run();
        new Java() {
            {
                String a = localVar;
            }
        };
        int[] array = new int[2];
        param.method(reassignedValue);
        param.method2(time);
        String muhdssad = "";

        someMethod(reassignedValue);
    }

    private void someMethod(int muh){
        System.out.println(String.valueOf(muh));
    }


    enum AnEnum {
        CONST1, CONST2
    }

    interface AnInterface {
        int CONSTANT = 2;

        void method(int value);

        void method2(long value);
    }

    @Deprecated
    abstract class SomeAbstractClass {
    }

    public @interface Annotation {
        public String name();
    }
}
