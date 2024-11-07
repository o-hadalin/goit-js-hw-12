import{a as h,S as y,i}from"./assets/vendor-C4-ZuMk8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const g="https://pixabay.com/api/",v="46849808-268f228f7185f073a2d253586",b=async(e,a=1,n=15)=>{try{const t=await h.get(g,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:n}});return{hits:t.data.hits,totalHits:t.data.totalHits}}catch(t){return console.error("Error fetching data:",t),{hits:[],totalHits:0}}};function w(e,a){a.insertAdjacentHTML("beforeend",e.map(t=>`
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
  `).join("")),new y("a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector("form"),u=document.querySelector(".gallery"),q=document.querySelector(".loader"),p=document.querySelector(".load-more");let f="",o=1,d=0;function l(e){q.classList.toggle("show",e),p.style.display=e?"none":"block"}L.addEventListener("submit",e=>{if(e.preventDefault(),f=e.target.elements.query.value.trim(),!f){i.warning({message:"Please enter a search term."});return}u.innerHTML="",o=1,l(!0),m()});p.addEventListener("click",()=>{o+=1,l(!0),m()});async function m(){try{const e=await b(f,o);if(l(!1),o===1&&(d=e.totalHits),e.hits.length>0){if(w(e.hits,u),p.style.display=o*15<d?"block":"none",o*15>=d&&i.info({message:"We're sorry, but you've reached the end of search results."}),o>1){const a=u.querySelector(".gallery a"),n=a?a.getBoundingClientRect().height:0;window.scrollBy({top:n*2,behavior:"smooth"})}}else o===1&&i.error({message:"Sorry, there are no images matching your search query."})}catch(e){l(!1),i.error({message:`An error occurred: ${e.message}. Please try again later.`})}}
//# sourceMappingURL=index.js.map
