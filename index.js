import{a as m,S as y,i as d}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const h="https://pixabay.com/api/",g="46849808-268f228f7185f073a2d253586",v=async(r,t=1,o=15)=>{try{return(await m.get(h,{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:o}})).data.hits}catch(s){return console.error("Error fetching data:",s),[]}};function w(r,t){t.innerHTML=r.map(s=>`
    <a href="${s.largeImageURL}">
      <img src="${s.webformatURL}" alt="${s.tags}">
      <div class="card-info">
        <div class="info-row">
          <span class="label">Likes</span>
          <span class="value">${s.likes}</span>
        </div>
        <div class="info-row">
          <span class="label">Views</span>
          <span class="value">${s.views}</span>
        </div>
        <div class="info-row">
          <span class="label">Comments</span>
          <span class="value">${s.comments}</span>
        </div>
        <div class="info-row">
          <span class="label">Downloads</span>
          <span class="value">${s.downloads}</span>
        </div>
      </div>
    </a>
  `).join(""),new y("a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector("form"),p=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".load-more");let u="",i=1;L.addEventListener("submit",r=>{if(r.preventDefault(),u=r.target.elements.query.value.trim(),!u){d.warning({message:"Please enter a search term."});return}n.classList.add("show"),p.innerHTML="",l.style.display="none",i=1,f()});l.addEventListener("click",()=>{l.style.display="none",n.classList.add("show"),i+=1,f()});async function f(){try{const r=await v(u,i);n.classList.remove("show"),r.length>0?(w(r,p),l.style.display="block"):i===1&&d.error({message:"Sorry, there are no images matching your search query."})}catch(r){n.classList.remove("show"),d.error({message:`An error occurred: ${r.message}. Please try again later.`})}}
//# sourceMappingURL=index.js.map
