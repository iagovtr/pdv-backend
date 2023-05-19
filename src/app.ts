import express from "express"
import cors from "cors"
import { APP_PORT } from "./config/env"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(APP_PORT || 4000, () => {
  console.log(`Server listening at PORT: ${APP_PORT || 4000}`)
})
