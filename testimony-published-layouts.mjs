// Composition metadata for an already approved public story. No original text or media is copied here.
// Ignore this edit if the approved text or attachments change.
const editorial={
  "id": "4fe60b38-2fb2-4187-992d-0df2c894fb4d",
  "fingerprint": "e69f8ad33bcfe18f10e0a49c4d3cb796a77902b377436f9576e684de36d06ff2",
  "coverSlot": 6,
  "order": [
    5,
    2,
    0,
    1,
    3,
    6,
    4
  ],
  "presentation": {
    "version": 1,
    "paragraphs": [
      {
        "start": 0,
        "end": 186
      },
      {
        "start": 188,
        "end": 387
      },
      {
        "start": 388,
        "end": 485
      },
      {
        "start": 486,
        "end": 520
      },
      {
        "start": 521,
        "end": 670
      },
      {
        "start": 671,
        "end": 783
      },
      {
        "start": 784,
        "end": 837
      },
      {
        "start": 838,
        "end": 994
      },
      {
        "start": 994,
        "end": 1151
      },
      {
        "start": 1152,
        "end": 1165
      },
      {
        "start": 1166,
        "end": 1189
      },
      {
        "start": 1190,
        "end": 1280
      }
    ],
    "placements": [
      {
        "slot": 5,
        "after": 0,
        "style": "right"
      },
      {
        "slot": 2,
        "after": 1,
        "style": "left"
      },
      {
        "slot": 0,
        "after": 4,
        "style": "wide"
      },
      {
        "slot": 1,
        "after": 4,
        "style": "wide"
      },
      {
        "slot": 3,
        "after": 5,
        "style": "wide"
      },
      {
        "slot": 6,
        "after": 6,
        "style": "right"
      },
      {
        "slot": 4,
        "after": 8,
        "style": "wide"
      }
    ]
  }
};
export async function applyPublishedLayout(story){
 if(story.id!==editorial.id)return story;
 try{const source=JSON.stringify([story.body,story.media.map(m=>[m.slot,m.kind])]),digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(source));
  const fingerprint=[...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('');if(fingerprint!==editorial.fingerprint)return story;
  return {...story,coverSlot:editorial.coverSlot,media:editorial.order.map(slot=>story.media.find(m=>m.slot===slot)),presentation:editorial.presentation};
 }catch{return story;}
}
