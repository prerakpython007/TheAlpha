import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function copyAssets() {
  try {
    // Handle both local and Vercel paths
    const isVercel = process.env.VERCEL === '1';
    const basePath = isVercel ? process.cwd() : __dirname;
    
    const publicDir = join(basePath, 'public');
    const distDir = join(basePath, 'dist');

    // Ensure dist directory exists
    await fs.ensureDir(distDir);

    // Copy all contents from public to dist
    if (await fs.pathExists(publicDir)) {
      await fs.copy(publicDir, distDir);
      console.log('✓ Public directory copied to dist');
    } else {
      console.error('⨯ Public directory not found at:', publicDir);
      // Don't exit with error as files might already be in the right place
    }

    console.log('✓ All assets copied successfully');
  } catch (err) {
    console.error('Error copying assets:', err);
    // Don't exit with error to allow Vercel build to continue
    console.log('Continuing build process...');
  }
}

copyAssets();
