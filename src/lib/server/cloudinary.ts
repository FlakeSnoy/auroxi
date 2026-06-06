import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadAvatar(buffer: Buffer, userId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: 'auroxi/avatars',
        public_id: `avatar_${userId}`,
        overwrite: true,
        transformation: [{ width: 256, height: 256, crop: 'fill', gravity: 'face' }],
        allowed_formats: ['jpg', 'png', 'webp'],
      },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result.secure_url);
      }
    ).end(buffer);
  });
}