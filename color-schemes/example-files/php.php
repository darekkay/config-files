<?php
$heredoc = <<< HEREDOC_ID
some $contents
HEREDOC_ID;

function foo() {
    return SomeClass::$shared;
}

// Sample comment

class SomeClass extends One implements Another {
    private $my;
    public static $shared;
    const MAGIC = 987654321;
    /*
     * Description by <a href="mailto:">user@host.dom</a>
     * @return SomeType
     */
    function doSmth($abc, $def) {
        foo();
        $def .=  self::MAGIC;
        $v = Helper::convert($abc . "\n {$def}");
        $q = new Query( $this->invent(abs(0x80)) );
        return array($v => $q->result);
    }
}

interface Another {
}


include (dirname(__FILE__) . "inc.php");
`rm -r`;

goto Label;

Label:
