const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['script/sideBar/prosemirror.js'],
  bundle: true,
  outfile: 'script/sideBar/prosemirror.bundle.js',
  format: 'iife',
  globalName: 'ProseMirrorBundle',
  platform: 'browser',
  target: 'es2020',
  minify: false,
  sourcemap: true,
}).catch(() => process.exit(1)); 