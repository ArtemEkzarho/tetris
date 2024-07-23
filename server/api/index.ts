import express from 'express'
import { leaders } from './routes/leaders'

const router = express.Router()

leaders(router)

export default router
