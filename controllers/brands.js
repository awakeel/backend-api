// Find all users
import { Brand } from "../app/models"
exports.getAll = async () => {
  const users = await User.findAll()
  if (!users) {
    throw error("error")
  }
  return users
}
