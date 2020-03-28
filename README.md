## Customize

* `npm install`
* Create two postgres databases (`picture-viewer` should match the `name`
  parameter in `package.json`):

```
export MY_APP_NAME=picture-viewer
createdb $MY_APP_NAME
createdb $MY_APP_NAME-test
```

* By default, running `npm test` will use `picture-viewer-test`, while
  regular development uses `picture-viewer`

## Start

Running `npm run start-dev` will make great things happen!

in the browser type `localhost:8080` to open the app

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.
