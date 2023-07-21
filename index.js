import { apiRoutes, setupDatabase } from 'cmsify-api'
import { applyRelativePathPackages, routeParser } from 'cmsify-utils'
import express from 'express'
const cmsifyCms = (cmsifyConfig, __dirname) => {    
    const app = express()
    app.use(express.static(__dirname + '/dist'))
    
    applyRelativePathPackages({ app, express, __dirname })
    
    setupDatabase()
    routeParser.applyRoutes(app, apiRoutes)

    const port = 8080
    app.listen(port)
    
    console.log('server listening at http://localhost:' + port)
}

export default cmsifyCms