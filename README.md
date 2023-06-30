# Tea Taster

An application for storing tea tasting notes. This application is the output of the three day Ionic Framework Enterprise training. It is also used as the starting point for some of our other product demos such as the demos for Identity Vault and Auth Connect.

## Building

If you would like to build this application yourself, do the following:

- Clone this repo
- `cd tea-taster-react`
- Do one of the following:
  - **Best**: Make sure you have access to Identity Vault and Auth Connect, and have previously registered an application using the [`ionic enterprise register`](https://ionicframework.com/docs/cli/commands/enterprise-register) command (which generates an .npmrc file). Copy the generated file to the root of this project.
  - **Alternate**: create a branch ([see below](#branching-refresher)) at the appropriate commit or tag prior to Identity Vault and Auth Connect being added to the application.
- `npm i`
- `npm run build`
- `npx cap sync`

At this point, you should be able to either run the application in a dev server via `npx run dev` or on a device using `npx cap open ios` (or `android`).

## Credentials

This application uses a live backend API that requires a login. Unless you have your own credentials, please use the following:

- **email:** `test@ionic.io`
- **password:** `Ion54321`

## The `main` Branch

The HEAD of `main` contains the original Tea Taster app developed during training with the following additions:

- Ongoing dependency updates (remember to include dependency updates in your own sprint planning at least a couple of times per year).
- Using Identity Vault and Auth Connect to provide a complete and secure authentication solution.
- Ongoing bug fixes or minor training related modifications.

The HEAD of `main` should be useful for most exploration, assuming you have access to Identity Vault and Auth Connect.

### Step Commits

Each step of the training has its own commit within the `main` branch. You should be able to use this information to gather a general idea of the various changes that were needed at each step of the development of this application. However, if code needs to be modified to support later changes (such as a significant change to a dependency), that coding change will only be reflected in later commits, so the commits themselves should only be used as a guide as needed.

### Tags

Specific key commits are tagged in case you would like to examine the state of the project at specific key events:

- `end-of-training` - This is the end of the standard three day [training](https://ionic-training-decks.firebaseapp.com/course/framework/tabs/react/page/0) and does not contain any of the extra credit exercises, minor bug fixes, or minor modifications to the training.
- `end-basic-extra-credit` - This commit incorporates all of the extra credit assignments. Each assignment, though, has its own commit(s).
- `identity-vault` - This commit replaces the basic session storage with Identity Vault.
- `auth-connect` - In addition to using Identity Vault for session storage, this commit replaces the basic authentication scheme with using OIDC via Auth Connect for better security.

### Branching Refresher

As a reminder, you can create a branch at any commit or tag as such:

- `git checkout -b new-branch-name tree-ish` (example: `git checkout -b my-new-branch ac2ca2b`)
- `git checkout -b new-branch-name tag-name` (example: `git checkout -b my-new-branch end-of-training`)

If you would like a refresher on other options with `git`, have a look at our [concise `git` guide](https://ionic-training-decks.firebaseapp.com/course/git-workflow).

Happy Coding! 🤓
