pandoc.exe^
 handout.md^
 --from markdown_github+yaml_metadata_block^
 --to html^
 --output build/handout-dev.html^
 --standalone^
 --toc^
 --template="%USERPROFILE%\.pandoc\templates\github.html5"^
 --filter="%USERPROFILE%\.pandoc\filters\highlight-todos.js"
