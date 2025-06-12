import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const publicDir = resolve(__dirname, 'public');
const distDir = resolve(__dirname, 'dist');

try {
  // Ensure the dist directory exists
  await fs.ensureDir(distDir);

  // Check if files exist before copying
  if (await fs.pathExists(resolve(publicDir, 'robo.gltf'))) {
    await fs.copy(resolve(publicDir, 'robo.gltf'), resolve(distDir, 'robo.gltf'));
    console.log('Copied robo.gltf');
  } else {
    console.error('robo.gltf not found in public directory');
  }

  if (await fs.pathExists(resolve(publicDir, 'robo.bin'))) {
    await fs.copy(resolve(publicDir, 'robo.bin'), resolve(distDir, 'robo.bin'));
    console.log('Copied robo.bin');
  } else {
    console.error('robo.bin not found in public directory');
  }

  if (await fs.pathExists(resolve(publicDir, 'textures'))) {
    await fs.copy(resolve(publicDir, 'textures'), resolve(distDir, 'textures'));
    console.log('Copied textures directory');
  } else {
    console.error('textures directory not found in public directory');
  }
} catch (err) {
  console.error('Error during file copying:', err);
  process.exit(1);
}
