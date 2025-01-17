// --------------> Ici on configure la gestion des images avec multer en leur donnant un nom unique, et en donnant un emplacement de stockage (images)

const multer = require("multer")

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png"
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images")
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join("_")
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now() + "." + extension)
    }
})

module.exports = multer({ storage }).single("image")