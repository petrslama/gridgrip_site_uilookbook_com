const puppeteer = require("puppeteer");
const sharp = require("sharp");
const path = require("path");

const url = process.argv[2];
const output = process.argv[3];

if (!url || !output) {
	console.error("Usage: node make_design_image.js <url> <output.jpg>");
	process.exit(1);
}

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.setCookie({
		name: "site",
		value: "uilookbook_com",
		domain: "localhost",
	});

	await page.setViewport({ width: 800, height: 600, deviceScaleFactor: 2 });
	await page.goto(url, { waitUntil: "networkidle2" });

	await page.evaluate(() => {
		// Remove header and footer
		document.querySelector("#header")?.remove();
		document.querySelector("#footer")?.remove();

		// In main, keep only o_hero, remove border-top (fixed header space)
		const main = document.querySelector("#main");
		if (main) {
			main.style.borderTop = "none";
			[...main.children].forEach((el) => {
				if (!el.classList.contains("o_hero")) el.remove();
			});
		}

		// In o_hero, hide the image column (keep in DOM for :first/:last-child selectors)
		const hero = document.querySelector(".o_hero");
		if (hero) {
			const cols = hero.querySelectorAll(":scope > .col-6");
			if (cols.length > 1) cols[1].style.display = "none";

			// Make the remaining col full width, center content
			if (cols[0]) {
				cols[0].style.gridColumn = "1 / -1";
				cols[0].style.paddingLeft = "4rem";
				cols[0].style.paddingRight = "4rem";
			}
		}

		// Fill the viewport
		hero.style.minHeight = "600px";

		// Remove scripts
		document.querySelectorAll("script").forEach((s) => s.remove());
	});

	// Wait for fonts and animations to settle
	await new Promise((r) => setTimeout(r, 1000));

	const outputPath = path.resolve(output);
	const screenshotBuffer = await page.screenshot({
		type: outputPath.endsWith(".png") ? "png" : "jpeg",
		quality: outputPath.endsWith(".png") ? undefined : 90,
	});

	// Resize to 800x600 with Lanczos3
	await sharp(screenshotBuffer)
		.resize(800, 600, { kernel: sharp.kernel.lanczos3 })
		.jpeg({ quality: 90 })
		.toFile(outputPath);

	console.log("Saved:", outputPath);
	await browser.close();
})();
