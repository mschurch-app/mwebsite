import {resolveStoryIllustrations} from './testimony-illustrations.mjs?v=20261024-story2';
export const WEBSITE='https://mchurch.online';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function validateStoryId(id){if(!UUID.test(String(id)))throw Error('invalid_story');return id;}
export function selectStoryImage(story){
 const photos=(story.media||[]).filter(m=>m.kind==='photo'&&typeof m.url==='string'&&/^https?:\/\//.test(m.url));
 const photo=photos.find(m=>m.slot===story.coverSlot)||photos[0];if(photo)return {url:photo.url,alt:'這篇見證內的照片',kind:'photo',slot:photo.slot};
 const illustration=resolveStoryIllustrations(story.presentation)[0];return illustration?{url:new URL(illustration.url,WEBSITE+'/').href,alt:illustration.alt,kind:'illustration',caption:illustration.caption}:null;
}
export async function shareFingerprint(story){
 const value=JSON.stringify([story.id,story.title,story.display_name,story.body,selectStoryImage(story)?.url||null]);
 const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value));return [...new Uint8Array(bytes)].map(x=>x.toString(16).padStart(2,'0')).join('').slice(0,16);
}
export function sharePageUrl(id,revision){validateStoryId(id);if(!/^[0-9a-f]{16}$/.test(revision))throw Error('invalid_revision');return WEBSITE+'/testimonies/'+id+'.html?v='+revision;}
