# Getting Started with Create React App

A reproducible demo to report absolute imports issue in react 18

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

There seems to be an issue with the way absolute imports are handled in the bootstraped project of `create-react-app` `v.5.0.1`

I have setted up absolute imports, according to the [CRA](https://create-react-app.dev/docs/importing-a-component/#absolute-imports) documentation

Some of the imports works, some of them don't 😢 and I can't figure out why

For example in `./src/App.ts`, the import of the `makeId` function imported from the `utils` folder makes the application crash, but the import of `FakeObjectType` from the `types` folder is compiled successfully


## List of topic's refering to the same issue

- https://stackoverflow.com/questions/68416916/create-react-app-absolute-imports-dont-work-with-yarn-v2-workspaces-typescrip
- https://github.com/facebook/create-react-app/issues/11976
- https://stackoverflow.com/questions/72132090/absolute-imports-issue-in-react-with-typescript
- https://stackoverflow.com/questions/72017719/absolute-imports-arent-working-in-reactjs
- https://stackoverflow.com/questions/73370209/absolute-path-not-working-for-create-react-app-with-typescript

I have tried every solution suggested in another repo, but it didn't fix the issue

## Steps to reproduce the issue

Please open a terminal and paste the following command

```bash
yarn install
yarn start
```

You will see the following error : `Module not found: Error: Can't resolve '@/utils' in ...`