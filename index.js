import imagemin from 'imagemin'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import webp from 'imagemin-webp'

(async () => {
	await imagemin(['input/png/*.png'], {
		destination: 'output/webp',
		plugins: [
			webp(
				{
					quality: 82
				}
			)
		]
	})
	await imagemin(['input/jpg/*.jpg'], {
		destination: 'output/jpg',
		plugins: [
			mozjpeg(
				{
					quality: 82
				}
			)
		]
	})
	await imagemin(['input/png/*.png'], {
		destination: 'output/png',
		plugins: [
			pngquant()
		]
	})
})()
