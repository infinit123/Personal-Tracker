import {cp,rm,mkdir} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true}); await mkdir('dist',{recursive:true});
for(const p of ['index.html','manifest.webmanifest','sw.js','assets','src']) await cp(p,`dist/${p}`,{recursive:true});
console.log('Build finalizat in dist/');
