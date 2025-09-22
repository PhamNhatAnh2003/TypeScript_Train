import models from "../models/index.js";
import { createUserService } from "../services/userServices/createUserService.js";

export const createUser = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const userData = req.body;
    const user = await createUserService(userData);

    return res.status(201).json({
      success: true,
      message: "Tạo thành công người dùng",
      user,
    });
  } catch (error) {
    console.error("Lỗi tạo user:", error.message);

    // Nếu là lỗi username tồn tại
    if (error.message.includes("đã tồn tại")) {
      return res.status(409).json({
        // 409 Conflict
        success: false,
        message: error.message,
      });
    }

    // Lỗi khác
    return res.status(500).json({
      success: false,
      message: "Tạo người dùng thất bại",
      error: error.message,
    });
  }
};
