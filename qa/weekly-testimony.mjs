import {test} from 'node:test';import assert from 'node:assert/strict';
import {selectWeeklyStories} from '../weekly-testimony.mjs';
const story=(suffix,published_at,extra={})=>({id:'71000000-0000-4000-8000-'+suffix.padStart(12,'0'),title:'合成見證',published_at,...extra});
test('bulletin uses its own seven days in Taiwan time, including Sunday through midnight',()=>{
 const rows=[story('1','2026-11-01T15:59:59Z'),story('2','2026-11-01T16:00:00Z'),story('3','2026-11-08T15:59:59Z'),story('4','2026-11-08T16:00:00Z')];
 assert.deepEqual(selectWeeklyStories(rows,'2026-11-08').map(s=>s.id),[rows[2].id,rows[1].id]);
});
test('this bulletin can pin an approved story instead of a newer public story',()=>{
 const rows=[story('1','2026-10-23T15:00:00Z'),story('2','2026-10-24T03:00:00Z')];
 assert.deepEqual(selectWeeklyStories(rows,'2026-10-25',{selections:{'2026-10-25':[rows[0].id]}}),[rows[0]]);
});
test('a removed pin does not select a different testimony without permission',()=>{
 assert.deepEqual(selectWeeklyStories([story('2','2026-10-24T03:00:00Z')],'2026-10-25',{selections:{'2026-10-25':['71000000-0000-4000-8000-000000000001']}}),[]);
});
test('future weeks use only new public stories, without repeating an old story',()=>{
 assert.deepEqual(selectWeeklyStories([story('1','2026-10-24T03:00:00Z')],'2026-11-01'),[]);
});
test('ignores invalid, pending, duplicate and undated records',()=>{
 const valid=story('1','2026-11-06T01:00:00Z');
 assert.deepEqual(selectWeeklyStories([null,valid,valid,{...valid,id:'javascript:alert(1)'},story('2','invalid'),story('3','2026-11-06T01:00:00Z',{status:'pending'}),story('4','2026-11-06T01:00:00Z',{title:''})],'2026-11-08'),[valid]);
});
test('does not insert M+ stories into a different church or invalid date',()=>{
 const rows=[story('1','2026-11-06T01:00:00Z')];
 for(const date of ['',null,'2026-11-99','2026-02-30'])assert.deepEqual(selectWeeklyStories(rows,date),[]);
 assert.deepEqual(selectWeeklyStories(rows,'2026-11-08',{church:'SHiNE'}),[]);
});
