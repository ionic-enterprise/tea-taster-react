# Tea Taster

An application for storing tea tasting notes. This application is the output of the three day Ionic Framework Enterprise training. It is also used as the starting point for some of our other product demos such as the demos for Identity Vault and Auth Connect.

## Building

If you would like to build this application yourself, do the following:

- Clone this repo
- `cd tea-taster-react`
- `npm i`
- `npm run build`
- `ionic cap sync`

At this point, you should be able to either run the application in a dev server via `ionic start` or on a device using `ionic cap open ios` (or `android`).

## Commits

Each step of the training has its own commit within the `main` branch. You should be able to use this information to gather a general idea of the various changes that were needed at each step of the development of this application. However, if code needs to be modified to support later changes (such as a significant change to a dependency), that coding change will only be reflected in later commits, so the commits themselves should only be used as a guide as needed.

## Credentials

This application uses a live backend API that requires a login. Unless you have your own credentials, please use the following:

- **email:** `test@ionic.io`
- **password:** `Ion54321`

## Branches

- `main` - shows the completed `@ionic/react` three-day Enterprise training project. This project is used as the basis for other branches.
- `feature/identity-vault` - shows a completed Identity Vault implementation for `@ionic/react` applications. This branch also contains a few "demo" features that make it suitable for a customer-facing demo.
- `feature/auth-connect` - shows a completed Auth Connect with Identity Vault implementation for `@ionic/react` applications. This branch is also used as our demo application for using Auth Connect with Identity Vault. This branch is built on top of `feature/identity-vault`.

Each of the branches has a similar structure to `main` whereby each step is signified by its own commit in the branch.

Happy Coding!
