# Parables of Jesus

Parables of Jesus is a free, non-commercial Bible study experience that brings together Jesus' parables, their scripture references, illustrated story sequences, and written reflections on their meaning. The current release is a web application designed to make exploring these teachings straightforward on a browser.

**Author:** Abiodun Ojo  
**Last updated:** October 19, 2026

## What the project offers

- Browse a curated collection of parables and search by title.
- Explore illustrated sequences for each parable.
- Read the associated Bible passage, with King James Version (KJV) and World English Bible (WEB) translation options.
- Read a reflection on the meaning of each parable.
- Switch between light and dark themes.
- Navigate the application through its list, detail, and extras pages.

Bible passage text is requested from [Bible API](https://bible-api.com/) when a parable is opened. An internet connection and availability of that external service are required to load the text.

## Technology

- **React 19** for the user interface.
- **React Router 7** for client-side navigation.
- **Create React App / `react-scripts` 5** for development, testing, and production builds.
- **React Icons** for interface icons and **React Spinners** for loading feedback.
- **Bible API** for retrieving scripture text.
- **CSS** for application styling.

The parable references, reflections, and image paths are maintained in the project source; the image assets are served from the public directory.

## Native apps: planned direction

The web version is a useful way to explore the project today, but it is not the final platform goal. The project is planned to be built and optimized as native applications for **Android and iOS**, with a mobile-first experience tailored to each platform. Native apps are not available yet; timing and feature details have not been finalized.

Potential native features may include:

- Offline access to saved parables, reflections, and scripture passages.
- Bookmarks, reading history, and personal notes.
- Daily parable reminders and reading plans.
- Native sharing, accessibility, and platform-specific navigation.
- Optional audio readings and adjustable reading preferences.

These are prospective ideas, not features currently included in the web application.

## Getting started

### Requirements

- Node.js and Yarn.

### Install and run locally

```bash
git clone https://github.com/phenomenal-softwares/parables-of-jesus.git
cd parables-of-jesus
yarn install
yarn start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

### Available commands

| Command | Description |
| --- | --- |
| `yarn start` | Start the local development server. |
| `yarn test` | Run the test suite in watch mode. |
| `yarn build` | Create an optimized production build in `build/`. |

## Image credits and permissions

The illustrations used in this project are courtesy of [Free Bible Images](https://www.freebibleimages.org/) and its contributing artists and content providers. We are grateful to the image owners and contributors who made these resources available and gave permission for their use on non-commercial platforms.

All image rights remain with their respective copyright owners. Parables of Jesus does not claim ownership of these images, and they must not be treated as freely reusable or used commercially on the basis of their inclusion here. Please consult [Free Bible Images](https://www.freebibleimages.org/) and its [reuse conditions](https://www.freebibleimages.org/help/reuse/) for the applicable usage conditions, contributor information, and access to the original resources.

## Contact

For feedback or suggestions, contact [info@phenomenalproductions.com.ng](mailto:info@phenomenalproductions.com.ng).

## License and use

This project is intended for non-commercial Bible study and devotional use. The images and scripture text are subject to the rights and terms of their respective owners and providers; this statement does not grant permission to reuse those materials.
