import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './storage/imgs')
    },
    filename: function (req, file, cb) {
        const ext = path.parse(file.originalname).ext.toLowerCase();
        cb(null, file.originalname);
    }
})

const upload = multer({ storage })

export default upload;