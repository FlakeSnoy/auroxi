import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '$env/static/private';

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
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

export async function uploadBanner(buffer: Buffer, userId: string): Promise<string> {
	return new Promise((resolve, reject) => {
		cloudinary.uploader.upload_stream(
			{
				folder: 'auroxi/banners',
				public_id: `banner_${userId}`,
				overwrite: true,
				transformation: [{ width: 1200, height: 400, crop: 'fill' }],
				allowed_formats: ['jpg', 'png', 'webp'],
			},
			(error, result) => {
				if (error || !result) return reject(error);
				resolve(result.secure_url);
			}
		).end(buffer);
	});
}