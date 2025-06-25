// import fs from 'fs'
// import _ from 'lodash'
// import path from 'path'

// export class Config {
//   DELIMITER = '.'
//   private config = {}

//   // return {
//   //     get: get,
//   //     set: set,
//   //     merge: merge,
//   //     argv: argv,
//   //     env: env,
//   //     file: file
//   //   }
//   file(filePath: any) {
//     try {
//       var stats = fs.statSync(filePath)
//       if (stats.isDirectory()) {
//         this.loadDir(filePath)
//       } else {
//         this.loadFile(filePath)
//       }
//     } catch (e) {
//       throw new Error(filePath, e.message)
//     }
//   }

//   private loadDir(configDir) {
//     var files = fs.readdirSync(configDir)
//     files = files.sort()
//     for (var i = 0; i < files.length; i++) {
//       var configFile = path.join(configDir, files[i])
//       if (fs.statSync(configFile).isFile()) {
//         this.loadFile(configFile, true)
//       }
//     }
//   }

//   private loadFile(configFile: any, ignoreErrors: boolean = false) {
//     var fileExtension = path.extname(configFile)
//     if (fileExtension === '.json') {
//       var jsonConfig = JSON.parse(fs.readFileSync(configFile, 'utf8'))
//       _.merge(this.config, jsonConfig)
//       // } else if (fileExtension === '.yml' || fileExtension === '.yaml') {
//       //   var ymlConfig = yaml.safeLoad(fs.readFileSync(configFile, 'utf8'))
//       //   _.merge(config, ymlConfig)
//     } else if (ignoreErrors !== true) {
//       throw new Error(configFile, 'Configuration file has an invalid extension')
//     }
//   }
// }
