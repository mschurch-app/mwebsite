import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=f=>readFile(path.join(root,f),'utf8');
const publication=JSON.parse(await read('faith-on-the-way/publication.json'));
assert.equal(publication.mode,'publication-preview');
assert.deepEqual(publication.previewChapters,['chapter-01.html','chapter-02.html','chapter-03.html']);
for(const file of publication.previewChapters){
 const s=await read('faith-on-the-way/'+file);
 assert.match(s,/精選試讀/);assert.match(s,/本章試讀至此/);assert.match(s,/即將出版/);
 assert.ok(!s.includes('<template'));assert.ok(!s.includes('實戰操練'));assert.ok(!s.includes('id="article-source"'));
 const prose=s.match(/<article class="reading-prose"[^>]*>([\s\S]*?)<\/article>/)?.[1];assert.ok(prose);
 const chars=prose.replace(/<[^>]+>/g,'').replace(/\s/g,'').length;
 assert.ok(chars>400&&chars<1100,`${file} excerpt length ${chars}`);
}
for(const file of [...Array.from({length:9},(_,i)=>`chapter-${String(i+4).padStart(2,'0')}.html`),'epilogue.html']){
 const s=await read('faith-on-the-way/'+file);
 assert.ok(!s.includes('article-source'));assert.ok(!s.includes('實戰操練'));assert.ok(!s.includes('reading-prose'));assert.ok(s.includes('完整內容即將出版'));
}
for(const name of await readdir(path.join(root,'docs/reports'))){assert.ok(!name.includes('faith'),`Archived book reports must stay outside public site: ${name}`);}
for(const file of publication.pages){
 const s=await read('faith-on-the-way/'+file);
 for(const match of s.matchAll(/href="(chapter-\d+\.html|epilogue\.html)"/g))assert.ok(publication.previewChapters.includes(match[1]));
 assert.equal((s.match(/<h1\b/g)||[]).length,1);assert.ok(!s.includes('faith-in-action-complete-review.pdf'));
}
console.log(JSON.stringify({previewLengths:'400–1100 characters',fullArticlesWithdrawn:10,privateReportsRemoved:true,linksLimitedToAvailablePreviews:true,privateBookNotUploaded:true}));
