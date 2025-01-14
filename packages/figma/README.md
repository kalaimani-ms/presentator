Presentator Figma plugin
======================================================================

<p align="center"><img src="https://i.imgur.com/PbMuhCH.png" alt="Plugin screenshots"></p>

Figma plugin to export design frames directly to Presentator.

- [Installing](#installing)
- [Development](#development)


> **OAUTH2 is not supported. The users can authenticate only via email and password ([#178](https://github.com/presentator/presentator/issues/178)).**

> **This repository is READ-ONLY.**
> **Report issues and send pull requests in the [main Presentator repository](https://github.com/presentator/presentator/issues).**

> **Note if you self host Presentator**: *Because Figma plugins run inside a browser environment, CORS policies apply. More info could be found at [Figma - Making Network Requests](https://www.figma.com/plugin-docs/making-network-requests/).*


## Installing

#### From Figma Plugins Page

1. Go to *Plugins > Browse All Plugins* (or visit https://www.figma.com/c/plugin/791989050714284849/Presentator-Export).

2. Search for **Presentator Export** and then click *Install*.

> You can find more details in the [official Figma documentation](https://help.figma.com/article/330-using-plugins#install).

#### Manually

1. Download or clone the plugin repo.

2. Go to *Plugins > Development > Create plugin (+) > Link existing* and select the `manifest.json` file of the plugin.


## Development

> The plugin is built with [Vue.js](https://vuejs.org/) and [Webpack](https://webpack.js.org/).
> It is intended to be used with [Presentator v2.x](https://github.com/presentator/presentator).
> The auto screen replace functionality requires Presentator v2.3+.

1. Download or clone the plugin repo.

2. Run the appropriate console commands:

```bash
# installs dependencies
npm install

# generates development build while watching for file changes
npm run watch

# generates production ready build
npm run build
```
