import{a,S as c}from"./assets/vendor-CCfgLW0g.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function l(){return(await a({method:"get",headers:{accept:"application/json"},url:"https://sound-wave.b.goit.study/api/feedbacks?limit=10&page=1"})).data.data.map(s=>({rating:s.rating,name:s.name,descr:s.descr}))}const p=document.querySelector(".swiper-wrapper");async function u(){const n=await l();let r="";for(let i=0;i<n.length;i++)r+=`
        <div class="swiper-slide">
            <ul class="swiper-list">

                <li><p class="swiper-list-text">${n[i].descr}</p></li>
                <li><p class="swiper-list-name">${n[i].name}</p></li>
            </ul>

        </div>
            

        

        `;p.insertAdjacentHTML("afterbegin",r),new c(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})}u();
//# sourceMappingURL=index.js.map
