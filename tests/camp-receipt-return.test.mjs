import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const source=readFileSync(new URL('../heat-camp-checkout.mjs',import.meta.url),'utf8');
const body=source.slice(source.indexOf('function clearRequestId('),source.indexOf('\nfunction showMessage('));
function store(){const data=new Map();return {getItem:key=>data.get(key)||null,setItem:(key,value)=>data.set(key,value),removeItem:key=>data.delete(key)};}
function context(env='production'){
 const c={activeRequestId:'00000000-0000-4000-8000-000000000001',requestStorageKey:'heat-camp-request-id-'+env,expectedEnvironment:env,localStorage:store(),sessionStorage:store()};
 c.localStorage.setItem(c.requestStorageKey,c.activeRequestId);c.sessionStorage.setItem(c.requestStorageKey,c.activeRequestId);
 vm.createContext(c);vm.runInContext(body,c);return c;
}
test('successful registration keeps only its tab-scoped receipt capability before clearing checkout',()=>{
 const c=context();c.clearRequestId('HC27-EXAMPLE');assert.equal(c.activeRequestId,null);assert.equal(c.localStorage.getItem(c.requestStorageKey),null);assert.equal(c.sessionStorage.getItem(c.requestStorageKey),null);
 const saved=JSON.parse(c.sessionStorage.getItem('camp-receipt-HC27-EXAMPLE'));assert.equal(saved.request_id,'00000000-0000-4000-8000-000000000001');assert.ok(saved.expires>Date.now());
});
test('abandoning checkout or sandbox does not retain an official receipt capability',()=>{
 const a=context();a.clearRequestId();assert.equal(a.sessionStorage.getItem('camp-receipt-HC27-EXAMPLE'),null);
 const b=context('test');b.clearRequestId('HC27-EXAMPLE');assert.equal(b.sessionStorage.getItem('camp-receipt-HC27-EXAMPLE'),null);
});
