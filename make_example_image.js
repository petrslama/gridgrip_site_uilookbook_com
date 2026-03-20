const puppeteer = require("puppeteer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const input = process.argv[2];
const output = process.argv[3];

if (!input || !output) {
	console.error("Usage: node make_example_image.js <file.html|url> <output.jpg>");
	console.error("  node make_example_image.js assets/gallery/retro-and-nostalgia/70s-design-good-harvest-house.html assets/gallery/retro-and-nostalgia/70s-design-good-harvest-house.jpg");
	console.error("  node make_example_image.js assets/gallery/retro-and-nostalgia/*.html   (auto-names .jpg next to .html)");
	process.exit(1);
}

(async () => {
	const browser = await puppeteer.launch();

	// Resolve input: URL or local file path
	let url;
	if (input.startsWith("http")) {
		url = input;
	} else {
		const absPath = path.resolve(input);
		if (!fs.existsSync(absPath)) {
			console.error("File not found:", absPath);
			await browser.close();
			process.exit(1);
		}
		url = "file://" + absPath;
	}

	// Resolve output path
	const outputPath = path.resolve(output);

	const page = await browser.newPage();
	await page.setViewport({ width: 1200, height: 900, deviceScaleFactor: 2 });
	await page.goto(url, { waitUntil: "networkidle2" });

	// Wait for fonts and animations to settle
	await new Promise((r) => setTimeout(r, 1500));

	const screenshotBuffer = await page.screenshot({
		type: "jpeg",
		quality: 90,
	});

	// Resize to 800x600 with Lanczos3
	await sharp(screenshotBuffer)
		.resize(800, 600, { kernel: sharp.kernel.lanczos3 })
		.jpeg({ quality: 90 })
		.toFile(outputPath);

	console.log("Saved:", outputPath);
	await browser.close();
})();
