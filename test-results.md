## Test results of joining Angular with ArcGIS JS API > 4.11

| App name | Branch | Angular CLI ver. | Angular ver. | ArcGIS JS API | working (0/1) | Comment |
| -------- | ------ | ---------------- | ------------ | ------------- | ------------- | ------- |
| arcgis-ng | master | 1.7.4 | 7.2.2 | 4.11 | true  | @arcgis/webpack-plugin": "4.11.0" |
| arcgis-ng | master | 1.7.4 | 7.2.2 | 4.12 | false | @arcgis/webpack-plugin": "4.12.0" |
| arcgis-ng | master | 7.2.4 | 7.2.6 | 4.12 | false | @arcgis/webpack-plugin": "4.12.0", has to be in separate project |
| angular-cli-esri-map | master | 10.1.4 | 10.1.4 | 4.17 | true | "esri-loader": "^2.16.0" |
| angular-cli-esri-map | arcgis-webpack-angular | 10.1.4 | 10.1.4 | 4.17 | true | @arcgis/webpack-plugin": "^4.17.4" |