import{a as g,S as w,i as l}from"./assets/vendor-C4-ZuMk8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const v="https://pixabay.com/api/",L="46849808-268f228f7185f073a2d253586",b=async(t,o=1,a=15)=>{try{const e=await g.get(v,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:a}});return{hits:e.data.hits,totalHits:e.data.totalHits}}catch(e){return console.error("Error fetching data:",e),{hits:[],totalHits:0}}};function q(t,o){o.insertAdjacentHTML("beforeend",t.map(e=>`
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
  `).join("")),new w("a",{captionsData:"alt",captionDelay:250}).refresh()}const S=document.querySelector("form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-more");let f="",n=1,m=0;S.addEventListener("submit",t=>{if(t.preventDefault(),f=t.target.elements.query.value.trim(),!f){l.warning({message:"Please enter a search term."});return}c.classList.add("show"),u.innerHTML="",d.style.display="none",n=1,h()});d.addEventListener("click",()=>{d.style.display="none",c.classList.add("show"),n+=1,h()});async function h(){try{const t=await b(f,n);if(c.classList.remove("show"),n===1&&(m=t.totalHits),t.hits.length>0){if(q(t.hits,u),n*15>=m?l.info({message:"We're sorry, but you've reached the end of search results."}):d.style.display="block",n>1){const o=u.querySelector(".gallery a"),e=(o?o.getBoundingClientRect().height:0)*2;H(e)}}else n===1&&l.error({message:"Sorry, there are no images matching your search query."})}catch(t){c.classList.remove("show"),l.error({message:`An error occurred: ${t.message}. Please try again later.`})}}function H(t,o=1e3){const a=window.scrollY,e=a+t,s=performance.now();function r(){const y=performance.now()-s,p=Math.min(y/o,1);window.scrollTo(0,a+(e-a)*p),p<1&&requestAnimationFrame(r)}requestAnimationFrame(r)}
//# sourceMappingURL=index.js.map
