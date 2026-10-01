'use strict';
const fs=require('node:fs/promises'),path=require('node:path');
const signature=f=>`${f.size}:${f.mtime}`;
class ArrivalTracker{
 constructor(settleMs=1500){this.settleMs=settleMs;this.published=new Map();this.pending=new Map();}
 seed(files){this.published=new Map(files.map(f=>[f.path,signature(f)]));this.pending.clear();}
 observe(files,now){const present=new Set(files.map(f=>f.path)),ready=[],removed=[];for(const p of this.published.keys())if(!present.has(p)){removed.push(p);}for(const p of this.pending.keys())if(!present.has(p))this.pending.delete(p);for(const f of files){const sig=signature(f);if(this.published.get(f.path)===sig){this.pending.delete(f.path);continue;}let pending=this.pending.get(f.path);if(!pending||pending.sig!==sig){pending={sig,since:now};this.pending.set(f.path,pending);}if(f.size>0&&now-pending.since>=this.settleMs)ready.push(f);}return {ready,removed,pending:this.pending.size};}
 commit(f){this.published.set(f.path,signature(f));this.pending.delete(f.path);}
}
async function readable(f){let h;try{h=await fs.open(f.path,'r');const s=await h.stat();if(s.size!==f.size||s.mtimeMs!==f.mtime||!s.isFile())return false;if(/\.jpe?g$/i.test(f.path)){if(s.size<4)return false;const first=Buffer.alloc(2),end=Buffer.alloc(Math.min(65536,s.size));await h.read(first,0,2,0);await h.read(end,0,end.length,s.size-end.length);if(first[0]!==255||first[1]!==216||end.lastIndexOf(Buffer.from([255,217]))<0)return false;}return true;}catch{return false;}finally{await h?.close();}}
function studentStem(settings,number){const clean=s=>String(s||'').trim().normalize('NFC').replace(/\s+/g,'_');const id=clean(settings.id),name=clean(settings.name);if(!id||!name)throw Error('Nhập mã sinh viên và họ tên trước.');if(!Number.isSafeInteger(number)||number<1||number>99999999)throw Error('Số thứ tự phải từ 1 đến 99999999.');const stem=`${id}_${name}_${String(number).padStart(4,'0')}`;require('./core.cjs').validName(stem);return stem;}
module.exports={ArrivalTracker,readable,studentStem};
