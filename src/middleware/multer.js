const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "D:/Project/Flutter/booking_app/assets/uploads",
      "D:/Project/Flutter/coreui-free-react-admin-template/public/assets/uploads"
    );
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { files: 10 },
});

module.exports = upload;
