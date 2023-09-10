import imagemin from 'imagemin'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import webp from 'imagemin-webp'

(async () => {
	const pngOpt = {
		destination: 'output/png',
		plugins: [pngquant()]
	}

	const jpgOpt = {
		destination: 'output/jpg',
		plugins: [mozjpeg({quality: 80})]
	}

	const webpOpt = {
		destination: 'output/webp',
		plugins: [webp({quality: 80})]
	}

	await imagemin(['input/png/*.png'], pngOpt)
	await imagemin(['input/jpg/*.jpg'], jpgOpt)
	await imagemin(['input/png/*.png'], webpOpt)
})()