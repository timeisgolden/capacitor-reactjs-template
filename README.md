# capacitor-reactjs-template

This template should help get you started developing with React Ionic and Capacitor using Vite.

Updated 8/16/22

## Getting Live Reload To Work In You Vite Ionic Project

I dont use Live reload that often, but this is a manual approach to get it going with the Vite project

**First Start Your Server**
```
devteam@DevTeams-iMac capacitor-reactjs-template % npm run dev

> my-react-app@0.0.0 dev
> vite


  VITE v3.0.7  ready in 1856 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```


**Then modify `capacitor.config.ts`** using the address the server is running on from the command above
```
const config: CapacitorConfig = {
  appId: 'my.react.app',
  appName: 'my-react-app',
  webDir: 'dist',
  bundledWebRuntime: false,
  server : {
    "url" : "http://192.168.0.156:8100/"  //<= use address the server is running on locally
  }
};
```
**And finally deploy your app to the device**
```
devteam@DevTeams-iMac capacitor-reactjs-template % npx cap copy ios
✔ Copying web assets from dist to ios/App/App/public in 43.41ms
✔ Creating capacitor.config.json in ios/App/App in 1.12ms
✔ copy ios in 146.60ms
devteam@DevTeams-iMac capacitor-reactjs-template % npx cap open ios
✔ Opening the Xcode workspace... in 3.01s
```
Now your mobile app is pointing to the local server running and you basically have live-reload working. I am certain there is another approach, but like I said I don't use it often enough. Hopefully, this gets you moving

**REMEMBER**
remove the edit to the `capacitor.config.ts` before deploying to production otherwise the app will be looking for the local server to run the app !!