(this["webpackJsonpsir-spa"]=this["webpackJsonpsir-spa"]||[]).push([[0],{103:function(e,t,i){e.exports=i.p+"static/media/icons8-business-buildings.d40fc481.svg"},104:function(e,t,i){e.exports=i.p+"static/media/icons8-organization.4b917871.svg"},105:function(e,t,i){e.exports=i.p+"static/media/icons8-manufacturing.6a1458e1.svg"},106:function(e,t,i){e.exports=i.p+"static/media/icons8-park-with-street-light.9024a2d1.svg"},121:function(e,t,i){e.exports=i(247)},126:function(e,t,i){},247:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(32),s=i.n(r),o=(i(126),i(30)),l=i(50),h=i(16),c=i(75),u=i.n(c),d=i(101),f=i(21),_=i(22),p=i(23),m=i(38),g=i(39),v=function(){function e(t,i,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;Object(_.a)(this,e),this.unique_id=t,this.position=i,this.now_in_center=a,this.model=n,this.home=r,this.has_infected=s,this.dx=2*(Math.random()-.5),this.dy=2*(Math.random()-.5)}return Object(p.a)(e,[{key:"move",value:function(){if("random"===this.model.movement){var e=this.model.space.get_neighborhood_empty(this.position);e.push(this.position);var t=(i=e)[Math.floor(Math.random()*i.length)]}else this.model.movement;var i;this.position=t,this.model.space.move_agent(this,t)}},{key:"hotspot_move",value:function(){var e=this.model.space.get_potential_force(this);e=y(e);var t,i,n=this.model.schedule_random_activity[this.model.current_mode],a=this.model.schedule_speed[this.model.current_mode];t="Infected"==this.className,i=this.model.stay_at_home,t&&i?(n=0,a=.5):this.model.stronger_repulsion?n=0:this.model.exit_lock&&(n=0,a*=.5),e[0]+=this.dx+n*(Math.random()-.5)*2,e[1]+=this.dy+n*(Math.random()-.5)*2,e=y(e),this.dx=e[0],this.dy=e[1];var r=[this.position[0]+this.dx*a,this.position[1]+this.dy*a];r=this.model.space.correct_boundaries(r),this.position=r,this.model.space.move_agent(this,this.position)}},{key:"spread_infection",value:function(){var e,t=this.model.space.get_agents_inRange(this,this.model.infection_radius),i=Object(f.a)(t);try{for(i.s();!(e=i.n()).done;){var n=e.value,a=this.model.s_list.filter((function(e,t,i){return e.unique_id===n}))[0];"undefined"!==typeof a&&"Susceptible"==a.className&&0==a.infected&&Math.random()<this.model.infection_probability_onContact&&(a.infected=!0,this.has_infected+=1)}}catch(r){i.e(r)}finally{i.f()}}}]),e}();function y(e){var t=Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2));return t<.01?[0,0]:[e[0]/t,e[1]/t]}var b=function(e){Object(g.a)(i,e);var t=Object(m.a)(i);function i(e,n,a){var r,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0;return Object(_.a)(this,i),(r=t.call(this,e,n,a,s,o,c)).infected=l,r.steps_since_infection=h,r.className="Susceptible",r.duration=r.model.duration_mean+w(-1,1),r}return Object(p.a)(i,[{key:"step",value:function(){var e=-1,t=-1;return this.infected&&this.steps_since_infection>this.model.steps_till_symptoms?Math.floor(this.steps_since_infection/this.model.steps_each_day)>this.duration?t=this.unique_id:Math.random()<this.model.infection_recoginition_probability?e=this.unique_id:(this.spread_infection(),this.hotspot_move(),this.spread_infection(),this.steps_since_infection+=1):this.infected&&(this.steps_since_infection+=1),this.hotspot_move(),[t,e]}}]),i}(v);function w(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var k=function(e){Object(g.a)(i,e);var t=Object(m.a)(i);function i(e,n,a){var r,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,l=(arguments.length>5&&void 0!==arguments[5]&&arguments[5],arguments.length>6&&void 0!==arguments[6]&&arguments[6],arguments.length>7&&void 0!==arguments[7]?arguments[7]:0);return Object(_.a)(this,i),(r=t.call(this,e,n,a,s,o,l)).className="Removed",r}return Object(p.a)(i,[{key:"step",value:function(){this.hotspot_move()}}]),i}(v),E=function(e){Object(g.a)(i,e);var t=Object(m.a)(i);function i(e,n,a){var r,s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;return Object(_.a)(this,i),(r=t.call(this,e,n,a,s,o,h)).infected=!0,r.steps_since_infection=l,r.className="Infected",r.duration=r.model.duration_mean+j(-1,1),r}return Object(p.a)(i,[{key:"step",value:function(){var e=-1;return Math.floor(this.steps_since_infection/this.model.steps_each_day)>this.duration?e=this.unique_id:(this.spread_infection(),this.hotspot_move(),this.spread_infection(),this.steps_since_infection+=1),e}}]),i}(v);function j(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var O=function(){function e(t,i){var n=this;Object(_.a)(this,e),this.width=t,this.height=i,this.agent_size=1,this.agent_list=[],this.lc=Object(o.a)(Array(this.height)).map((function(e){return Array(n.width).fill(-1)})),this.ll=new Array,this.ll[0]=[-1,-1,[0,0]],this.home_multiplier=.75,this.work_multiplier=1,this.repulsion_force_multiplier=2,this.attractive_points=new Array,this.load_world_layout("work")}return Object(p.a)(e,[{key:"load_world_layout",value:function(e){"work"==e&&(this.add_attraction_at([Math.floor(this.width/5),Math.floor(4*this.height/5)],this.work_multiplier,["work"],-1,1),this.add_attraction_at([Math.floor(4*this.width/5),Math.floor(this.height/5)],this.work_multiplier,["work"],-1,2),this.add_attraction_at([Math.floor(2*this.width/5),Math.floor(this.height/5)],this.work_multiplier,["work"],-1,3),this.add_attraction_at([Math.floor(4*this.width/5),Math.floor(1*this.height/2)],this.work_multiplier,["morning","afterwork"],20,-1,"park"))}},{key:"add_attraction_at",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"default";this.attractive_points.push([e,t,i,n,a,r])}},{key:"get_local_repulsion_positions",value:function(e){if(e.length>0){var t,i=new Array,n=this.agent_list.filter((function(t){return e.includes(t[0])})),a=Object(f.a)(n);try{for(a.s();!(t=a.n()).done;){var r=t.value;i.push(r[1])}}catch(s){a.e(s)}finally{a.f()}return i}return[]}},{key:"get_potential_force",value:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,a=0,r=0,s=0,o=0,l=this.inRange_linked_cell(e.position,e.unique_id,e.model.repulsion_range),h=this.get_local_repulsion_positions(l),c=this.agent_list.filter((function(t){return t[0]==e.unique_id}))[0],u=Object(f.a)(h);try{for(u.s();!(t=u.n()).done;){var d=t.value,_=M(e.position,d),p=this.repulsion_force_multiplier/Math.pow(_,2)*(1/_-1/(e.model.repulsion_range+.1));_>.001&&(a+=-p*(e.position[0]-d[0])/_,r+=-p*(e.position[1]-d[1])/_)}}catch(w){u.e(w)}finally{u.f()}var m,g=Object(f.a)(this.attractive_points);try{for(g.s();!(m=g.n()).done;){var v=m.value;if(v[2].includes(e.model.current_mode)&&!e.model.exit_lock)((_=M(e.position,v[0]))<v[3]||-1===v[3])&&(c[3]===v[4]||-1===v[4])&&S("Infected"==e.className,e.model.stay_at_home)&&(s+=-v[1]*(e.position[0]-v[0][0])/_,o+=-v[1]*(e.position[1]-v[0][1])/_)}}catch(w){g.e(w)}finally{g.f()}0===s&&0===o&&((_=M(e.position,c[2]))>.001&&(s=-this.home_multiplier*(e.position[0]-c[2][0])/_,o=-this.home_multiplier*(e.position[1]-c[2][1])/_));e.model.stronger_repulsion&&(n+=n);var y=i*s-n*a,b=i*o-n*r;return[y,b]}},{key:"reset_linked_cell",value:function(e){var t=this;this.lc=Object(o.a)(Array(Math.floor(this.height/e)+1)).map((function(i){return Array(Math.floor(t.width/e)+1).fill(-1)})),this.current_range=e,this.ll.splice(0,this.ll.length),this.ll[0]=[-1,-1,[0,0]]}},{key:"update_linked_cell",value:function(e){this.reset_linked_cell(e);var t,i=0,n=Object(f.a)(this.agent_list);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=Math.floor(a[1][0]/e),s=Math.floor(a[1][1]/e);this.ll[i]=[this.lc[r][s],a[0],a[1]],this.lc[r][s]=i,i++}}catch(o){n.e(o)}finally{n.f()}}},{key:"uids_in_cell_linked_cell",value:function(e,t){var i,n=new Array;for(i=this.lc[e][t];-1!=this.ll[i][0];)n.push(this.ll[i][1]),i=this.ll[i][0];return n}},{key:"inRange_linked_cell",value:function(e,t,i){var n,a,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n=Math.floor(e[0]/i),a=Math.floor(e[1]/i);var s,o=new Array;if((s=this.lc[n][a])>=0)for(;-1!=this.ll[s][0];)t!=this.ll[s][1]&&(r?o.push([this.ll[s][1],this.ll[s][2]]):o.push(this.ll[s][1])),s=this.ll[s][0];return o}},{key:"inRange_all_uids_linked_cell",value:function(e,t){var i,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=Math.floor(e[0]/t),r=Math.floor(e[1]/t),s=new Array;for(i=this.lc[a][r];-1!=this.ll[i][0];)n?s.push([this.ll[i][1],this.ll[i][2]]):s.push(this.ll[i][1]),i=this.ll[i][0];return s}},{key:"add_agent",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.agent_list.push([e.unique_id,e.position,t,i])}},{key:"get_agent_attributes",value:function(e){return this.agent_list.filter((function(t,i,n){return t[0]==e.unique_id}))}},{key:"remove_agent",value:function(e){if("undefined"!==e.unique_id){var t=this.agent_list.filter((function(t,i,n){return t[0]!=e.unique_id}));t.length==this.agent_list.length-1?this.agent_list=t:console.log("Error removing agent from world. UID not valid")}else console.log("Error setting up new agents")}},{key:"get_random_position_empty",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;do{var t,i=Math.floor(Math.random()*this.width),n=Math.floor(Math.random()*this.height),a=this.agent_list.filter((function(e){return M(e[1],[i,n]<.5)})),r=!0,s=Object(f.a)(this.attractive_points);try{for(s.s();!(t=s.n()).done;){var o=t.value;M(o[0],[i,n])<=e&&(r=!1)}}catch(l){s.e(l)}finally{s.f()}}while(0!=a.length||0==r);return[i,n]}},{key:"correct_boundaries",value:function(e){return e[0]<0?e[0]=0:e[0]>this.width-1&&(e[0]=this.width-1),e[1]<0?e[1]=0:e[1]>this.height-1&&(e[1]=this.height-1),e}},{key:"get_agents_inRange",value:function(e,t){var i,n=new Array,a=this.inRange_linked_cell(e.position,e.unique_id,e.model.repulsion_range,!0),r=Object(f.a)(a);try{for(r.s();!(i=r.n()).done;){var s=i.value;M(e.position,s[1])<t&&n.push(s[0])}}catch(o){r.e(o)}finally{r.f()}return n}},{key:"move_agent",value:function(e,t){var i=this.agent_list.findIndex((function(t){return t[0]==e.unique_id}));this.agent_list[i].length?this.agent_list[i][1]=t:console.log("Error moving agent")}}]),e}();function M(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function S(e,t){return!(e&&t)}var x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.25,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.8,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:400,l=arguments.length>7&&void 0!==arguments[7]&&arguments[7],h=arguments.length>8&&void 0!==arguments[8]&&arguments[8],c=arguments.length>9&&void 0!==arguments[9]&&arguments[9];Object(_.a)(this,e),this.population=t,this.initial_infected=i,this.infection_radius=n,this.infection_probability_onContact=a,this.duration_mean=r,this.infection_recoginition_probability=s,this.max_step=o,this.repulsion_range=5,this.steps_till_symptoms=60,this.width=50,this.height=50,this.stay_at_home=l,this.stronger_repulsion=h,this.exit_lock=c,this.steps_each_day=70,this.step_num=0,this.day=0,this.current_mode="night",this.schedule={night:9,morning:19,work:44,afterwork:58,evening:69},this.schedule_random_activity={night:.2,morning:1.5,work:.2,afterwork:1,evening:.5},this.schedule_speed={night:.75,morning:1.5,work:2,afterwork:1.75,evening:1.25}}return Object(p.a)(e,[{key:"reset",value:function(){"undefined"!==typeof this.s_list&&delete this.s_list,"undefined"!==typeof this.r_list&&delete this.r_list,"undefined"!==typeof this.i_list&&delete this.i_list,"undefined"!==typeof this.space&&delete this.space}},{key:"initialize",value:function(){var e;this.infection_radius>this.repulsion_range&&(console.log("Error: Infection range has to be smaller or equal to repulsion range. Set to repulsion range"),this.infection_radius=this.repulsion_range),this.s_list=[],this.r_list=[],this.i_list=[],this.old_R=new Array,this.old_R.push(0),this.old_I=new Array,this.old_I.push(this.initial_infected),this.old_S=new Array,this.old_S.push(this.population-this.initial_infected),this.R_array=new Array,this.space=new O(this.width,this.height),this.day=0,this.step_num=0,this.current_mode="night";var t,i=Object(f.a)(R(1,this.population-this.initial_infected));try{for(i.s();!(t=i.n()).done;){e=t.value;var n=this.space.get_random_position_empty(8),a=new b(e,n,this,!1,n);this.s_list.push(a),this.space.add_agent(a,n,I(1,3))}}catch(l){i.e(l)}finally{i.f()}var r,s=Object(f.a)(R(e+1,e+this.initial_infected));try{for(s.s();!(r=s.n()).done;){var o=r.value;n=this.space.get_random_position_empty(8),a=new E(o,n,this,!1,n),this.i_list.push(a),this.space.add_agent(a,a.home,I(1,3))}}catch(l){s.e(l)}finally{s.f()}}},{key:"set_stay_at_home",value:function(e){this.stay_at_home=e}},{key:"set_exit_lock",value:function(e){this.exit_lock=e}},{key:"set_stronger_repulsion",value:function(e){this.stronger_repulsion=e}},{key:"set_spread_probability",value:function(e){this.infection_probability_onContact=e}},{key:"move_to_r",value:function(e,t){var i,n,a=Object(f.a)(e);try{for(a.s();!(n=a.n()).done;){if(i=n.value,"s"==t){var r=this.s_list.filter((function(e,t,n){return e.unique_id===i}))[0];this.s_list=this.s_list.filter((function(e,t,n){return e.unique_id!==i})),this.space.remove_agent(r)}else if("i"==t){r=this.i_list.filter((function(e,t,n){return e.unique_id===i}))[0];this.i_list=this.i_list.filter((function(e,t,n){return e.unique_id!==i})),this.space.remove_agent(r)}else console.log("Error switching class to Removed");var s=new k(r.unique_id,r.position,this,r.now_in_center,r.home);s.has_infected=r.has_infected,this.r_list.push(s),this.space.add_agent(s,s.home,I(1,3))}}catch(o){a.e(o)}finally{a.f()}}},{key:"move_to_i",value:function(e){var t,i,n=Object(f.a)(e);try{for(n.s();!(i=n.n()).done;){t=i.value;var a=this.s_list.filter((function(e,i,n){return e.unique_id===t}))[0];this.s_list=this.s_list.filter((function(e,i,n){return e.unique_id!==t}));var r=this.space.get_agent_attributes(a);this.space.remove_agent(a);var s=new E(a.unique_id,a.position,this,a.now_in_center,a.home,a.steps_since_infection);s.has_infected=a.has_infected,this.i_list.push(s),this.space.add_agent(s,s.home,r[0][3])}}catch(o){n.e(o)}finally{n.f()}}},{key:"step_s",value:function(){var e=[],t=[];for(var i in this.s_list){var n=this.s_list[i].step(),a=Object(h.a)(n,2),r=a[0],s=a[1];r>=0?e.push(r):s>=0&&t.push(s)}e.length>0?this.move_to_r(e,"s"):t.length>0&&this.move_to_i(t);var o=this.s_list.filter((function(e){return!e.infected}));return[o.length,this.s_list.length-o.length]}},{key:"step_i",value:function(){var e=[];for(var t in this.i_list){var i=this.i_list[t].step();i>=0&&e.push(i)}return e.length>0&&this.move_to_r(e,"i"),this.i_list.length}},{key:"step_r",value:function(){for(var e in this.r_list)this.r_list[e].step();return this.r_list.length}},{key:"calculate_R0",value:function(e,t,i){var n=this.old_R.slice(-this.steps_each_day),a=n.reduce((function(e,t){return e+t}),0),r=(this.steps_each_day*i-a)/n.length||0,s=this.old_I.slice(-this.steps_each_day),o=s.reduce((function(e,t){return e+t}),0),l=(this.steps_each_day*t-o)/s.length||0,h=r/t+.01;this.old_R.push(i),this.old_S.push(e),this.old_I.push(t);var c=(l/(h*t)+1)*this.population/e;return this.day>=1?(console.log("R0:"+c),c):0}},{key:"calculate_mode",value:function(){var e,t=this.step_num%this.steps_each_day;return t<=this.schedule.night?e="night":t>this.schedule.night&&t<=this.schedule.morning?e="morning":t>this.schedule.morning&&t<=this.schedule.work?e="work":t>this.schedule.work&&t<=this.schedule.afterwork?e="afterwork":t>this.schedule.afterwork&&t<=this.schedule.evening&&(e="evening"),e}},{key:"step",value:function(){this.space.update_linked_cell(this.repulsion_range),this.current_mode=this.calculate_mode();var e=this.step_s(),t=this.step_i(),i=this.step_r(),n=this.calculate_R0(e[0],t+e[1],i);return this.R_array.push(n),console.log("Day: "+this.day),console.log("Mode: "+this.current_mode),console.log("Step - day-cycle: "+this.step_num%this.steps_each_day),this.step_num+=1,this.day=Math.floor(this.step_num/this.steps_each_day),t+e[1]==0}},{key:"run",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,i,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.reset(),this.initialize(),t=Object(f.a)(R(1,this.max_step)),e.prev=3,t.s();case 5:if((i=t.n()).done){e.next=16;break}if(n=i.value,console.log("Step: "+n),!this.step()){e.next=12;break}return console.log("Reached end of Simulation after "+n+"steps."),e.abrupt("break",16);case 12:return e.next=14,C(200);case 14:e.next=5;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),t.e(e.t0);case 21:return e.prev=21,t.f(),e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[3,18,21,24]])})));return function(){return e.apply(this,arguments)}}()}]),e}();function R(e,t){for(var i=[],n=e;n<=t;n++)i.push(n);return i}function C(e){return new Promise((function(t){return setTimeout(t,e)}))}function I(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var q,D,A,P,z,F,T,B,L=i(271),N=i(274),U=i(264),W=i(114),Y=i(265),H=i(263),G=i(272),X=i(266),J=i(273),$=i(267),K=i(268),Q=i(269),V=i(15),Z=i(103),ee=i.n(Z),te=i(104),ie=i.n(te),ne=i(105),ae=i.n(ne),re=i(106),se=i.n(re),oe=i(64),le={},he=[],ce=0,ue=a.a.memo((function(e){var t=e.worldState,i=e.worldWidth,r=e.worldHeight,s=e.stepDuration,o=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(!z&&i&&r){z=new V.a({width:600,height:600,transparent:!0,resizeTo:o.current,autoDensity:!0}),F=new V.b,z.stage.addChild(F),o.current.appendChild(z.view);var e=new V.c;e.beginFill(0),e.lineStyle(0),e.drawCircle(600/i,600/r,Math.min(600/i,600/r)),e.endFill(),q=z.renderer.generateTexture(e),(e=new V.c).beginFill(16711680),e.lineStyle(0),e.drawCircle(600/i,600/r,Math.min(600/i,600/r)),e.endFill(),D=z.renderer.generateTexture(e),(e=new V.c).beginFill(255),e.lineStyle(0),e.drawCircle(600/i,600/r,Math.min(600/i,600/r)),e.endFill(),A=z.renderer.generateTexture(e),(e=new V.c).beginFill(65280),e.lineStyle(0),e.drawCircle(600/i,600/r,Math.min(600/i,600/r)),e.endFill(),P=z.renderer.generateTexture(e)}}),[i,r]),Object(n.useEffect)((function(){z&&F&&r&&i&&s&&!isNaN(600)&&(z.ticker.remove(B),B=function(e){ce+=e/V.h.TARGET_FPMS/1e3,Object.keys(le).forEach((function(e){var t=le[e],n=Math.min(z.renderer.width/i,z.renderer.height/r);t.sprite.x=t.oldPos[0]*(z.renderer.width/i)+(t.agent.position[0]*(z.renderer.width/i)-t.oldPos[0]*(z.renderer.width/i))*Math.min(ce/s,1),t.sprite.y=t.oldPos[1]*(z.renderer.height/r)+(t.agent.position[1]*(z.renderer.height/r)-t.oldPos[1]*(z.renderer.height/r))*Math.min(ce/s,1),t.sprite.width=n,t.sprite.height=n})),he.forEach((function(e){var t=Math.min(e.strengthFactor*z.renderer.width,e.strengthFactor*z.renderer.height);e.sprite.x=e.posX*(z.renderer.width/i)-t/2,e.sprite.y=e.posY*(z.renderer.height/r)-t/2,e.sprite.width=t,e.sprite.height=t})),T&&(T.x=(z.renderer.width-T.width)/2,T.y=(z.renderer.height-T.height)/2)},z.ticker.add(B))}),[z,F,r,i,s]),Object(n.useEffect)((function(){z&&F&&t.hotSpots&&t.hotSpots.forEach((function(e){var t;if(e.group<0&&("default"===e.tag||"park"===e.tag)){var n=new V.c;n.beginFill(65535,.2),n.lineStyle(0),n.drawCircle(600*e.strength,600*e.strength,Math.min(600*e.strength,600*e.strength)),n.endFill(),t=z.renderer.generateTexture(n);var a=e.range/i}else if(1==e.group&&"default"===e.tag){t=V.f.from(ee.a);a=.2*e.strength}else if(2==e.group&&"default"===e.tag){t=V.f.from(ie.a);a=.2*e.strength}else if(3==e.group&&"default"===e.tag){t=V.f.from(ae.a);a=.2*e.strength}var r=new V.d(t);if(F.addChild(r),he.push({sprite:r,posX:e.pos[0],posY:e.pos[1],strengthFactor:a}),"park"===e.tag){t=V.f.from(se.a);a=.2*e.strength;var s=new V.d(t);he.push({sprite:s,posX:e.pos[0],posY:e.pos[1],strengthFactor:a}),F.addChild(s)}}))}),[z,F]),Object.keys(le).forEach((function(e){var i=t.agentList.findIndex((function(t){return t.unique_id==e}));-1===i?(F.removeChild(le[e].sprite),delete le[e]):(le[e].oldPos=le[e].agent.position,le[e].oldState=le[e].agent.state,le[e].agent=t.agentList[i])})),z&&F&&t&&t.agentList.forEach((function(e){var t,i;e.unique_id in le?t=le[e.unique_id].sprite:(t=new V.d(q),F.addChild(t),le[e.unique_id]={text:i,sprite:t,agent:e,oldPos:e.position,oldState:e.state}),"infected"==e.state?(t.texture=D,"infected"!==le[e.unique_id].oldState?t.filters=[new oe.a({distance:15,outerStrength:2,color:16711680})]:t.filters=[]):"infected_unrecognized"==e.state?(t.texture=A,"infected_unrecognized"!==le[e.unique_id].oldState?t.filters=[new oe.a({distance:15,outerStrength:2,color:255})]:t.filters=[]):"recovered"==e.state?(t.texture=P,"recovered"!==le[e.unique_id].oldState?t.filters=[new oe.a({distance:15,outerStrength:2,color:65280})]:t.filters=[]):"susceptible"==e.state&&(t.texture=q)})),!z||"stopped"!=t.state&&"paused"!=t.state?z&&F&&(F.filters=[],z.stage.removeChild(T)):(z.stage.removeChild(T),F.filters=[new V.g.BlurFilter(12,4,1,5)],T=new V.e("The simulation is ".concat(t.state,"."),{fontFamily:"Arial",fontSize:24,fill:0,align:"center"}),z.stage.addChild(T),T.filters=[]),ce=0,a.a.createElement("div",{style:{width:"100%",height:"600px"},ref:o})})),de=i(111),fe=i.n(de),_e=i(110),pe=i.n(_e),me=a.a.memo((function(e){var t=e.time,i=e.mode,n=e.day,r=void 0===n?0:n,s=(e.R,"night"===i||"evening"===i);return a.a.createElement(H.a,null,a.a.createElement(L.a,{display:"flex",direction:"column",alignItems:"center",justify:"center"},a.a.createElement(W.a,{variant:"overline"},"Day: ",r)),a.a.createElement(L.a,{display:"flex",direction:"column",alignItems:"center",justify:"center",p:2},s&&a.a.createElement(pe.a,null),!s&&a.a.createElement(fe.a,null),"\xa0\xa0",a.a.createElement(W.a,{variant:"overline"},t)))})),ge=a.a.memo((function(e){var t=e.chartData,i=void 0===t?0:t,n=(e.R0,0),r=0,s=0,o=0;return i.datasets.length>0&&(n=i.datasets[2].data.slice(-1),o=i.datasets[0].data.slice(-1),r=i.datasets[1].data.slice(-1),s=i.datasets[3].data.slice(-1)),a.a.createElement(H.a,null,a.a.createElement(L.a,null,a.a.createElement(W.a,{variant:"overline"},"Susceptible: ",n)),a.a.createElement(L.a,null,a.a.createElement(W.a,{variant:"overline"},"Infected and tested: ",r)),a.a.createElement(L.a,null,a.a.createElement(W.a,{variant:"overline"},"Infected (red + blue): ",s)),a.a.createElement(L.a,null,a.a.createElement(W.a,{variant:"overline"},"Recovered: ",o)))})),ve=i(112),ye=a.a.memo((function(e){var t=e.chartData,i=e.chartRef;return t&&a.a.createElement(ve.a,{ref:i,data:t,showTooltips:!1,options:{maintainAspectRatio:!1,responsive:!0,elements:{point:{radius:0}}}})})),be=(i(232),i(65)),we=null,ke=null,Ee=[];var je=function(){be.a.initialize("UA-161194303-3"),be.a.pageview(window.location.pathname),console.log("Init GA:"+be.a);var e=Object(n.useState)({agentList:[],hotSpots:[],chartData:{labels:[],datasets:[]},time:"00:00",dayPhase:"day",state:"stopped",day:0,R:1}),t=Object(h.a)(e,2),i=t[0],r=t[1],s=Object(n.useState)(void 0),c=Object(h.a)(s,2),u=c[0],d=c[1],f=Object(n.useState)(void 0),_=Object(h.a)(f,2),p=_[0],m=_[1],g=Object(n.useState)("stopped"),v=Object(h.a)(g,2),y=(v[0],v[1],Object(n.useState)(3)),b=Object(h.a)(y,2),w=b[0],k=b[1],E=Object(n.useState)(100),j=Object(h.a)(E,2),O=j[0],M=j[1],S=Object(n.useState)(.5),R=Object(h.a)(S,2),C=R[0],I=R[1],q=Object(n.useState)(2),D=Object(h.a)(q,2),A=D[0],P=D[1],z=Object(n.useState)(.01),F=Object(h.a)(z,2),T=F[0],B=F[1],V=Object(n.useState)(!1),Z=Object(h.a)(V,2),ee=Z[0],te=Z[1],ie=Object(n.useState)(!1),ne=Object(h.a)(ie,2),ae=ne[0],re=ne[1],se=Object(n.useState)(!1),oe=Object(h.a)(se,2),le=oe[0],he=oe[1],ce=Object(n.useState)(5),de=Object(h.a)(ce,2),fe=de[0],_e=de[1],pe=Object(n.useState)("unrestricted"),ve=Object(h.a)(pe,2),je=(ve[0],ve[1],Object(n.useState)(.3)),Oe=Object(h.a)(je,2),Me=Oe[0],Se=Oe[1],xe=Object(n.useRef)(null);return Object(n.useEffect)((function(){(ke=new x(O,w,A,T,20,C,999999999999,ae,ee,le)).reset(),ke.initialize(),m(ke.height),d(ke.width)}),[]),Object(n.useEffect)((function(){var e=Object(l.a)({},i),t=ke.space.attractive_points.map((function(e){return{pos:e[0],strength:e[1],range:e[3],group:e[4],tag:e[5]}}));e.hotSpots=t,r(e)}),[ke]),Object(n.useEffect)((function(){clearInterval(we),"running"===i.state?we=setInterval((function(){var e=Object(l.a)({},i),t=0,n=0,a=0,s=0,h=ke.step(),c=ke.step_num%ke.steps_each_day*(24/ke.steps_each_day),u=new Date;u.setSeconds(0),u.setMinutes(c%1*60),u.setHours(c),e.time=u.toLocaleTimeString("en-US"),e.dayPhase=ke.current_mode,e.day=ke.day,e.R=ke.R_array[-1];var d=[],f=ke.s_list.map((function(e){return!0===e.infected?(e.state="infected_unrecognized",n+=1):(e.state="susceptible",a+=1),Object.assign({},e)}));d.push.apply(d,Object(o.a)(f));var _=ke.i_list.map((function(e){return e.state="infected",t+=1,Object.assign({},e)}));d.push.apply(d,Object(o.a)(_));var p=ke.r_list.map((function(e){return e.state="recovered",s+=1,Object.assign({},e)}));d.push.apply(d,Object(o.a)(p)),e.agentList=d,h&&(clearInterval(we),e.state="stopped");var m={infected:t,infectedUnrecognized:n,recovered:s,susceptible:a},g=Object(o.a)(Ee);g.push(m),Ee=g;var v=[],y={label:"Susceptible",fill:!0,lineTension:.1,borderColor:"rgba(0,0,0,1)",data:[]},b={label:"Infected",fill:!0,lineTension:.1,borderColor:"rgba(255,0,0,1)",data:[]},w={label:"All Infected",fill:!0,lineTension:.1,borderColor:"rgba(255,0,0,0.4)",data:[]},k={label:"Recovered",fill:!0,lineTension:.1,borderColor:"rgba(0,255,0,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,data:[]};g.forEach((function(e,t){y.data.push(e.susceptible),b.data.push(e.infected),k.data.push(e.recovered),w.data.push(e.infected+e.infectedUnrecognized),v.push(t)}));var E={labels:v,datasets:[b,k,y,w]};e.chartData=E,r(e)}),1e3*Me):clearInterval(we)}),[i.state,Me]),a.a.createElement(L.a,{display:"flex",flexDirection:"column",className:"App",height:"100%"},a.a.createElement(N.a,{position:"static"},a.a.createElement(U.a,null,a.a.createElement(W.a,{variant:"h6"},"SIR Playground"))),a.a.createElement(L.a,{mt:2,mb:2,flexGrow:1},a.a.createElement(Y.a,null,a.a.createElement(L.a,null,a.a.createElement(H.a,{container:!0,spacing:2},a.a.createElement(H.a,{item:!0,xs:12,sm:12,md:12,lg:4},a.a.createElement(L.a,{p:2},a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Initial Infected"),a.a.createElement(G.a,{valueLabelDisplay:"auto",step:1,marks:!0,min:1,max:10,value:w,onChange:function(e,t){k(t)}}),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Population"),a.a.createElement(G.a,{valueLabelDisplay:"auto",step:25,marks:!0,min:25,max:500,value:O,onChange:function(e,t){M(t)}}),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Probability Recognized"),a.a.createElement(G.a,{valueLabelDisplay:"auto",step:.1,marks:!0,min:0,max:1,value:C,onChange:function(e,t){I(t)}}),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Infection Radius"),a.a.createElement(G.a,{valueLabelDisplay:"auto",step:1,marks:!0,min:2,max:4,value:A,onChange:function(e,t){P(t)}}),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Mean Infection Duration"),a.a.createElement(G.a,{valueLabelDisplay:"auto",step:1,marks:!0,min:3,max:8,value:fe,onChange:function(e,t){_e(t)}}),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Spread Probability"),a.a.createElement("br",null),a.a.createElement(X.a,{control:a.a.createElement(J.a,{checked:T>=.1,onChange:function(e){e.target.checked?(B(.1),ke.set_spread_probability(.1)):(B(.01),ke.set_spread_probability(.01))}}),label:"Increased Probability"}),a.a.createElement("br",null),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Social distancing"),a.a.createElement("br",null),a.a.createElement(X.a,{control:a.a.createElement(J.a,{checked:ee,onChange:function(e){e.target.checked?(te(!0),ke.set_stronger_repulsion(!0)):(te(!1),ke.set_stronger_repulsion(!1))}}),label:"Try to hold distance"}),a.a.createElement("br",null),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Stay at home"),a.a.createElement("br",null),a.a.createElement(X.a,{control:a.a.createElement(J.a,{checked:ae,onChange:function(e){e.target.checked?(re(!0),ke.set_stay_at_home(!0)):(re(!1),ke.set_stay_at_home(!1))}}),label:"Infected"}),a.a.createElement("br",null),a.a.createElement(X.a,{control:a.a.createElement(J.a,{checked:le,onChange:function(e){e.target.checked?(he(!0),re(!0),ke.set_stay_at_home(!0),ke.set_exit_lock(!0)):(he(!1),re(!1),ke.set_stay_at_home(!1),ke.set_exit_lock(!1))}}),label:"Everybody"}),a.a.createElement("br",null),a.a.createElement(L.a,{mt:2,mb:2},a.a.createElement($.a,null)),a.a.createElement(W.a,{variant:"overline",gutterBottom:!0},"Step Period (s)"),a.a.createElement(G.a,{valueLabelDisplay:"auto",step:.1,marks:!0,min:.1,max:2,value:Me,onChange:function(e,t){Se(t)}}),a.a.createElement(L.a,{mt:2},a.a.createElement(K.a,{color:"primary",variant:"contained",size:"large",onClick:function(){var e=Object(l.a)({},i);"running"==i.state?(e.state="paused",clearInterval(we)):("stopped"==i.state&&((ke=new x(O,w,A,T,fe,C,999999999999,ae,ee,le)).reset(),ke.initialize(),m(ke.height),d(ke.width)),e.state="running"),r(e)}},"running"===i.state?"Pause":"Start"),"\xa0\xa0",a.a.createElement(K.a,{color:"primary",variant:"contained",size:"large",onClick:function(){var e=Object(l.a)({},i);Ee=[],e.state="stopped",r(e)}},"Reset")))),a.a.createElement(H.a,{item:!0,xs:12,sm:12,md:12,lg:6},a.a.createElement(L.a,{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},a.a.createElement(ue,{worldState:i,worldWidth:u,worldHeight:p,stepDuration:Me}),a.a.createElement(L.a,{height:"200px"},i.chartData&&a.a.createElement(ye,{chartData:i.chartData,chartRef:xe})))),a.a.createElement(H.a,{item:!0,xs:12,sm:12,md:12,lg:2},a.a.createElement(me,{time:i.time,mode:i.dayPhase,day:i.day,R:i.R}),a.a.createElement(ge,{chartData:i.chartData})))),a.a.createElement(L.a,{display:"flex",justifyContent:"center"},a.a.createElement(W.a,{variant:"caption"},"SIR-Playground created by"," ",a.a.createElement(Q.a,{href:"https://github.com/SYoy"},"SYoy")," and"," ",a.a.createElement(Q.a,{href:"https://github.com/dani2112"},"dani2112"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.216af7b3.chunk.js.map