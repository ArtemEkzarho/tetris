import { Request, Response, Router } from 'express'
import Leader from '../../models/leader'

export const leaders = (router: Router): void => {
  // Get all leaders
  router.get('/leaders', async (req: Request, res: Response) => {
    try {
      const leaders = await Leader.find().sort({ score: -1 }).limit(15)
      res.status(200).json(leaders)
    } catch (err) {
      res.status(400).json(err)
    }
  })

  // Create a new leader
  router.post('/leaders', async (req: Request, res: Response) => {
    try {
      // Check if a leader with the same name already exists
      const existingLeader = await Leader.findOne({ name: req.body.name })

      if (existingLeader) {
        // Overwrite the existing leader
        existingLeader.set(req.body)
        const updatedLeader = await existingLeader.save()
        return res.status(200).json(updatedLeader)
      }

      // Create a new leader
      const leader = new Leader(req.body)
      const savedLeader = await leader.save()
      res.status(201).json(savedLeader)
    } catch (err) {
      res.status(400).json(err)
    }
  })
}
