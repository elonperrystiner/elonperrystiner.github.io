'use strict';
function assetSource(filename){return window.portfolioAssets?.[filename]??('assets/'+filename);}
const projects=[{"id": "teg", "title": "The Emancipation Game", "category": "Learning × AI", "images": ["teg/walk-to-school.png", "teg/classroom-resources.png", "teg/textbook-allocation.png"], "copy": "With The Emancipation Game, I got to work on much more of the experience myself: the story, the learning tasks, the characters, and the specifications developers would build from. I also managed the work around getting it into a school.", "note": "I joined in June 2026 as Product Manager and Learning Designer and was promoted to Chief of Staff.", "contribution": "I wrote scripts and dialogue, made assets, and designed missions and assessments. I worked directly in Convai and ElevenLabs and tested prompts for character interactions, scoring, and feedback. I also wrote UX and technical specifications, designed and led AI Praxis training, created the classroom implementation plan, and managed developers, specialists, vendors, and QA. Engineers implemented the systems, with some backend specifications written under my direction.", "media": [{"type": "image", "file": "teg/walk-to-school.png", "thumbnail": "teg/walk-to-school-thumb.jpg", "alt": "The Emancipation Game: Day 1, walk to school"}, {"type": "image", "file": "teg/classroom-resources.png", "thumbnail": "teg/classroom-resources-thumb.jpg", "alt": "The Emancipation Game: allocate resources to classrooms"}, {"type": "image", "file": "teg/textbook-allocation.png", "thumbnail": "teg/textbook-allocation-thumb.jpg", "alt": "The Emancipation Game: classroom textbook-allocation task"}], "cover": "teg/walk-to-school-thumb.jpg", "trailer": "https://www.emancipationgroup.io/game"}, {"id": "voice", "title": "Identity-forward Voice Design", "category": "Voice UX × Research", "images": ["wix/voice-01.png", "wix/voice-02.png", "wix/voice-06.png", "wix/voice-08.png"], "copy": "I started this research with my own voice, including the ways it changes depending on who I’m talking to. I wanted to know what an AI voice tool would make of that, and whether its design gave someone enough room to describe themselves.", "note": "My graduate research at Teachers College, supported by the NSF Graduate Research Fellowship.", "contribution": "I developed a four-category acoustic profile and tested variations in ElevenLabs. I then used the experiments to redesign the onboarding, starting with questions about the person before asking them to pick a voice. The images and recordings here show that work.", "media": [{"type": "image", "file": "wix/voice-01.png", "alt": "Redesigned identity-first voice onboarding screens", "thumbnail": "wix/voice-01-thumb.jpg"}, {"type": "image", "file": "wix/voice-02.png", "alt": "Four-category identity-forward acoustic profile framework", "thumbnail": "wix/voice-02-thumb.jpg"}, {"type": "video", "file": "wix/voice-03.mp4", "alt": "Phase III: professional voice clone sample", "thumbnail": "wix/voice-03-poster-0-thumb.jpg", "poster": "wix/voice-03-poster-0.jpg"}, {"type": "video", "file": "wix/voice-04.mp4", "alt": "Phase IV: vocal adaptivity in an AI-generated podcast", "thumbnail": "wix/voice-04-poster-0-thumb.jpg", "poster": "wix/voice-04-poster-0.jpg"}, {"type": "video", "file": "wix/voice-05.mp4", "alt": "Phase II: voice prompting experiments and iteration notes", "thumbnail": "wix/voice-05-poster-0-thumb.jpg", "poster": "wix/voice-05-poster-0.jpg"}, {"type": "image", "file": "wix/voice-06.png", "alt": "Timeline of AI speech generation platforms", "thumbnail": "wix/voice-06-thumb.jpg"}, {"type": "video", "file": "wix/voice-07.mp4", "alt": "AI voice library and voice-description exploration", "thumbnail": "wix/voice-07-poster-0-thumb.jpg", "poster": "wix/voice-07-poster-0.jpg"}, {"type": "image", "file": "wix/voice-08.png", "alt": "Identity-forward Voice Design research presentation cover", "thumbnail": "wix/voice-08-thumb.jpg"}], "cover": "wix/voice-01-thumb.jpg"}, {"id": "natorix", "title": "Natorix / THEO", "category": "UX × Product strategy", "images": ["wix/natorix-01.png"], "copy": "At THEO, now Natorix, I designed the MVP UX for an AI tutoring product. I had to think about the student using it and the educator supporting them, and work out how those two sides would fit together.", "note": "2025. I can share this public diagram; the detailed internal flows are under NDA.", "contribution": "I worked out the learning flows and the student and educator interfaces, then mapped a three-year roadmap for how the product could grow. I worked with engineering and curriculum colleagues on what the AI would do during a lesson and what they would need from me to build it.", "media": [{"type": "image", "file": "wix/natorix-01.png", "alt": "Public THEO UX architecture illustration with three connected flows", "thumbnail": "wix/natorix-01-thumb.jpg"}], "cover": "wix/natorix-01-thumb.jpg"}, {"id": "pbs", "title": "PBS KIDS", "category": "Educational media", "images": ["pbs/phoebe-and-jay.png", "pbs/tiny-time-travel-set.jpg", "pbs/tiny-time-travel.jpg", "pbs/xavier-riddle-museum.jpg"], "copy": "I spent several years at PBS KIDS overseeing $5M+ in multiplatform properties funded through DOE Ready to Learn grants. I worked on the creative side and was also responsible for the budgets, grant requirements, and relationships that helped the productions get made.", "note": "I joined as a Content Associate and was promoted to Senior Content Development Associate, 2021–2025.", "contribution": "I worked with producers and research teams on the content, oversaw fiscal and federal requirements, and ran competitive RFP procurement. I also managed relationships across PBS, CPB, and 330+ member stations. The properties reached 13M+ monthly users, so the distribution and curriculum requirements mattered just as much as the creative decisions.", "media": [{"type": "image", "file": "pbs/phoebe-and-jay.png", "thumbnail": "pbs/phoebe-and-jay-thumb.jpg", "alt": "Phoebe & Jay promotional artwork"}, {"type": "image", "file": "pbs/tiny-time-travel-set.jpg", "thumbnail": "pbs/tiny-time-travel-set-thumb.jpg", "alt": "Behind-the-scenes group photo on the Tiny Time Travel set", "fit": "cover", "position": "50% 30%"}, {"type": "image", "file": "pbs/tiny-time-travel.jpg", "thumbnail": "pbs/tiny-time-travel-thumb.jpg", "alt": "Tiny Time Travel promotional artwork"}, {"type": "image", "file": "pbs/xavier-riddle-museum.jpg", "thumbnail": "pbs/xavier-riddle-museum-thumb.jpg", "alt": "Xavier Riddle and the Secret Museum promotional artwork"}], "cover": "pbs/phoebe-and-jay-thumb.jpg"}, {"id": "meshed", "title": "MeshEd", "category": "Curriculum × Learning", "images": ["wix/meshed-01.png", "wix/meshed-02.png", "wix/meshed-03.png", "wix/meshed-04.png", "wix/meshed-05.png"], "copy": "At MeshEd, I worked on digital arts courses, including Documentary Filmmaking. I helped turn creative projects into activities students could get started on, and tested where AI might be useful in that process.", "note": "I started as an AI and Education Intern and became a Curriculum and AI Advising Consultant, 2024–2026.", "contribution": "I redesigned the Documentary Filmmaking curriculum and piloted AI-assisted activities. What we learned informed the longer-term course design and policies for using the tools. I also developed the organization’s AI integration blueprint and worked on EdTech partnerships. MeshEd’s programs serve 17,000+ students; that number describes the programs overall, rather than use of these particular activities.", "media": [{"type": "image", "file": "wix/meshed-01.png", "alt": "My Voice Is classroom activity", "thumbnail": "wix/meshed-01-thumb.jpg"}, {"type": "image", "file": "wix/meshed-02.png", "alt": "Podcast vision board and tone brainstorming activity", "thumbnail": "wix/meshed-02-thumb.jpg"}, {"type": "image", "file": "wix/meshed-03.png", "alt": "Digital safety and responsible AI prompting lesson", "thumbnail": "wix/meshed-03-thumb.jpg"}, {"type": "image", "file": "wix/meshed-04.png", "alt": "MeshEd curriculum development and research team", "thumbnail": "wix/meshed-04-thumb.jpg"}, {"type": "image", "file": "wix/meshed-05.png", "alt": "Soundscape tutorial with Elon P.", "thumbnail": "wix/meshed-05-thumb.jpg"}], "cover": "wix/meshed-01-thumb.jpg"}, {"id": "ceres", "title": "Ceres", "category": "Product × Visual design", "images": ["wix/ceres-01.png", "wix/ceres-02.png", "wix/ceres-03.png", "wix/ceres-04.png", "wix/ceres-05.png", "wix/ceres-06.png", "wix/ceres-07.png", "wix/ceres-08.png", "wix/ceres-09.png"], "copy": "My best friend is also my personal astrologer, so when he had an idea for a pocket astrologer, I wanted to be involved. I got to spend time on the brand and the experience without it being schoolwork or work-work.", "note": "He led the programming. I worked on the brand, UX/UI, and product strategy.", "contribution": "I designed the dashboard and conversational interface and worked out features like Decision Windows and Field Notes. I also thought through how someone’s question should get to the right astrological tools. I wanted it to be useful to people who knew astrology well and approachable for people who were still figuring it out.", "media": [{"type": "image", "file": "wix/ceres-01.png", "alt": "Ceres dashboard: Your day, defined by the Cosmos", "thumbnail": "wix/ceres-01-thumb.jpg"}, {"type": "image", "file": "wix/ceres-02.png", "alt": "Ceres conversational interface: Ask the stars. Get an answer.", "thumbnail": "wix/ceres-02-thumb.jpg"}, {"type": "image", "file": "wix/ceres-03.png", "alt": "Ceres chart lenses: Switch views. Uncover truths.", "thumbnail": "wix/ceres-03-thumb.jpg"}, {"type": "image", "file": "wix/ceres-04.png", "alt": "Ceres astrocartography: Find where you are meant to flourish", "thumbnail": "wix/ceres-04-thumb.jpg"}, {"type": "image", "file": "wix/ceres-05.png", "alt": "Ceres solar return chart: Embrace the transformation", "thumbnail": "wix/ceres-05-thumb.jpg"}, {"type": "image", "file": "wix/ceres-06.png", "alt": "Ceres decision windows: Know when to make your move", "thumbnail": "wix/ceres-06-thumb.jpg"}, {"type": "image", "file": "wix/ceres-07.png", "alt": "Ceres Field Notes: Identify the transit behind the feeling", "thumbnail": "wix/ceres-07-thumb.jpg"}, {"type": "image", "file": "wix/ceres-08.png", "alt": "Ceres predictions: Understand what lies ahead", "thumbnail": "wix/ceres-08-thumb.jpg"}, {"type": "image", "file": "wix/ceres-09.png", "alt": "Ceres product introduction: Go beyond your chart. Build context.", "thumbnail": "wix/ceres-09-thumb.jpg"}], "cover": "wix/ceres-01-thumb.jpg"}, {"id": "fitness", "title": "Fitness App", "category": "Code × Class project", "copy": "This was a small programming-class project where I made an exercise app that could query data. I used a lot of AI-assisted coding and kept adjusting it as I worked out what I wanted it to do.", "note": "2025, at Teachers College.", "contribution": "I built the interface and worked on getting it to query exercise data. It was one of the projects that made me more comfortable trying things in code, even when I didn’t yet know how I was going to get them to work.", "media": [{"type": "image", "file": "wix/fitness-01.png", "alt": "Fitness app showing exercise selection and achievements", "thumbnail": "wix/fitness-01-thumb.jpg"}], "images": ["wix/fitness-01.png"], "cover": "wix/fitness-01-thumb.jpg"}, {"id": "prep", "title": "Prep & Plate", "category": "Code × UX", "copy": "For a programming course, my team made an app that suggests recipes from the ingredients you already have. I helped work out the screens and how the app would work, then contributed to the code.", "note": "2024, at Teachers College. This was a team project.", "contribution": "I made wireframes, helped write the project documentation, and wrote some of the source code with my teammates. You can see the early screens, our planning, and the app interface here.", "media": [{"type": "image", "file": "wix/prep-01.png", "alt": "Prep & Plate wireframes and user flows", "thumbnail": "wix/prep-01-thumb.jpg"}, {"type": "image", "file": "wix/prep-02.png", "alt": "Prep & Plate project planning and documentation board", "thumbnail": "wix/prep-02-thumb.jpg"}, {"type": "image", "file": "wix/prep-03.png", "alt": "Prep & Plate ingredient selection interface", "thumbnail": "wix/prep-03-thumb.jpg"}], "images": ["wix/prep-01.png", "wix/prep-02.png", "wix/prep-03.png"], "cover": "wix/prep-01-thumb.jpg"}];
const cards=[...document.querySelectorAll('.project-clipping')];
const stops=[...document.querySelectorAll('.journey-panel')],journeyTabs=[...document.querySelectorAll('[data-journey]')];
let currentStop=0;
const journeyNames=['the old site','the brief','the look','the edit','the texture','the paper idea','this version'];
function revealPanel(panels,index,direction=1){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 panels.forEach((panel,i)=>{panel.getAnimations().forEach(a=>a.cancel());panel.hidden=i!==index;});
 if(!reduced)panels[index].animate([{opacity:0,transform:`translateX(${direction*24}px)`},{opacity:1,transform:'translateX(0)'}],{duration:550,easing:'cubic-bezier(.2,.7,.3,1)'});
}
function openStop(index){
 const previous=currentStop;currentStop=index;revealPanel(stops,index,index>=previous?1:-1);
 journeyTabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;tab.classList.toggle('visited',i<=index);});
 if(innerWidth<=760){const rail=document.querySelector('.journey-rail'),tab=journeyTabs[index];rail.scrollTo({left:tab.offsetLeft-rail.clientWidth/2+tab.offsetWidth/2,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 const back=document.querySelector('#journey-back'),forward=document.querySelector('#journey-forward');back.disabled=index===0;forward.disabled=index===stops.length-1;forward.textContent=index<stops.length-1?'Next: '+journeyNames[index+1]+' →':'You’re at this version';
 document.querySelector('#journey-position').textContent=`${index+1} of ${stops.length}`;
 if(document.activeElement===forward&&forward.disabled)back.focus({preventScroll:true});
}
journeyTabs.forEach(tab=>tab.addEventListener('click',()=>openStop(Number(tab.dataset.journey))));
document.querySelector('#journey-back').addEventListener('click',()=>openStop(Math.max(0,currentStop-1)));
document.querySelector('#journey-forward').addEventListener('click',()=>openStop(Math.min(stops.length-1,currentStop+1)));
function tabKeys(tabs,select){tabs.forEach((tab,i)=>tab.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(i+1)%tabs.length;else if(event.key==='ArrowLeft')target=(i-1+tabs.length)%tabs.length;else if(event.key==='Home')target=0;else if(event.key==='End')target=tabs.length-1;else return;event.preventDefault();tabs[target].focus({preventScroll:true});select(target);}));}
tabKeys(journeyTabs,openStop);
const careerTabs=[...document.querySelectorAll('[data-career]')],careerPanels=[...document.querySelectorAll('.career-panel')];let currentCareer=0;
function openCareer(index){
 const previous=currentCareer;currentCareer=index;renderCareerPictures(index);revealPanel(careerPanels,index,index>=previous?1:-1);
 careerTabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;tab.classList.toggle('visited',i<=index);});
 const back=document.querySelector('#career-back'),forward=document.querySelector('#career-forward');back.disabled=index===0;forward.disabled=index===careerPanels.length-1;
 document.querySelector('#career-position').textContent=`${index+1} of ${careerPanels.length}`;
 if(document.activeElement?.closest('.career-panel')?.hidden)careerTabs[index].focus({preventScroll:true});
 if(document.activeElement===forward&&forward.disabled)back.focus({preventScroll:true});
 if(document.querySelector('#career-preview')&&document.activeElement?.matches('[data-career]'))showCareerPreview(index,document.activeElement);
}
careerTabs.forEach(tab=>tab.addEventListener('click',()=>openCareer(Number(tab.dataset.career))));
document.querySelectorAll('[data-career-next]').forEach(button=>button.addEventListener('click',()=>openCareer(Number(button.dataset.careerNext))));
document.querySelector('#career-back').addEventListener('click',()=>openCareer(Math.max(0,currentCareer-1)));
document.querySelector('#career-forward').addEventListener('click',()=>openCareer(Math.min(careerPanels.length-1,currentCareer+1)));
tabKeys(careerTabs,openCareer);
function openCareerHash(){const map={'#work-teg':4,'#work-pbs':0,'#work-research':3};if(location.hash in map){openCareer(map[location.hash]);document.querySelector('#work').scrollIntoView({block:'start'});}}
window.addEventListener('hashchange',openCareerHash);openCareerHash();
const toggleLayout=document.querySelector('#toggle-layout');
toggleLayout.addEventListener('click',()=>{const grid=document.body.dataset.stage!=='2';document.body.dataset.stage=grid?'2':'0';toggleLayout.setAttribute('aria-pressed',String(grid));toggleLayout.textContent=grid?'Back to the collage':'Prefer a grid?';document.querySelector('#stage-announcement').textContent=grid?'The eight projects are now arranged in a grid.':'The eight projects are back in the collage.';});
document.querySelectorAll('[data-taste]').forEach(button=>{if(button.tagName!=='BUTTON')return;button.addEventListener('click',()=>{const taste=button.dataset.taste;document.querySelector('.taste-preview').dataset.taste=taste;document.querySelectorAll('.color-chips span').forEach((chip,i)=>chip.textContent=(taste==='mine'?['plum','cobalt','berry','olive']:['pink','pink','more pink','also pink'])[i]);document.querySelectorAll('.taste-switch button').forEach(b=>{b.setAttribute('aria-pressed',String(b===button));b.classList.toggle('active',b===button);});document.querySelector('#taste-caption').textContent=taste==='mine'?'The jewel tones felt more like me. The texture still needed work.':'An early color experiment. I kept adjusting the palette and the texture.';});});
document.querySelector('#simplify-demo').addEventListener('click',event=>{const pile=document.querySelector('.artifact-pile'),condensed=pile.dataset.condensed!=='true';pile.dataset.condensed=String(condensed);pile.hidden=condensed;document.querySelector('.condensed-projects').hidden=!condensed;document.querySelector('#density-label').textContent=condensed?'After: one way into each project':'Before: everything at once';event.currentTarget.textContent=condensed?'Show the pile again ↺':'Put the images inside →';});
const dialog=document.querySelector('#project-dialog');let activeProject=null,imageIndex=0,opener=null;
function pauseGalleryMedia(){document.querySelectorAll('#gallery-image video,#gallery-image audio').forEach(media=>media.pause());}
function renderImage(){
 pauseGalleryMedia();
 const container=document.querySelector('#gallery-image');container.replaceChildren();
 const media=activeProject.media||[],item=media[imageIndex];
 const caption=document.querySelector('#gallery-caption'),original=document.querySelector('#gallery-original');
 caption.textContent=item?.alt||'';original.hidden=!item;
 if(item){
  const el=document.createElement(item.type==='video'?'video':'img');el.src=assetSource(item.file);
  if(item.type==='video'){el.controls=true;el.preload='metadata';el.playsInline=true;el.poster=assetSource(item.poster);el.setAttribute('aria-label',item.alt);original.textContent='Open video ↗';}
  else{el.alt=item.alt;el.style.objectFit=item.fit||'contain';el.style.objectPosition=item.position||'50% 50%';original.textContent='Open full-size image ↗';}
  original.href=assetSource(item.file);container.append(el);
 }else{const empty=document.createElement('div');empty.className='image-empty';empty.innerHTML='<span aria-hidden="true">▧</span><small>Project image needed</small>';container.append(empty);original.removeAttribute('href');}
 document.querySelector('#gallery-count').textContent=media.length?`${imageIndex+1} / ${media.length}`:'Image still to supply';
 document.querySelector('#previous-image').disabled=media.length<2;document.querySelector('#next-image').disabled=media.length<2;
 document.querySelectorAll('.gallery-thumb').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===imageIndex)));
}
function openProject(id,button){
 activeProject=projects.find(p=>p.id===id);opener=button;imageIndex=0;dialog.dataset.project=id;
 document.querySelector('#project-title').textContent=activeProject.title;document.querySelector('#project-category').textContent=activeProject.category;document.querySelector('#project-copy').textContent=activeProject.copy;document.querySelector('#project-note').textContent=activeProject.note;document.querySelector('.project-contribution').open=false;
 document.querySelector('#project-contribution').textContent=activeProject.contribution;
 const trailer=document.querySelector('#project-trailer');trailer.hidden=!activeProject.trailer;if(activeProject.trailer)trailer.href=activeProject.trailer;else trailer.removeAttribute('href');
 const thumbs=document.querySelector('#gallery-thumbnails');thumbs.replaceChildren();
 (activeProject.media||[]).forEach((item,i)=>{const button=document.createElement('button');button.className='gallery-thumb';button.type='button';button.setAttribute('aria-label',`Show ${i+1}: ${item.alt}${item.type==='video'?' (video)':''}`);const img=document.createElement('img');img.src=assetSource(item.thumbnail);img.alt='';img.loading='lazy';button.append(img);if(item.type==='video'){const play=document.createElement('span');play.className='thumb-play';play.textContent='▶';play.setAttribute('aria-hidden','true');button.append(play);}button.addEventListener('click',()=>{imageIndex=i;renderImage();});thumbs.append(button);});
 renderImage();dialog.showModal();document.body.classList.add('gallery-open');
}
cards.forEach(card=>card.querySelector('button').addEventListener('click',event=>openProject(card.dataset.project,event.currentTarget)));
function moveImage(delta){const count=activeProject.media?.length||0;if(!count)return;imageIndex=(imageIndex+delta+count)%count;renderImage();}
document.querySelector('#previous-image').addEventListener('click',()=>moveImage(-1));document.querySelector('#next-image').addEventListener('click',()=>moveImage(1));
dialog.addEventListener('keydown',event=>{if(event.target.closest('video,audio'))return;if(event.key==='ArrowRight'){event.preventDefault();moveImage(1);}if(event.key==='ArrowLeft'){event.preventDefault();moveImage(-1);}});
document.querySelector('#close-project').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{pauseGalleryMedia();document.body.classList.remove('gallery-open');opener?.focus({preventScroll:true});});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});

