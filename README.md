# Young Democrats of Tahlequah

Single-page marketing site for Young Democrats of Tahlequah (YDT), a youth
political organization for ages 14&ndash;35 in Tahlequah, Cherokee County,
Oklahoma.

## Stack

Plain static HTML and CSS. No framework, no build step, no npm install.

```
index.html      the whole page
css/styles.css  hand-written styles (theme tokens as CSS custom properties)
favicon.svg
```

Fonts (Fraunces + Public Sans) load from Google Fonts.

## Running it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Notes

- The mobile nav is a `<details>` disclosure, so the menu works without JS.
- Placeholder links to fill in before launch: social URLs and the chapter
  bylaws link in the footer, plus the `hello@ydtahlequah.org` address.
