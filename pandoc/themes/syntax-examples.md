# Syntax Highlighter Examples


## HTML

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>PHP Code Example</title>
</head>
<body>
    <h1>PHP Code Example</h1>
 
    <p><?php echo 'Hello World!'; ?></p>
 
    <p>This line is highlighted.</p>
 
    <div class="foobar">
        This    is  an
        example of  smart
        tabs.
    </div>
 
    <p><a href="http://wordpress.org/">WordPress</a></p>
</body>
</html>
```


## Java

```java
package tutorial;
import com.opensymphony.xwork2.ActionSupport;
public class HelloWorld extends ActionSupport {
  private String name;
  public String getName() {
  return name;
  }
  public void setName(String name) {
      this.name = name;
  }
  public String execute() {
      name = "Hello, " + name + "!"; 
      return SUCCESS;
  }
}
```

## Javascript

```javascript
var globalVar;
/**
 * Constructor for <code>AjaxRequest</code> class
 * @param url the url for the request<p/>
 */
function AjaxRequest(url) {
    var urls = [ "www.cnn.com", 5, globalVar];
    this.request = new XMLHttpRequest();
    url = url.replace(/^\s*(.*)/, "$1"); // skip leading whitespace
    /* check the url to be in urls */
    var a = "\u1111\n";
    this.foo = new function() {};
    foo();

    document.evaluate("//prefix:*[ext:name() = 'changes']/element[(position() mod 2) = $pos + 1]/parent::*");
}

new AjaxRequest("");
```


## PHP

```php
<?php
if (!defined('MEDIAWIKI'))
  exit(1);
 
$wgExtensionFunctions[] = "wfSyntaxHighlighterExtension";
 
$wgExtensionCredits['other'][] = array(
  'name' => 'SyntaxHighlighter',
  'author' => array('Alex Gorbatchev'),
  'version' => '1.0',
  'url' => 'http://alexgorbatchev.com/projects/syntaxhighlighter',
  'description' => 'Provides tight integration with SyntaxHighlighter.'
);
 
// Path to the SyntaxHighlighter scripts
$wgSyntaxHighlighterScriptPath = "{$wgScriptPath}/extensions/SyntaxHighlighter/scripts";
 
// Path to the SyntaxHighlighter styles
$wgSyntaxHighlighterStylesPath = "{$wgScriptPath}/extensions/SyntaxHighlighter/styles";
 
// Theme CSS file
$wgSyntaxHighlighterTheme = "shThemeDefault.css";
 
// Brushes to include on the page
$wgSyntaxHighlighterBrushes = array(
  'shBrushBash.js',
  'shBrushCpp.js'
);
 
$dir = dirname(__FILE__) . '/';
 
function wfSyntaxHighlighterExtension()
{
  global $wgOut, $wgScriptPath, $wgParser, 
      $wgSyntaxHighlighterBrushes, $wgSyntaxHighlighterScriptPath, 
      $wgSyntaxHighlighterStylesPath, $wgSyntaxHighlighterTheme;
   
  // Make shCore.js the very first script to be included (before all the brushes)
  array_unshift($wgSyntaxHighlighterBrushes, 'shCore.js');
```

## Bash

```bash
#!/bin/bash
X=3
Y=4
empty_string=""
if [ $X -lt $Y ]  # is $X less than $Y ? 
then
  echo "\$X=${X}, which is smaller than \$Y=${Y}"
fi
 
if [ -n "$empty_string" ]; then
  echo "empty string is non_empty"
fi
 
if [ -e "${HOME}/.fvwmrc" ]; then             # test to see if ~/.fvwmrc exists
  echo "you have a .fvwmrc file"
  if [ -L "${HOME}/.fvwmrc" ]; then       # is it a symlink ?  
      echo "it's a symbolic link"
  elif [ -f "${HOME}/.fvwmrc" ]; then     # is it a regular file ?
      echo "it's a regular file"
  fi
else
  echo "you have no .fvwmrc file"
fi
```