# [Links](https://links.jorgesanz.net/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6f3104cb-a472-4b3a-86bb-2c1bffb6de56/deploy-status)](https://app.netlify.com/sites/jsanz-links/deploys)

This is a website to share the main links that point to my Internet presence. You can check it at <https://links.jorgesanz.net/>.

If you have any feedback or comment, feel free to [create an issue][issue] or use my [contact form][contact]. Have a great day!

[issue]: https://github.com/jsanz/links/issues/new
[contact]: https://jorgesanz.net/contact/

## Details

Technically, this is a minimal website hosted on [Netlify][nf] and using [Parcel][parcel] for zero configuration deployment. Check the [`package.json`](./package.json) file for details.

The site publishing is composed of two steps:

1. First the data with texts and links is joined with a [Handlebars][handlebars] template producing a `index.html` that does not need any JavaScript code to render.
2. Finally Parcel produces a final `dist` folder with all the needed assets: minified HTML and CSS, images, etc.

Out from the publishing, anytime there are changes in the styles used in the main template, the `css-optimize` script needs to be called to update the `styles.css` file based on the [Tachyons][tachyons] classes used.

The `dist` folder can be hosted anywhere, I use [Netlify][nf] to run the publishing process and hosting but you can use [Github Pages][gp], [Vercel][v], or any other PaaS. 

[handlebars]: https://handlebarsjs.com/
[parcel]: https://v2.parceljs.org/
[tachyons]: http://tachyons.io/
[nf]: http://netlify.com/
[gp]: https://pages.github.com/
[v]: https://vercel.com/
