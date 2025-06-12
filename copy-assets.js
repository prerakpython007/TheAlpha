import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyAssets() {
  try {
    const publicDir = resolve(__dirname, 'public');
    const distDir = resolve(__dirname, 'dist');

    // Ensure dist directory exists
    await fs.ensureDir(distDir);

    // Copy GLTF model and its binary
    await fs.copy(resolve(publicDir, 'robo.gltf'), resolve(distDir, 'robo.gltf'));
    await fs.copy(resolve(publicDir, 'robo.bin'), resolve(distDir, 'robo.bin'));

    // Copy textures directory
    const texturesSource = resolve(publicDir, 'textures');
    const texturesDest = resolve(distDir, 'textures');
    
    if (await fs.pathExists(texturesSource)) {
      await fs.copy(texturesSource, texturesDest);
      console.log('✓ Textures copied successfully');
    } else {
      console.error('⨯ Textures directory not found');
    }

    console.log('✓ All assets copied successfully');
  } catch (err) {
    console.error('Error copying assets:', err);
    process.exit(1);
  }
}

copyAssets();
