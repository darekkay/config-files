pandoc.exe^
 handout.md^
 --from markdown_github+yaml_metadata_block^
 --to html^
 --output build/handout.html^
 --standalone^
 --toc^
 --template="%USERPROFILE%\.pandoc\templates\github.html5"^
 --filter="%USERPROFILE%\.pandoc\filters\highlight-todos.js"^
 --filter="%USERPROFILE%\.pandoc\filters\remove-notes.js"^
