import imagemin from 'imagemin'
import jpeg from 'imagemin-mozjpeg'
import png from 'imagemin-pngquant'
import webp from 'imagemin-webp'

(async () => {
	const pngOptions = {
		destination: 'output/png',
		plugins: [png()]
	}

	const jpgOptions = {
		destination: 'output/jpg',
		plugins: [jpeg({ quality: 80 })]
	}

	const webpOptions = {
		destination: 'output/webp',
		plugins: [webp({ quality: 80 })]
	}

	await imagemin(['input/png/*.png'], pngOptions)
	await imagemin(['input/jpg/*.jpg'], jpgOptions)
	await imagemin(['input/png/*.png'], webpOptions)
})()