# TODO

## Release v2.0.0

### Blocking issues Julian

* [x] Fix GitLab Pages build http://bytecode.pages.bytedev.io/bytecode-website/
* [x] Make sure all forms are still working // api has to be fixed.
* [x] Add PWA functionality (see gatsby-config.js file) // docs: https://www.gatsbyjs.org/docs/progressive-web-app/
    * [x] Manifest
    * [x] Caching
    * [x] Offline mode?
* [x] Update documentation from Next to Gatsby
* [x] Convert all existing blogposts to MDX
* [x] Make sure all images are loading correctly for blogposts, including header img
* [x] On the insights page, text should not be underlined
* [ ] Fix all pictures on Over page
* [ ] Fix all pictures on Contact page
* [x] Fix Chrome(/Chromium) Lighthouse audit issues:
    * [x] [id] attributes on the page are not unique
    * [x] Background and foreground colors do not have a sufficient contrast ratio. (Richard issue)
    * [x] Links to cross-origin destinations are unsafe
    * [x] Make sure everything is 80%+, best 90%+

## Release TBD

* [ ] Add RSS feed functionality
* [ ] Where possible, abstract the Gatsby API to make future framework switches less painful
* [ ] Research page transitions // Can be done with: https://transitionlink.tylerbarnes.ca/docs/transitionlink/ looks really obstrusive tho, maybe good for a short responsive animation
* [ ] Add Typescript support
* [ ] Update Styled Components
