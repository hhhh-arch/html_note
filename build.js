const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['script/sideBar/prosemirror.js'],
  bundle: true,
  outfile: 'dist/prosemirror.bundle.js',
  format: 'iife',
  globalName: 'ProseMirrorBundle',
  platform: 'browser',
  target: 'es2020',
  minify: false,
  sourcemap: true,
}).catch(() => process.exit(1)); 

esbuild.build({
  entryPoints: ['script/mindMap.js'],
  bundle: true,
  outfile: 'dist/mindMap.bundle.js',
  format: 'iife',
  globalName: 'MindMapBundle',
  platform: 'browser',
  target: 'es2020',
  minify: false,
}).catch(() => process.exit(1)); 

esbuild.build({
  entryPoints: ['script/content.js'],
  bundle: true,
  outfile: 'dist/content.bundle.js',
  format: 'iife',
  globalName: 'ContentBundle',
  platform: 'browser',
  target: 'es2020',
  minify: false,
}).catch(() => process.exit(1)); 