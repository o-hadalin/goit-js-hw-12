import{S as u,i}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const d=o=>{const t="46849808-268f228f7185f073a2d253586",r=`https://pixabay.com/api/?${new URLSearchParams({key:t,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}`;return fetch(r).then(e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>e.hits).catch(e=>(console.error("Error fetching data:",e),[]))};function f(o,t){t.innerHTML=o.map(r=>`
    <a href="${r.largeImageURL}">
      <img src="${r.webformatURL}" alt="${r.tags}">
      <div class="card-info">
        <div class="info-row">
          <span class="label">Likes</span>
          <span class="value">${r.likes}</span>
        </div>
        <div class="info-row">
          <span class="label">Views</span>
          <span class="value">${r.views}</span>
        </div>
        <div class="info-row">
          <span class="label">Comments</span>
          <span class="value">${r.comments}</span>
        </div>
        <div class="info-row">
          <span class="label">Downloads</span>
          <span class="value">${r.downloads}</span>
        </div>
      </div>
    </a>
  `).join(""),new u("a",{captionsData:"alt",captionDelay:250}).refresh()}const m=document.querySelector("form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");m.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){i.warning({message:"Please enter a search term."});return}c.classList.add("show"),l.innerHTML="",d(t).then(a=>{c.classList.remove("show"),a.length>0?f(a,l):i.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(a=>{c.classList.remove("show"),console.error("Error fetching images:",a.message),i.error({message:`An error occurred: ${a.message}. Please try again later.`})})});
//# sourceMappingURL=index.js.map
