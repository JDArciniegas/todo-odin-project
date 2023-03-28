(()=>{"use strict";const e=class{constructor(e){this.name=e,this.projectList=[]}add(e,t,n,o){const a=new class{constructor(e,t,n,o){this.name=e,this.description=t,this.dueDate=n,this.priority=o,this.isCompleted=!1}complete(){this.isCompleted=!0}}(e,t,n,o);this.projectList.push(a)}remove(e){this.projectList.splice(e,1)}complete(e){this.projectList[e].complete()}};(()=>{let t,n=[],o=new e("Home");o.add("laundry","do laundry","2023-05-01","low"),o.add("cooking","Make Dinner","2023-04-01","high"),o.add("roof leak","repair leak","2023-04-01","high");let a=new e("work");a.add("report","ninja report","2023-04-01","high"),n.push(o),n.push(a);const r=document.querySelector("#task-list"),i=document.querySelector("#project-list"),s=document.querySelector("#project-form"),d=document.querySelector("#project-name"),c=document.querySelector("#task-form"),l=document.querySelector("#task-name"),m=document.querySelector("#task-description"),p=document.querySelector("#task-date"),u=document.querySelector("#task-priority"),h=(document.querySelector("#task-submit"),document.querySelector("#add-new-project")),L=document.querySelector("#add-task"),C=e=>{e.forEach((e=>{let t=document.createElement("li");t.classList.add("project"),t.textContent=e.name,i.appendChild(t)}))},y=e=>{e.forEach((e=>{let t=document.createElement("li");t.append((e=>{let t=document.createElement("div"),n=document.createElement("span");n.classList.add("main-task-info");let o=document.createElement("div");o.classList.add("task-container-top");let a=document.createElement("p");a.textContent=e.name;let r=document.createElement("p");r.textContent=e.description,r.classList.add("task-container-bottom");let i=document.createElement("p");i.textContent=e.dueDate;let s=document.createElement("span");var d;return s.classList.add("material-symbols-outlined"),s.textContent=(e=>"high"===e?"priority_high":"medium"===e?"priority":"low_priority")(e.priority),"priority_high"===(d=s).textContent?d.classList.add("high"):"medium"===d.textContent?d.classList.add("medium"):"low_priority"===d.textContent&&d.classList.add("low"),n.appendChild(a),n.appendChild(s),o.appendChild(n),o.appendChild(i),t.classList.add("task-container"),t.appendChild(o),t.appendChild(r),t})(e)),t.classList.add("task"),r.appendChild(t)}))},k=()=>{r.innerHTML=""};h.addEventListener("click",(e=>{s.classList.remove("hidden")})),i.addEventListener("click",(e=>{var o,a;L.classList.remove("hidden"),k(),o=n,a=e.target.textContent.toLowerCase(),o.forEach((e=>{e.name.toLowerCase()===a&&y(e.projectList)})),((e,n)=>{e.find((e=>{e.name.toLowerCase()===n&&(t=e)}))})(n,e.target.textContent.toLowerCase())})),s.addEventListener("submit",(t=>{t.preventDefault(),(t=>{let o=new e(t);n.push(o)})(d.value),i.innerHTML="",C(n)})),L.addEventListener("click",(e=>{e.preventDefault(),c.classList.remove("hidden")})),c.addEventListener("submit",(e=>{e.preventDefault(),k(),t.add(l.value,m.value,p.value,u.value),y(t.projectList)})),C(n),y(o.projectList)})()})();