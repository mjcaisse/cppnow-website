# Site Administration

This page contains tools and information useful for editing and building the site itself.


## Installing Site Locally

1. Install RVM - So that specific versions of ruby can be installed for a given directory
2. Install ruby 2.3.1 - Other versions might work fine, but that version must be set in the Gemfile it was chosen to be close to that of the build server
3. Install jekyll 3.4.3
4. Install [Node](https://nodejs.org/en/download/) using the latest Current version
5. Install Gulp globally - `npm install gulp-cli -g`
6. Clone [the repository](ssh://git@stash.cierecloud.com:7999/cpp/website-2.0.git) to a directory of your choice
7. Navigate to that directory
8. Install all NPM dependencies - `npm i`

If you change ruby version, you may need to run `gem update --system` and then continue from step 5.

## Building Site Locally

From the top repository directory...

`gulp watch` may require running `bundle install` and `bundle exec jekyll serve` before it works correctly.

* Run `gulp watch` to build the development version, watch files for changes, and show the site and updates in a browser.
* Run `gulp prod` to build the production version. The output will be placed in the `./dist/` directory.
* Run `gulp dev` to build the development version. The output will be placed in the `./dist/` directory.
* Run `gulp serve` to view the output in the `./dist/` in a browser.


## Talk Data

To modify the data for talk pages (such as [2017 Talks](./src/pages/history/2017/talks/)), modify the data in the appropriate file inside the `./src/_data/` directory, and rebuild the site.


## Image Save Locations

Images used on the site should be stored inside `./src/_assets/img/` in a directory that is logical for its usage.

Images to be used on the announcements pages (blog) should go in the `./src/_assets/img/posts/` directory of the specific year in which the post is used. To maintain future compatibility, do not reuse images across multiple years. Instead, if a particular post for a particular year needs an existing post image, duplicate that image into the needed year's image directory.


## Non-Image Upload Locations

If a file needs to be made available for download that is not an image, such as PDFs or ZIP directories, place them in the `./src/_assets/uploads/` directory using a logical organization.


## Image Compression Rules

When editing images for inclusion on the site, resize raster images such that they are no wider than 1200 pixels.

Use [imageOptim](https://imageoptim.com/) to do compression.

When exporting JPGs from editing programs, export at highest available quality because the final compression step will be done with imageOptim.

When exporting PNGs from editing programs, export using the typical, lossless mode.

### imageOptim Settings

* Enable all compression systems except Guetzli and SVGO.
* Set Optimization Speed to "Insane".
* To compress JPGs for use on the web, set compression to 85% quality.
* To compress PNGs for use on the web, do not use lossy compression, unless you have a specific reason to do so (small numbers of solid colors, for example).

### SVGs

SVG vector images have a fundamentally different way of being stored and rendered. They can be highly compressable, but doing so requires specific knowledge of how each one is constructed. Generally speaking, you can get better compression on SVG files by running them through [SVGOMG](https://jakearchibald.github.io/svgomg/). Prior to running SVGs through SVGOMG, however, one should remove all but the unnecessary attributes, transform styles to attributes, flatten transforms, and focus on repetitive use of paths (which will compress better).

SVGs for the web do not require any tags outside of the &lt;svg&gt; tag, so don't include the doctype or xml prolog tags.

SVGs for the web need only have the attributes xmlns and viewBox in the svg tag in order to display properly (unless you are using the &lt;use&gt; tag, in which case, you also need the xmlns:xlink attribute). If the SVG is going to be inlined into the HTML itself (not the CSS), only the viewBox attribute is needed.

If the SVG is going to be inlined into CSS (such as with background-image), the standard form of the SVG that might have been used via an img tag must be encoded to work properly. Use [this tool](http://yoksel.github.io/url-encoder/) to generate the proper encoding (and CSS).
