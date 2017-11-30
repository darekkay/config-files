# P4Merge

- Use `utf8` instead of `utf8-bom`:
    - See also [P4CHARSET](https://www.perforce.com/perforce/doc.current/manuals/cmdref/Content/CmdRef/P4CHARSET.html)
    - `~/.p4merge/ApplicationSettings.xml`:

```xml
<PropertyList varName="ApplicationSettings" IsManaged="TRUE">
 <String varName="CharSet">utf8</String>
```
