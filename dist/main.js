(()=>{"use strict";const e=new class{constructor(e){this.name=e,this.projectList=[]}add(e,t,n,c){const o=new class{constructor(e,t,n,c){this.name=e,this.description=t,this.dueDate=n,this.priority=c,this.isCompleted=!1}complete(){this.isCompleted=!0}}(e,t,n,c);this.projectList.push(o)}remove(e){this.projectList.splice(e,1)}complete(e){this.projectList[e].complete()}}("Home");e.add("Laundry","Laundry Day","2023-04-01","high"),e.add("Cook","Dinner","2023-04-01","medium");document.getElementById("content").append((()=>{const t=document.createElement("div");return t.append((()=>{const e=document.createElement("header"),t=document.createElement("h1");return t.textContent="Todo List",e.appendChild(t),e})()),t.append((()=>{const t=document.createElement("div"),n=document.createElement("div"),c=document.createElement("div");return n.append((e=>{const t=document.createElement("p");return t.textContent=e.name,t})(e)),c.append((e=>{const t=document.createElement("ul");return Object.values(e.projectList).forEach((e=>{let n=document.createElement("li");n.textContent=e.name,t.appendChild(n)})),t})(e)),t.appendChild(n),t.appendChild(c),t})()),t})())})();