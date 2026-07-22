import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname,'..');
const htmlFiles = [];
function walk(dir) { for (const entry of fs.readdirSync(dir,{withFileTypes:true})) { if (entry.name === '.git' || entry.name === 'node_modules') continue; const target=path.join(dir,entry.name); if(entry.isDirectory()) walk(target); else if(entry.name.endsWith('.html')) htmlFiles.push(target); } }
walk(root);
// Root-level .html files other than index.html are legacy build artifacts; public
// directory routes are the canonical pages used by navigation and the sitemap.
const publicHtmlFiles=htmlFiles.filter(file => path.basename(file)==='index.html');
const failures=[];
const canonicals=new Map();
for (const file of publicHtmlFiles) {
  const html=fs.readFileSync(file,'utf8');
  const rel=path.relative(root,file);
  const isLegacyNoindex=/<meta name="robots" content="noindex, follow"/i.test(html);
  const checks=[['one H1',(html.match(/<h1\b/gi)||[]).length===1],['title',/<title>[^<]+<\/title>/i.test(html)],['description',/<meta name="description" content="[^"]+"/i.test(html)],['canonical',/<link rel="canonical" href="https:\/\/neo-icecream\.com\/[^"]*"/i.test(html)]];
  if(rel.startsWith(`insights${path.sep}`)) checks.push(['Open Graph',/<meta property="og:title"/i.test(html)],['Twitter card',/<meta name="twitter:card"/i.test(html)]);
  for(const [name,ok] of checks) if(!ok) failures.push(`${rel}: ${name}`);
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if(canonical && !isLegacyNoindex){ if(canonicals.has(canonical)) failures.push(`${rel}: duplicate canonical also used by ${canonicals.get(canonical)}`); canonicals.set(canonical,rel); }
  const h1=html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  if(!h1) failures.push(`${rel}: empty H1`);
  for(const match of html.matchAll(/href="(\/[^"]*)"/gi)) {
    const href=match[1].split(/[?#]/)[0];
    if(!href || href.startsWith('//')) continue;
    const target=href.endsWith('/') ? path.join(root,href,'index.html') : path.join(root,href);
    if(!fs.existsSync(target)) failures.push(`${rel}: broken internal link ${href}`);
  }
}
const prohibited=['improves gut health','boosts immunity','supports digestion','treats digestion','clinically proven probiotic benefits','guaranteed probiotic benefits','guaranteed CFU','improves microbiome','supports immune system','digestive health benefits'];
for(const file of publicHtmlFiles){const lower=fs.readFileSync(file,'utf8').toLowerCase();for(const claim of prohibited) if(lower.includes(claim.toLowerCase())) failures.push(`${path.relative(root,file)}: prohibited claim "${claim}"`);}
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const file of publicHtmlFiles.filter(f=>path.relative(root,f).startsWith(`insights${path.sep}`))){const rel=path.relative(root,file);if(rel==='insights/index.html')continue;const html=fs.readFileSync(file,'utf8');if(/noindex/i.test(html))continue;const slug=path.basename(path.dirname(file));if(!sitemap.includes(`/insights/${slug}/`)) failures.push(`${rel}: missing from sitemap.xml`);}
if(failures.length){console.error(`SEO validation failed (${failures.length}):\n- ${failures.join('\n- ')}`);process.exit(1);}console.log(`SEO validation passed for ${publicHtmlFiles.length} public HTML pages and ${canonicals.size} canonical URLs.`);
