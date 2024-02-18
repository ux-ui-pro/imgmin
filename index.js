import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const convertImages = async () => {
	// Исходная директория для PNG изображений
	const inputDir = 'input/png';

	// Директории для вывода результатов
	const outputDirs = {
		png: 'output/png',
		jpg: 'output/jpg',
		webp: 'output/webp',
		avif: 'output/avif',
	};

	// Создание выходных директорий, если они не существуют
	for (const dir of Object.values(outputDirs)) {
		fs.mkdirSync(dir, { recursive: true });
	}

	// Получение списка PNG файлов
	const pngFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.png'));

	for (const file of pngFiles) {
		const inputPath = path.join(inputDir, file);
		const baseFilename = file.replace('.png', '');

		// Сохранение в формате PNG
		await sharp(inputPath)
			.png({
				quality: 80,
				compressionLevel: 9,
			})
			.toFile(`${outputDirs.png}/${file}`);

		// Сохранение в формате JPG
		await sharp(inputPath)
			.jpeg({
				quality: 80,
			})
			.toFile(`${outputDirs.jpg}/${baseFilename}.jpg`);

		// Сохранение в формате WebP
		await sharp(inputPath)
			.webp({
				quality: 80,
			})
			.toFile(`${outputDirs.webp}/${baseFilename}.webp`);

		// Сохранение в формате AVIF
		await sharp(inputPath)
			.avif({
				quality: 80,
			})
			.toFile(`${outputDirs.avif}/${baseFilename}.avif`);
	}

	console.log('Image processing completed.');
};

convertImages().catch(console.error);
