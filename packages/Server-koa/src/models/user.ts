import Mongoose from 'mongoose'

export interface IUser extends Mongoose.Document {
  uid: number
  username: string
  password: string
  address: string
  balance: number
  permission: number
}

// FIXME: permission 的设置方式

const UserSchema = new Mongoose.Schema(
  {
    uid: {
      type: Number,
      // unique: true,
      required: true
    },
    username: {
      type: String,
      // unique  : true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    address: String,
    balance: Number,
    permission: {
      type: Number,
      required: true,
      default: 2
    }
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
  }
)

UserSchema.statics.findByName = function(name: string) {
  return new Promise((resolve, reject) => {
    this.find({ username: name }, (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

export default Mongoose.model<IUser>('User', UserSchema)
