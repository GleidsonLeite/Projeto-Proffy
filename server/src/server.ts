import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

// Por padrão, o express não entende a estrutura JSON, para resolver isso:
app.use(cors())
app.use(express.json())
app.use(routes)

//localhost:3333/users

app.listen(3333)