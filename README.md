# albmej.github.io_v2

The 2nd iteration of my personal website to practice some frontend using React + JavaScript

Nice web app to view quick changes: https://reactplayground.vercel.app/

## Install from scratch

WSL2 Installation Guide

We install the latest LTS (Long Term Support) versions of nvm, node, & npm as of 09/2025:
- Node.js: v22.19.0 (JavaScript runtime)
- nvm: v0.40.3 (Node Version Manager)
- npm: 11.6.0 (Node Package Manager)

The following steps install nvm, node, & npm on WSL2 (All latest versoins):
1. Install nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
   1. Check to see if you have the correct version: `nvm -v`
   2. If you already have nvm installed, you'll need to use git to update it from your nvm directory:
      1. Access your nvm directory (mine is in my home directory): `cd ~/.nvm`
      2. Update repo: `git pull origin master`
      3. Checkout the lastest version for good measure: `git checkout v0.40.3` 
2. Install latest LTS version of Node.js: `nvm install --lts`
   1. You can use the `nvm ls` command to see all your installed Node.js versions. Use `node -v` to see the current version.
3. Set nvm to use the latest LTS from those you installed: `nvm use --lts`
4. By default, the npm version installed is tied to the Node.js version you installed. Check the version with: `npm -v`
5. Upgrade to the latest version of npm using: `npm install -g npm@latest`

Now, we make the React app:
1. We then create the React app in place in the root directory: `npm create vite@latest . -- --template react`
2. Install project dependencies: `npm install`
3. Set up a local development server for real-time code changes & instant feedback with:`npm run dev`

## Notes
The command `nvm use --lts` only sets the Node.js version for the current terminal session. When closing it opening a new one, nvm reverts to its configured default version. See: https://stackoverflow.com/questions/24585261/nvm-keeps-forgetting-node-in-new-terminal-session

To avoid this by using an alias to the latest LTS version: `nvm alias default v22.19.0` 

## Related:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site 

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
`nvm alias default v22.19.0` 
`nvm alias default v22.19.0` 

