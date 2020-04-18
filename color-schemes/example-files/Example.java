import Java.Annotation;

import java.util.Date;

@Annotation (name = "Name")
public class Example<T extends Runnable>
{
        private enum AnEnum { CONST1, CONST2 }

        private T field;
        private String stringField = "Another\nString";

        /**
         * JavaDoc comment
         * @param param1 description
         */
        public Example(String param1)
        {
                stringField = param1;
        }

        /*
         * Block comment
         */
        private void someMethod(AnEnum enumParam)
        {
                // TODO: write some code
                double doubleVariable = 12345.67890;

                System.out.println(stringField + enumParam.name());
                long time = Date.parse("1.2.3"); // deprecated static method
                field.run();

                int[] array = new int[2];
                //                param.method(reassignedValue);
                //                param.method2(time);
                String muhdssad = "";

                //                someMethod(reassignedValue);
        }
}
