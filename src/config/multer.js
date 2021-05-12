const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const storage = {
    local:multer.diskStorage({
        destination:path.resolve(__dirname,"..","..","uploads"),
        filename:(_,file,cb)=>{
            const hash = crypto.randomBytes(6).toString("hex");
            const filename = `${hash}-${file.originalname}`;
            const finalname = filename.trim();
            cb(null,finalname);
        }
    })
}

module.exports = {
    dest:path.resolve(__dirname,"..","..","uploads"),
    storage:storage.local,
    fileFilter: (_,file,cb)=>{
        const allowedMimeTypes = ['image/jpeg','image/jpg',
        'image/png','application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/pdf','application/msword'];
        if(allowedMimeTypes.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error('Tipo de Arquivo não Suportado!'));
        }
    }
}