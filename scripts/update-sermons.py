#!/usr/bin/env python3
from __future__ import annotations
import json, re, urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

CHANNEL_ID="UClE8pjK0fnA-o18VxblIm6A"
OUTPUT=Path(__file__).resolve().parents[1]/"sermons-data.json"
NS={"atom":"http://www.w3.org/2005/Atom","yt":"http://www.youtube.com/xml/schemas/2015"}
MARKERS=("牧師","長老","傳道","院長","福音","使徒","約翰","馬太","馬可","路加","希伯來","詩篇","信息")

def clean(value): return re.sub(r"\s+"," ",value or "").strip()
def parts(raw):
    values=[clean(x) for x in re.split(r"[｜|]",raw) if clean(x)]
    title=values[0] if values else clean(raw)
    scripture=next((x for x in values[1:] if re.search(r"\d",x) and not re.search(r"牧師|長老|傳道|院長",x)),"")
    speaker=next((x for x in reversed(values[1:]) if re.search(r"牧師|長老|傳道|院長",x)),"")
    if len(values)>1 and not scripture and not speaker: title="：".join(values[:2])
    return title,speaker,scripture

url=f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"
request=urllib.request.Request(url,headers={"User-Agent":"MPlusChurchWebsite/1.0"})
with urllib.request.urlopen(request,timeout=30) as response: root=ET.fromstring(response.read())
items=[]
for entry in root.findall("atom:entry",NS):
    raw=clean(entry.findtext("atom:title",default="",namespaces=NS))
    if not any(marker in raw for marker in MARKERS): continue
    video_id=clean(entry.findtext("yt:videoId",default="",namespaces=NS))
    title,speaker,scripture=parts(raw)
    items.append({"id":video_id,"title":title,"speaker":speaker,"scripture":scripture,"published":clean(entry.findtext("atom:published",default="",namespaces=NS))[:10],"url":f"https://www.youtube.com/watch?v={video_id}","thumbnail":f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg"})
if not items: raise SystemExit("找不到主日信息，保留現有資料。")
OUTPUT.write_text(json.dumps({"updated_at":datetime.now(timezone.utc).isoformat(timespec="seconds"),"channel_url":"https://www.youtube.com/@m-church","items":items[:15]},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
