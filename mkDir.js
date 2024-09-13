import fs from 'fs';
import path from 'path';
import fsPromise from 'fs/promises';


import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const myUploadFolderPath = path.join(
  __dirname,
  `../../public/myuploads`
);

const makeDirectory = async (folderPath) => {
  try {
    if (!fs.existsSync(myUploadFolderPath)) {
      return await fsPromise.mkdir(myUploadFolderPath);
    }
  } catch (error) {
    console.log(error);
  }

  try {
    if (!fs.existsSync(folderPath)) {
      return await fsPromise.mkdir(folderPath);
    }
  } catch (error) {
    console.log(error);
  }
};

export default makeDirectory;
