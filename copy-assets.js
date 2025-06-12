import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure the public directory exists in dist
await fs.ensureDir('dist');

// Copy the model and textures
await fs.copy('public/robo.gltf', 'dist/robo.gltf');
await fs.copy('public/robo.bin', 'dist/robo.bin');
await fs.copy('public/textures', 'dist/textures');
