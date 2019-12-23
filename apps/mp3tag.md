# Mp3tag

## Rename Patterns

 - $replace(%artist% - $num(%track%,2) - %title%,_, )
 - $replace(%artist% - %title%,_, )
 - $num(%track%,2) - $replace(%artist% - %title%,_, )
 - $replace(%album%, (Soundtrack), )- $replace(%title%,_, )
 - $replace($replace(%album%, (Soundtrack), )- $num(%track%,2) - %title%,_, )

## Filter

 - UNSYNCEDLYRICS HAS "Artist :"

## Fix lyrics

- Koverter: Tag → Tag
  - From: `UNSYNCEDLYRICS`
  - To: `$regexp(%UNSYNCEDLYRICS%,External links.*,)`

## Actions

 Remove Tag fields except:

 ALBUM;ALBUMARTIST;ARTIST;COVER;GENRE;LYRICS;MOOD;RATING;RATING WMP;TITLE;TRACK;UNSYNCEDLYRICS;YEAR
