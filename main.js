(()=>{"use strict";class e{constructor(e){this.name=e,this.projectTasks=[]}}e.prototype.addTask=function(e){return this.projectTasks.push(e)};const t=e,n=class{constructor(e,t,n,s){this.name=e,this.description=t,this.dueDate=n,this.priority=s}};let s=[],a=new t("home");a.addTask(new n("laundry")),s.push(a),a.addTask(new n("work"));let r=new t("school");r.addTask(new n("laundry")),s.push(r),r.addTask(new n("work"));document.getElementById("content").append((()=>{const e=document.createElement("div");return e.append((()=>{const e=document.createElement("h1");return e.textContent="Todo List",e})()),e.append((()=>{let e=[];return s.forEach((t=>{e.push(t.name)})),e})()),e.append(" ________      "),e.append((()=>{let e=[];return s.forEach((t=>{t.projectTasks.forEach((t=>{e.push(t.name)}))})),e})()),e})())})();