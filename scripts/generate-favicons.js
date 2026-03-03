import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const publicDir = '/vercel/share/v0-project/public';
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const faviconLightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#1a2744"/>
  <text x="16" y="21.5" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="14" fill="#c9a84c" letter-spacing="0.5">SKC</text>
</svg>`;

const faviconDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="6" fill="#c9a84c"/>
  <text x="16" y="21.5" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="14" fill="#1a2744" letter-spacing="0.5">SKC</text>
</svg>`;

const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" rx="34" fill="#1a2744"/>
  <text x="90" y="118" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="76" fill="#c9a84c" letter-spacing="2">SKC</text>
</svg>`;

async function generate() {
  await sharp(Buffer.from(faviconLightSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'icon-light-32x32.png'));
  console.log('Created icon-light-32x32.png');

  await sharp(Buffer.from(faviconDarkSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'icon-dark-32x32.png'));
  console.log('Created icon-dark-32x32.png');

  await sharp(Buffer.from(appleSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-icon.png'));
  console.log('Created apple-icon.png');
}

generate().catch(console.error);
