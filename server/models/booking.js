import mongoose, {model} from "mongoose";

const bookingSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  refreshToken: String,
  notifications: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
      message: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      read: {
        type: Boolean,
        default: false
      }
    }
  ],
  appointments: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
      check_in: {
        type: Date,
        required: true
      },
      check_out: {
        type: Date,
        required: true
      },
      total_price: {
        type: Number,
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now
      }
    }
  ],
  services: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
      service_type: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  payments: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
      },
      total: {
        type: Number,
        required: true
      },
      status: {
        type: String
      }
    }
  ]
});

const BookingModel = mongoose.model("Booking", bookingSchema);
export default BookingModel;