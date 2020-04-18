import re

@decorator(param=1)
def f(x):
    """ Syntax Highlighting Demo
        @param x Parameter"""
    s = ("Test", 2+3, {'a': 'b'}, x)   # Comment
    print s[0].lower()


class Foo:
    def __init__(self):
        byte_string = 'newline:\n also newline:\x0a'
        text_string = u"Cyrillic R is \u042f."
        self.makesense(whatever=1)
        print byte_string, text_string

    def makesense(self, whatever):
        self.sense = whatever
        for test_string in ['555-1212', 'ILL-EGAL']:
            if re.match(r'^\d{3}-\d{4}$', test_string):
                print test_string, 'is a valid US local phone number'
            else:
                print test_string, 'rejected'

x = len('abc')
print(f.__doc__)