const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'cjs',
  outfile: 'index.js',
  external: ['react', 'react-dom', 'styled-components', 'prismjs', 'react-icons'],
  jsx: 'automatic',
  loader: { '.js': 'jsx' }
}).catch(() => process.exit(1));
