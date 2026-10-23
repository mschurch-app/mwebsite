import assert from 'node:assert/strict';import {buildStoryPresentation,resolveStoryPresentation} from '../testimony-layout-plan.mjs';
let checks=0;const media=[{slot:0,kind:'photo'},{slot:1,kind:'video'}];
for(const body of ['。。！'+('測試。'.repeat(300)),'  第一行🙂\r\n\r\n 第二行 😀 ','行\n'.repeat(2900),'長'.repeat(6000),'','禱告！？「感謝。」'.repeat(90)]){
 const plan=buildStoryPresentation(body,media);assert.equal(plan.paragraphs.map(r=>body.slice(r.start,r.end)).join('').replace(/\s/g,''),body.replace(/\s/g,''));checks++;
 assert.deepEqual(resolveStoryPresentation(body,media,plan),plan);checks++;
 assert(JSON.stringify(plan).length<12000);checks++;
}
const original='第一段。\n\n第二段。\n\n第三段。',plan=buildStoryPresentation(original,media);plan.placements[0].style='left';assert.equal(resolveStoryPresentation(original,media,plan).placements[0].style,'left');checks++;
assert.equal(resolveStoryPresentation(original,media,{...plan,paragraphs:[]}).paragraphs.length,3);checks++;
console.log('PASS',checks,'text integrity and saved composition checks');
