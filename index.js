import{a as h,S as y,i}from"./assets/vendor-C4-ZuMk8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",v="46849808-268f228f7185f073a2d253586",w=async(s,a=1,o=15)=>{try{const t=await h.get(g,{params:{key:v,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:o}});return{hits:t.data.hits,totalHits:t.data.totalHits}}catch(t){return console.error("Error fetching data:",t),{hits:[],totalHits:0}}};function L(s,a){a.insertAdjacentHTML("beforeend",s.map(t=>`
    <a href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}">
      <div class="card-info">
        <div class="info-row">
          <span class="label">Likes</span>
          <span class="value">${t.likes}</span>
        </div>
        <div class="info-row">
          <span class="label">Views</span>
          <span class="value">${t.views}</span>
        </div>
        <div class="info-row">
          <span class="label">Comments</span>
          <span class="value">${t.comments}</span>
        </div>
        <div class="info-row">
          <span class="label">Downloads</span>
          <span class="value">${t.downloads}</span>
        </div>
      </div>
    </a>
  `).join("")),new y("a",{captionsData:"alt",captionDelay:250}).refresh()}const b=document.querySelector("form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-more");let f="",n=1,p=0;b.addEventListener("submit",s=>{if(s.preventDefault(),f=s.target.elements.query.value.trim(),!f){i.warning({message:"Please enter a search term."});return}c.classList.add("show"),u.innerHTML="",d.style.display="none",n=1,m()});d.addEventListener("click",()=>{d.style.display="none",c.classList.add("show"),n+=1,m()});async function m(){try{const s=await w(f,n);if(c.classList.remove("show"),n===1&&(p=s.totalHits),s.hits.length>0){if(L(s.hits,u),n*15>=p?i.info({message:"We're sorry, but you've reached the end of search results."}):d.style.display="block",n>1){const a=u.querySelector(".gallery a"),o=a?a.getBoundingClientRect().height:0;S(o*2,1e3)}}else n===1&&i.error({message:"Sorry, there are no images matching your search query."})}catch(s){c.classList.remove("show"),i.error({message:`An error occurred: ${s.message}. Please try again later.`})}}function S(s,a){const o=window.scrollY,t=o+s,e=s/(a/10);let r=o;const l=setInterval(()=>{r+=e,window.scrollBy(0,e),(e>0&&r>=t||e<0&&r<=t)&&clearInterval(l)},10)}
//# sourceMappingURL=index.js.map
