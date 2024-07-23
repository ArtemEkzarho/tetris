import mongoose, { Document, Schema } from 'mongoose'

interface ILeader extends Document {
  name: string
  score: number
}
// Validator to ensure the string is not empty
const requireStringValidator = {
  validator: (val: string) => {
    const testVal = val.trim()
    return testVal.length > 0
  },
  message: 'Please supply a value for {PATH}',
}

// Create the schema with validation
const leaderSchema: Schema<ILeader> = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: [20, 'Name must be at most 20 characters long'],
    validate: requireStringValidator,
  },
  score: { type: Number, required: true },
})

const Leader = mongoose.model<ILeader>('Leader', leaderSchema)
export default Leader