document.querySelectorAll('[data-open]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.open,button)));
// The yellow drawer is optional. The main story stays short.
const promptDialog=document.querySelector('#prompt-dialog');let promptOpener=null;
document.querySelectorAll('[data-show-prompts]').forEach(button=>button.addEventListener('click',()=>{promptOpener=button;promptDialog.showModal();document.body.classList.add('gallery-open');}));
document.querySelector('.close-prompt').addEventListener('click',()=>promptDialog.close());
promptDialog.addEventListener('close',()=>{document.body.classList.remove('gallery-open');promptOpener?.focus({preventScroll:true});});
promptDialog.addEventListener('click',event=>{if(event.target===promptDialog){const r=promptDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)promptDialog.close();}});
function careerPictureProject(index){return ['pbs',null,'ceres','voice','teg',null][index];}
function fillPictureArea(container,index,preview=false){
 container.replaceChildren();
 const id=careerPictureProject(index),project=projects.find(p=>p.id===id);
 if(index===1){['fitness','prep'].forEach(id=>{const p=projects.find(p=>p.id===id),button=document.createElement('button');button.className='career-photo';button.type='button';button.setAttribute('aria-label','Open '+p.title);const img=document.createElement('img');img.src=assetSource(p.cover);img.alt=p.title;button.append(img);button.addEventListener('click',()=>{hideCareerPreview();openProject(id,preview?careerTabs[index]:button);});container.append(button);});return;}
 if(project?.images.length){
  project.images.slice(0,2).forEach((src,i)=>{const button=document.createElement('button');button.type='button';button.className='career-photo';button.setAttribute('aria-label',`Open ${project.title} images`);const img=document.createElement('img');img.src=assetSource(project.media.find(item=>item.file===src)?.thumbnail||src);img.alt=project.title+' — portfolio image '+(i+1);button.append(img);button.addEventListener('click',()=>{hideCareerPreview();openProject(id,preview?careerTabs[index]:button);imageIndex=project.media.findIndex(item=>item.file===src);renderImage();});container.append(button);});
 }else if(index!==5){
  const empty=document.createElement('div');empty.className='preview-empty';empty.innerHTML='<span aria-hidden="true">▧</span><small>'+(['PBS image to add','School image to add','','','TEG image to add'][index]||'Image to add')+'</small>';container.append(empty);
 }
 if(!preview&&project){const note=document.createElement('span');note.className='scribble picture-note';note.textContent=project.images.length?({pbs:'↖ pick one up! Don’t be shy.',ceres:'↖ yes, this one’s for fun.',voice:'↖ the voices are in here, too.',teg:'↖ this one means a lot to me.'}[project.id]||'↖ there’s more in here.'):'↖ saving a spot';container.append(note);}
}
function renderCareerPictures(index){const target=document.querySelector(`[data-career-pictures="${index}"]`);if(target)fillPictureArea(target,index);}
const preview=document.createElement('aside');preview.id='career-preview';preview.hidden=true;preview.setAttribute('aria-label','A peek at this chapter');preview.innerHTML='<button class="close-preview" type="button" aria-label="Dismiss chapter preview">×</button><p class="preview-title"></p><div class="preview-pictures"></div><p class="preview-copy"></p><button class="preview-open" type="button">This part of the story ↓</button>';document.body.append(preview);
let previewTimer=null,previewIndex=0;
const peekCopy=[
 ['PBS KIDS','I was responsible for the productions, the grant requirements, and the relationships that helped the shows reach kids.'],
 ['Back to school','These were the projects where I started getting more comfortable making things in code.'],
 ['Ceres (for fun)','My best friend had the idea, and I got very involved in how it should look and feel.'],
 ['Voice & belonging','I wanted to know what the voice tools understood about a person, and what they missed.'],
 ['The Emancipation Game','The big fish. I got to make much more of the experience myself, and help get it into a school.'],
 ['A few more things to make','I want to keep making games and learning experiences, and keep getting better at the parts I haven’t figured out yet.']
];
function hideCareerPreview(){clearTimeout(previewTimer);preview.hidden=true;}
function showCareerPreview(index,anchor){
 clearTimeout(previewTimer);previewIndex=index;preview.querySelector('.preview-title').textContent=peekCopy[index][0];preview.querySelector('.preview-copy').textContent=peekCopy[index][1];fillPictureArea(preview.querySelector('.preview-pictures'),index,true);preview.hidden=false;
 const rect=anchor.getBoundingClientRect(),width=Math.min(310,innerWidth-24);preview.style.width=width+'px';
 const height=preview.getBoundingClientRect().height;const x=Math.max(12,Math.min(innerWidth-width-12,rect.left+rect.width/2-width/2));
 const y=rect.top>height+85?rect.top-height-12:Math.min(innerHeight-height-12,rect.bottom+14);preview.style.left=x+'px';preview.style.top=Math.max(78,y)+'px';
}
careerTabs.forEach((tab,index)=>{
 tab.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')showCareerPreview(index,tab);});
 tab.addEventListener('pointerleave',()=>{previewTimer=setTimeout(hideCareerPreview,220);});
 tab.addEventListener('focus',()=>showCareerPreview(index,tab));
 tab.addEventListener('blur',event=>{if(!preview.contains(event.relatedTarget))previewTimer=setTimeout(hideCareerPreview,220);});
 tab.addEventListener('click',()=>{hideCareerPreview();renderCareerPictures(index);});
 const stamp=document.createElement('span');stamp.className='station-scrap';stamp.setAttribute('aria-hidden','true');
 const project=projects.find(p=>p.id===careerPictureProject(index));
 if(index===1){const img=document.createElement('img');img.src=assetSource(projects.find(p=>p.id==='fitness').cover);img.alt='';stamp.append(img);}else if(project?.images.length){const img=document.createElement('img');img.src=assetSource(project.cover||project.images[0]);img.alt='';stamp.append(img);}else{stamp.textContent=index===5?'?':'▧';if(index===5)stamp.classList.add('next-question');}
 tab.prepend(stamp);
});
preview.addEventListener('pointerenter',()=>clearTimeout(previewTimer));preview.addEventListener('pointerleave',()=>{previewTimer=setTimeout(hideCareerPreview,220);});
preview.addEventListener('focusin',()=>clearTimeout(previewTimer));preview.addEventListener('focusout',event=>{if(!preview.contains(event.relatedTarget))hideCareerPreview();});
preview.querySelector('.close-preview').addEventListener('click',hideCareerPreview);
preview.querySelector('.preview-open').addEventListener('click',()=>{const index=previewIndex;hideCareerPreview();openCareer(index);careerPanels[index].scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});careerPanels[index].focus({preventScroll:true});});
document.addEventListener('keydown',event=>{if(event.key==='Escape')hideCareerPreview();});
window.addEventListener('scroll',()=>{const anchor=document.activeElement;if(anchor?.matches('[data-career]')){const rect=anchor.getBoundingClientRect();if(rect.bottom>75&&rect.top<innerHeight)showCareerPreview(Number(anchor.dataset.career),anchor);else hideCareerPreview();}else hideCareerPreview();},{passive:true});
renderCareerPictures(currentCareer);

