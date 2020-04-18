public class Demo
{
        private static final String CONSTANT = "String";
        private Object o;

        /**
         * Creates a new demo.
         *
         * @param o The object to demonstrate.
         */
        public Demo(Object o)
        {
                this.o = o;
                String s = CONSTANT + "Other";
                int i = 123;
        }

        public static void main(String[] args)
        {
                Demo demo = new Demo(null);
        }
}