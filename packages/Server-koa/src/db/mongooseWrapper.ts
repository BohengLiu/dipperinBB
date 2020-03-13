import Mongoose, { connect, connection as db } from 'mongoose'
import UserMod, { IUser } from '../models/user'

interface Database {
  user: Mongoose.Model<IUser>
}

export default function connectMongoDB(uri: string): Database {
  db.on('error', err => {
    console.error('%s', err)
  })
    .on('close', () => console.log('Database connection closed.'))
    .on('disconnected', () => console.log('Database disconnected.'))
    .on('connected', () => console.log('Database open successfully.'))

  connect(uri,{ useNewUrlParser: true, useFindAndModify: false})

  return {
    user: UserMod
  }
}
