import multer from 'multer';

const upload = multer({ dest: 'upload/' });
export const uploadMiddlewares = upload.single("file");

export const uploadController = (req, res) => {
  const { file } = req;
  console.log(file);
  res.end();
}
