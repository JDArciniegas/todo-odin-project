(()=>{"use strict";const e=e=>document.createElement(e),t=(e,t)=>{let d=document.createElement(e);return d.classList.add(t),d},d=(e,t)=>{let d=document.createElement(e);return d.setAttribute("id",t),d},n=(()=>{let n=e("div");return n.setAttribute("id","projects"),n.appendChild((()=>{let e=d("div","left");e.classList.add("container-sides");const n=t("header","header-container"),r=t("h1","header"),i=t("span","material-symbols-outlined");return i.innerText="Add",r.innerText="Projects",n.appendChild(r),n.appendChild(i),e.appendChild(n),e})()),n.appendChild((()=>{let e=d("div","right");return e.classList.add("container-sides"),e})()),n})(),r=(()=>{const t=e("div");return t.setAttribute("id","layout"),t.append(n),t})();document.getElementById("content").append(r)})();