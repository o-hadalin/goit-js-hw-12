import{a as h,S as y,i}from"./assets/vendor-C4-ZuMk8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const g="https://pixabay.com/api/",v="46849808-268f228f7185f073a2d253586",w=async(t,a=1,n=15)=>{try{const e=await h.get(g,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:n}});return{hits:e.data.hits,totalHits:e.data.totalHits}}catch(e){return console.error("Error fetching data:",e),{hits:[],totalHits:0}}};function L(t,a){a.insertAdjacentHTML("beforeend",t.map(e=>`
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
  `).join("")),new y("a",{captionsData:"alt",captionDelay:250}).refresh()}const b=document.querySelector("form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader"),c=document.querySelector(".load-more");let f="",o=1,p=0;b.addEventListener("submit",t=>{if(t.preventDefault(),f=t.target.elements.query.value.trim(),!f){i.warning({message:"Please enter a search term."});return}l.classList.add("show"),u.innerHTML="",c.style.display="none",o=1,m()});c.addEventListener("click",()=>{c.style.display="none",l.classList.add("show"),o+=1,m()});async function m(){try{const t=await w(f,o);if(l.classList.remove("show"),o===1&&(p=t.totalHits),t.hits.length>0){if(L(t.hits,u),o*15>=p?i.info({message:"We're sorry, but you've reached the end of search results."}):c.style.display="block",o>1){const a=u.querySelector(".gallery a"),n=a?a.getBoundingClientRect().height:0;window.scrollBy({top:n*2,behavior:"smooth"})}}else o===1&&i.error({message:"Sorry, there are no images matching your search query."})}catch(t){l.classList.remove("show"),i.error({message:`An error occurred: ${t.message}. Please try again later.`})}}
//# sourceMappingURL=index.js.map
