import{a as y,S as g,i as l}from"./assets/vendor-C4-ZuMk8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const v="https://pixabay.com/api/",w="46849808-268f228f7185f073a2d253586",L=async(s,a=1,o=15)=>{try{const e=await y.get(v,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o}});return{hits:e.data.hits,totalHits:e.data.totalHits}}catch(e){return console.error("Error fetching data:",e),{hits:[],totalHits:0}}};function b(s,a){a.insertAdjacentHTML("beforeend",s.map(e=>`
    <a href="${e.largeImageURL}">
      <img src="${e.webformatURL}" alt="${e.tags}">
      <div class="card-info">
        <div class="info-row">
          <span class="label">Likes</span>
          <span class="value">${e.likes}</span>
        </div>
        <div class="info-row">
          <span class="label">Views</span>
          <span class="value">${e.views}</span>
        </div>
        <div class="info-row">
          <span class="label">Comments</span>
          <span class="value">${e.comments}</span>
        </div>
        <div class="info-row">
          <span class="label">Downloads</span>
          <span class="value">${e.downloads}</span>
        </div>
      </div>
    </a>
  `).join("")),new g("a",{captionsData:"alt",captionDelay:250}).refresh()}const q=document.querySelector("form"),c=document.querySelector(".gallery"),d=document.querySelector(".loader"),u=document.querySelector(".load-more");let f="",n=1,m=0;q.addEventListener("submit",s=>{if(s.preventDefault(),f=s.target.elements.query.value.trim(),!f){l.warning({message:"Please enter a search term."});return}d.classList.add("show"),c.innerHTML="",u.style.display="none",n=1,h()});u.addEventListener("click",()=>{u.style.display="none",d.classList.add("show"),n+=1,h()});async function h(){try{const s=await L(f,n);if(d.classList.remove("show"),n===1&&(m=s.totalHits),s.hits.length>0){if(b(s.hits,c),n*15>=m?l.info({message:"We're sorry, but you've reached the end of search results."}):u.style.display="block",n>1){const a=c.querySelector(".gallery a"),o=a?a.getBoundingClientRect().height:0,e=parseFloat(getComputedStyle(c).gap)||0,t=(o+e)*2;S(t,1e3)}}else n===1&&l.error({message:"Sorry, there are no images matching your search query."})}catch(s){d.classList.remove("show"),l.error({message:`An error occurred: ${s.message}. Please try again later.`})}}function S(s,a){const o=window.scrollY;let e=null;function t(r){e||(e=r);const i=r-e,p=Math.min(i/a,1);window.scrollTo(0,o+s*p),p<1&&requestAnimationFrame(t)}requestAnimationFrame(t)}
//# sourceMappingURL=index.js.map
