const fs = require('fs-extra');
const path = require('path');

// Ensure the public directory exists in dist
fs.ensureDirSync('dist/public');

// Copy the model and textures
fs.copySync('public/robo.gltf', 'dist/robo.gltf');
fs.copySync('public/robo.bin', 'dist/robo.bin');
fs.copySync('public/textures', 'dist/textures');