// One doodled draft gets unfolded into the page. No artificial loading delay.
const paperIntro=document.querySelector('#paper-intro');let introOpening=false,introFinishTimer=null,introReturnFocus=null;
function markIntroSeen(){try{sessionStorage.setItem('eps-paper-intro-v1','seen');}catch{}}
function finishPaperIntro(){
 clearTimeout(introFinishTimer);markIntroSeen();document.body.classList.remove('intro-pending');document.body.classList.add('intro-entered');
 if(paperIntro.open)paperIntro.close();paperIntro.classList.remove('unfolding');introOpening=false;
 const target=introReturnFocus||document.querySelector('#journey-title');target.tabIndex=target.matches('h1')?-1:target.tabIndex;target.focus({preventScroll:true});introReturnFocus=null;
}
function showPaperIntro(replay=false){document.body.classList.remove('intro-entered');introReturnFocus=replay?document.querySelector('#replay-paper-intro'):null;introOpening=false;paperIntro.classList.remove('unfolding');paperIntro.showModal();document.querySelector('#unfold-paper').focus({preventScroll:true});}
document.querySelector('#unfold-paper').addEventListener('click',()=>{
 if(introOpening)return;introOpening=true;
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){finishPaperIntro();return;}
 paperIntro.classList.add('unfolding');introFinishTimer=setTimeout(finishPaperIntro,1250);
});
document.querySelector('#skip-paper-intro').addEventListener('click',finishPaperIntro);
paperIntro.addEventListener('cancel',event=>{event.preventDefault();finishPaperIntro();});
document.querySelector('#replay-paper-intro').addEventListener('click',()=>showPaperIntro(true));
let introSeen=false;try{introSeen=sessionStorage.getItem('eps-paper-intro-v1')==='seen';}catch{}
const deepLink=location.hash&&!['#entrance','#main'].includes(location.hash);
if(!introSeen&&!deepLink)showPaperIntro();else document.body.classList.remove('intro-pending');

document.querySelector('#try-texture').addEventListener('click',event=>{const sample=document.querySelector('#texture-sample'),crumpled=sample.dataset.crumpled!=='true';sample.dataset.crumpled=String(crumpled);sample.dataset.textured='true';event.currentTarget.setAttribute('aria-pressed',String(crumpled));event.currentTarget.textContent=crumpled?'Open it back up ↗':'Crumple it into a ball ↘';document.querySelector('#texture-status').textContent=crumpled?'Paper balled up.':'Paper unfolded.';});
document.querySelectorAll('[data-replay-intro]').forEach(button=>button.addEventListener('click',()=>{showPaperIntro(true);introReturnFocus=button;}));

const paperPlay=document.querySelector('#paper-play');
paperPlay.addEventListener('click',()=>{
 const unfolded=paperPlay.getAttribute('aria-pressed')!=='true';
 paperPlay.setAttribute('aria-pressed',String(unfolded));
 paperPlay.setAttribute('aria-label',unfolded?'Crumple the paper':'Uncrumple the paper');
 document.querySelector('#paper-play-status').textContent=unfolded?'Paper unfolded.':'Paper crumpled.';
});

window.addEventListener('resize',hideCareerPreview);
