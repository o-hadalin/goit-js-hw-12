import{a as g,S as w,i as c}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",L="46849808-268f228f7185f073a2d253586",b=async(a,t=1,o=15)=>{try{const s=await g.get(v,{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:o}});return{hits:s.data.hits,totalHits:s.data.totalHits}}catch(s){return console.error("Error fetching data:",s),{hits:[],totalHits:0}}};function q(a,t){t.insertAdjacentHTML("beforeend",a.map(s=>`
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
  `).join("")),new w("a",{captionsData:"alt",captionDelay:250}).refresh()}const S=document.querySelector("form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader"),l=document.querySelector(".load-more");let f="",n=1,m=0;S.addEventListener("submit",a=>{if(a.preventDefault(),f=a.target.elements.query.value.trim(),!f){c.warning({message:"Please enter a search term."});return}d.classList.add("show"),u.innerHTML="",l.style.display="none",n=1,y()});l.addEventListener("click",()=>{l.style.display="none",d.classList.add("show"),n+=1,y()});async function y(){var a;try{const t=await b(f,n);if(d.classList.remove("show"),n===1&&(m=t.totalHits),t.hits.length>0){if(q(t.hits,u),n*15>=m?(c.info({message:"We're sorry, but you've reached the end of search results."}),l.style.display="none"):l.style.display="block",n>1){const o=((a=u.querySelector(".gallery a"))==null?void 0:a.getBoundingClientRect().height)||0;H(o*2,1e3)}}else n===1&&c.error({message:"Sorry, there are no images matching your search query."})}catch(t){d.classList.remove("show"),c.error({message:`An error occurred: ${t.message}. Please try again later.`})}}function H(a,t){const o=window.scrollY,s=performance.now();function e(r){const i=r-s,p=Math.min(i/t,1),h=a*p-(window.scrollY-o);window.scrollBy(0,h),p<1&&requestAnimationFrame(e)}requestAnimationFrame(e)}
//# sourceMappingURL=index.js.map
