(()=>{"use strict";const t=class{constructor(t,s,n,o){this.name=t,this.description=s,this.dueDate=n,this.priority=o}};class s{constructor(t){this.name=t,this.projectTasks=[]}}s.prototype.addtask=function(t){this.projectTasks.push(t)};const n=s,o=new t("laundry","doing laundry","now","high"),a=new t("dishes","doing laundry","now","high"),d=new t("tv","doing laundry","now","high"),e=new t("car","doing laundry","now","high"),i=new n("Today");i.addtask(o),i.addtask(a),i.addtask(d),i.addtask(e),console.log(i.projectTasks),document.getElementById("content")})();