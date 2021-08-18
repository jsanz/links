# [Links](https://links.jorgesanz.net/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6f3104cb-a472-4b3a-86bb-2c1bffb6de56/deploy-status)](https://app.netlify.com/sites/jsanz-links/deploys)

This is a website to share the main links that point to my Internet presence. You can check it at <https://links.jorgesanz.net/>.

If you have any feedback or comment, feel free to [create an issue][issue] or use my [contact form]. Have a great day!

[issue]: https://github.com/jsanz/links/issues/new
[contact form]: https://jorgesanz.net/contact/

## Details

Technically, this is a minimal website hosted on [Netlify] and using [Parcel] for zero configuration deployment. Check the [`package.json`](./package.json) file for details.

The site publishing is composed of three steps:

1. First the data with texts and links is joined with a [Handlebars] template producing a `index.html` that does not need any JavaScript code to render.
2. Second the final stylesheet is created from the rendered HTML and the [Tachyons] source only with the necessary CSS classes.
3. Finally Parcel produces a `dist` folder with all the needed assets: minified HTML and CSS, images, etc.

The `dist` folder can be hosted anywhere, I use [Netlify] to run the publishing process and hosting but you can use [Github Pages], [Vercel], or any other PaaS. You can check an example of publishing in [Github Pages] using a Github Action on the [LinksGeo clone](https://github.com/geoinquiets/linksgeo/blob/main/.github/workflows/publish.yml).

The structure of the [`data.json`](data.json) file is straight forward:

* The `metadata` section populates the website `<head>` element.
* `texts` just set up the header and footer, html is allowed
* The `links` array defines the buttons to show.
* On each link there are two ways to specify the icon you want to see on the website:
  * `icon-simpleicons` refers to a [SimpleIcons] identifier. Check the website for the brands available or the `node_modules/simple-icons/icons` folder.
  * `icon-fontawesome` refers to a free [Font Awesome] icon. Check the `node_modules/@fortawesome/fontawesome-free/svgs/` folder and use the relative path without the `.svg` extension for example `solid/microphone`.

The layout of the website is simple and only using [Tachyons] classes so changing fonts, colors, borders, etc. is just a matter of editing the `index.hbs` file (uncomment the full Tachyons CSS while developing).

[Handlebars]: https://handlebarsjs.com/
[Parcel]: https://v2.parceljs.org/
[Tachyons]: http://tachyons.io/
[Netlify]: http://netlify.com/
[Github Pages]: https://pages.github.com/
[Vercel]: https://vercel.com/
[SimpleIcons]: https://simpleicons.org
[Font Awesome]: https://fontawesome.com
