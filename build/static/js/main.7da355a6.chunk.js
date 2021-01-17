(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{14:function(n,e,t){},15:function(n,e,t){},18:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),l=t(8),s=t.n(l),r=(t(14),t(4)),o=t(2),c=(t(15),t(1)),m=t(6);var u=function(){var n=Object(a.useState)(!0),e=Object(o.a)(n,2),t=e[0],l=e[1],s=Object(a.useState)(!0),u=Object(o.a)(s,2),p=u[0],f=u[1],d=Object(a.useState)([1,2,3,4,5,6,7,8,9]),b=Object(o.a)(d,2),v=b[0],E=b[1],h=Object(a.useState)([1,2,3,4,5,6,7,8,9]),x=Object(o.a)(h,2),N=x[0],g=x[1],T=Object(a.useState)([1,2,3,4,5,6,7,8,9]),w=Object(o.a)(T,2),y=w[0],O=w[1],F=Object(a.useState)((function(){for(var n=[],e=1;e<=81;e++)n.push(e);return n})),k=Object(o.a)(F,2),j=k[0],S=k[1],C=Object(a.useRef)(10),L=function(){return Math.floor(Math.random()*v.length)};return i.a.createElement("div",{className:"App"},i.a.createElement("h3",{className:"doc-title"},"\u6700\u7b80\u5355\u7684\u8fc7\u6e21"),i.a.createElement("code",null,"\n.fade-leaveed {\n  opacity: 0;\n  transform: translateX(10px);\n}\n.fade-leaveing {\n  opacity: 0;\n  transform: translateX(50px);\n  transition: all 600ms ease-in;\n}\n.fade-entering {\n  opacity: 1;\n  transition: all 200ms;\n}\n"),i.a.createElement("code",null,'\nimport { Transition } from \'react-flip-transition\';\n\nconst [state, setState] = useState(true);\n\n<button\n  onClick={() => setState(!state)}\n  className="doc-button"\n>\n  toggle\n</button>\n\n<Transition\n  name="fade"\n  animation={state}\n  duration={{enter: 200, leave: 600, }}\n>\n  <div>hello world</div>\n</Transition>\n'),i.a.createElement("button",{onClick:function(){return l(!t)},className:"doc-button"},"toggle"),i.a.createElement(c.Transition,{name:"fade",animation:t,duration:{enter:200,leave:600}},i.a.createElement("div",null,"hello world")),i.a.createElement("h3",{className:"doc-title"},"\u591a\u4e2a\u5143\u7d20\u8fc7\u6e21"),i.a.createElement("code",null,"\n.fade-leaveed {\n  opacity: 0;\n  transform: translateX(10px);\n}\n.fade-leaveing {\n  opacity: 0;\n  transform: translateX(50px);\n  transition: all 600ms ease-in;\n}\n.fade-entering {\n  opacity: 1;\n  transition: all 200ms;\n}\n"),i.a.createElement("code",null,'\nimport { Transition, Transitions } from \'react-flip-transition\'\n\nconst [state3, setState3] = useState(true);\n\n<button\n  onClick={() => setState3(!state3)}\n  className="doc-button"\n>\n  toggle\n</button>\n\n<Transitions\n  masterSwitch={state3}\n  prefix="fade"\n  interval={300}\n>\n  <ul>\n    <Transition unmount>\n      <li className="flip1-list-item">1</li>\n    </Transition>\n    <Transition unmount>\n      <li className="flip1-list-item">2</li>\n    </Transition>\n    <Transition unmount>\n      <li className="flip1-list-item">3</li>\n    </Transition>\n    <Transition unmount>\n      <li className="flip1-list-item">4</li>\n    </Transition>\n    <Transition unmount>\n      <li className="flip1-list-item">5</li>\n    </Transition>\n    <Transition unmount>\n      <li className="flip1-list-item">6</li>\n    </Transition>\n  </ul>\n</Transitions>\n'),i.a.createElement("button",{onClick:function(){return f(!p)},className:"doc-button"},"toggle"),i.a.createElement(c.Transitions,{masterSwitch:p,prefix:"fade",interval:300},i.a.createElement("ul",null,i.a.createElement(c.Transition,{unmount:!0},i.a.createElement("li",{className:"flip1-list-item"},"1")),i.a.createElement(c.Transition,{unmount:!0},i.a.createElement("li",{className:"flip1-list-item"},"2")),i.a.createElement(c.Transition,{unmount:!0},i.a.createElement("li",{className:"flip1-list-item"},"3")),i.a.createElement(c.Transition,{unmount:!0},i.a.createElement("li",{className:"flip1-list-item"},"4")),i.a.createElement(c.Transition,{unmount:!0},i.a.createElement("li",{className:"flip1-list-item"},"5")),i.a.createElement(c.Transition,{unmount:!0},i.a.createElement("li",{className:"flip1-list-item"},"6")))),i.a.createElement("h3",{className:"doc-title"},"\u5217\u8868\u8fc7\u6e21"),i.a.createElement("code",null,"\n.observer-list {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.observer-list-item {\n  margin-right: 10px;\n}\n.observer-leaveed {\n  opacity: 0;\n  transform: translateY(50px);\n}\n.observer-leaveing {\n  opacity: 0;\n  transform: translateY(50px);\n  transition: all 1s;\n}\n.observer-entering {\n  opacity: 1;\n  transition: all 1s;\n}\n"),i.a.createElement("code",null,'\nimport { Transition, Observer } from \'react-flip-transition\';\n\nconst [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);\n\n<Observer\n  wrapClass="observer-list"\n  wrap="div"\n>\n  {\n    list && list.map((item) => {\n      return (\n        <Transition\n          key={item}\n          name="observer"\n          duration={1000}\n        >\n          <div className="observer-list-item">{ item }</div>\n        </Transition>\n      )\n    })\n  }\n</Observer>\n'),i.a.createElement("button",{className:"doc-button",onClick:function(){v.splice(L(),0,C.current++),E(Object(r.a)(v))}},"Add"),i.a.createElement("button",{className:"doc-button",onClick:function(){v.splice(L(),1),E(Object(r.a)(v))}},"Remove"),i.a.createElement(c.Observer,{wrapClass:"observer-list",wrap:"div"},v&&v.map((function(n){return i.a.createElement(c.Transition,{key:n,name:"observer",duration:1e3},i.a.createElement("div",{className:"observer-list-item"},n))}))),i.a.createElement("h3",{className:"doc-title"},"\u6392\u5e8f\u8fc7\u6e21"),i.a.createElement("code",null,"\n.flip1-list-item {\n  padding: 6px 0;\n}\n.flip1-move {\n  transition: all 1s;\n}\n"),i.a.createElement("code",null,'\nimport { Flip, Flips, } from \'react-flip-transition\';\n\nconst [list2, setList2] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);\n\n<Flips\n  name="flip1"\n  wrap="ul"\n>\n  {\n    list2 && list2.map((item) => {\n      return (\n        <Flip key={item}>\n          <li className="flip1-list-item">{ item }</li>\n        </Flip>\n      );\n    })\n  }\n</Flips>\n'),i.a.createElement("button",{className:"doc-button",onClick:function(){g(Object(m.shuffle)(N))}},"Shuffle"),i.a.createElement(c.Flips,{name:"flip1",wrap:"ul"},N&&N.map((function(n){return i.a.createElement(c.Flip,{key:n},i.a.createElement("li",{className:"flip1-list-item"},n))}))),i.a.createElement("h3",{className:"doc-title"},"\u6392\u5e8f\u8fc7\u6e21\u4e2d\u6dfb\u52a0\u4e0e\u5220\u9664"),i.a.createElement("code",null,"\n.flip2-leaveed {\n  opacity: 0;\n  transform: translateY(50px);\n}\n.flip2-leaveing {\n  opacity: 0;\n  transform: translateY(50px);\n  transition: all 1s;\n}\n.flip2-entering {\n  opacity: 1;\n  transition: all 1s;\n}\n.flip2-move {\n  transition: all 1s;\n}\n"),i.a.createElement("code",null,'\nimport { Flip, Flips, } from \'react-flip-transition\';\n\nconst [list3, setList3] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);\n\n<Flips\n  wrapClass="observer-list"\n  wrap="div"\n  name="flip2"\n  inOutDuration={1000}\n>\n  {\n    list3 && list3.map((item) => {\n      return (\n        <Flip\n          key={item}\n        >\n          <div className="observer-list-item">{ item }</div>\n        </Flip>\n      )\n    })\n  }\n</Flips>\n'),i.a.createElement("button",{className:"doc-button",onClick:function(){O(Object(m.shuffle)(y))}},"Shuffle"),i.a.createElement("button",{className:"doc-button",onClick:function(){y.splice(L(),0,C.current++),O(Object(r.a)(y))}},"Add"),i.a.createElement("button",{className:"doc-button",onClick:function(){y.splice(L(),1),O(Object(r.a)(y))}},"Remove"),i.a.createElement(c.Flips,{wrapClass:"observer-list",wrap:"div",name:"flip2",inOutDuration:1e3},y&&y.map((function(n){return i.a.createElement(c.Flip,{key:n},i.a.createElement("div",{className:"observer-list-item"},n))}))),i.a.createElement("h3",{className:"doc-title"},"\u6392\u5e8f\u8fc7\u6e21\u548c\u591a\u7ef4\u8868\u683c"),i.a.createElement("code",null,"\n.matrix {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 234px;\n  height: 234px;\n}\n.matrix-item {\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  line-height: 24px;\n  border: 1px solid #eee;\n  text-align: center;\n}\n.matrix-move {\n  transition: all 1s;\n}\n"),i.a.createElement("code",null,'\nimport { Flip, Flips, } from \'react-flip-transition\';\n\nconst [list4, setList4] = useState(() => {\n  const result = [];\n  for (let i = 1; i <= 81; i++) {\n    result.push(i);\n  }\n  return result;\n});\n\n<Flips\n  wrapClass="matrix"\n  wrap="div"\n  name="matrix"\n>\n  {\n    list4 && list4.map((item) => {\n      return (\n        <Flip\n          key={item}\n        >\n          <div className="matrix-item">{ item }</div>\n        </Flip>\n      )\n    })\n  }\n</Flips>\n'),i.a.createElement("button",{className:"doc-button",onClick:function(){S(Object(m.shuffle)(j))}},"Shuffle"),i.a.createElement(c.Flips,{wrapClass:"matrix",wrap:"div",name:"matrix"},j&&j.map((function(n){return i.a.createElement(c.Flip,{key:n},i.a.createElement("div",{className:"matrix-item"},n))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},9:function(n,e,t){n.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7da355a6.chunk.js.map