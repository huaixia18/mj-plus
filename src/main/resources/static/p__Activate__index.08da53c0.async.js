"use strict";(self.webpackChunkmidjourney_proxy_pool_admin=self.webpackChunkmidjourney_proxy_pool_admin||[]).push([[26],{99041:function(q,c,u){u.r(c);var f=u(15009),D=u.n(f),g=u(99289),T=u.n(g),I=u(5574),s=u.n(I),Z=u(90930),L=u(48726),j=u(29905),_=u(15867),R=u(3363),C=u(4393),o=u(86250),l=u(42075),W=u(96365),P=u(2453),r=u(67294),K=u(27521),S=u(49354),B=u(66927),e=u(85893),U=L.Z.Paragraph,b=function(){var z=(0,r.useState)(sessionStorage.getItem("mj-active")==="true"),v=s()(z,2),h=v[0],G=v[1],$=(0,r.useState)(0),F=s()($,2),d=F[0],i=F[1],H=(0,r.useState)(""),p=s()(H,2),J=p[0],N=p[1],Q=(0,r.useState)(""),y=s()(Q,2),E=y[0],A=y[1],V=(0,r.useState)(!1),M=s()(V,2),X=M[0],x=M[1];(0,r.useEffect)(function(){h||(0,B.pC)().then(function(a){N(a)})});var Y=function(){return h?(0,e.jsx)(j.ZP,{status:"success",title:"\u670D\u52A1\u5DF2\u6FC0\u6D3B",subTitle:"\u53EF\u4EE5\u6B63\u5E38\u7EF4\u62A4\u8D26\u53F7\u3001\u67E5\u770B\u4EFB\u52A1\u5217\u8868\uFF0C\u63D0\u4F9Bmidjourney api\u63A5\u53E3\u4F9B\u5916\u90E8\u8C03\u7528\uFF1B\u672C\u7CFB\u7EDF\u7684\u7ED8\u56FE\u6D4B\u8BD5\u9875\uFF0C\u63D0\u4F9B\u4E86\u5E38\u7528\u7684\u7ED8\u56FE\u529F\u80FD",extra:[(0,e.jsx)(_.ZP,{type:"primary",onClick:function(){return location.hash="#/draw-test"},icon:(0,e.jsx)(K.Z,{}),children:"\u7ED8\u753B\u6D4B\u8BD5"},"draw"),(0,e.jsx)(_.ZP,{onClick:function(){return location.href="/doc"},icon:(0,e.jsx)(S.Z,{}),children:"API\u6587\u6863"},"api-doc")]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.ZP,{status:"warning",title:"\u5C1A\u672A\u6FC0\u6D3B\uFF01\u8BF7\u6309\u7167\u4E0B\u8FF0\u6B65\u9AA4\uFF0C\u6FC0\u6D3B\u670D\u52A1"}),(0,e.jsx)(R.Z,{size:"small",current:d,items:[{title:"\u590D\u5236\u673A\u5668\u7801"},{title:"\u83B7\u53D6\u6FC0\u6D3B\u7801"},{title:"\u6FC0\u6D3B"}]}),(0,e.jsx)(C.Z,{style:{marginTop:"20px"},children:k()})]})},k=function(){return d==0?(0,e.jsxs)(o.Z,{vertical:!0,children:[(0,e.jsx)(U,{copyable:!0,strong:!0,children:J}),(0,e.jsxs)("span",{children:["\u590D\u5236\u673A\u5668\u7801\u540E\uFF0C\u70B9\u51FB ",(0,e.jsx)(_.ZP,{type:"primary",onClick:function(){return i(1)},children:"\u4E0B\u4E00\u6B65"})]})]}):d==1?(0,e.jsxs)(o.Z,{vertical:!0,children:[(0,e.jsx)("span",{style:{marginBottom:"20px",fontSize:"15px",fontWeight:"500"},children:"\u673A\u5668\u7801\u53D1\u9001\u7ED9\u7BA1\u7406\u5458\uFF0C\u83B7\u53D6\u6FC0\u6D3B\u7801"}),(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(_.ZP,{onClick:function(){return i(0)},children:"\u4E0A\u4E00\u6B65"}),(0,e.jsx)(_.ZP,{type:"primary",onClick:function(){return i(2)},children:"\u4E0B\u4E00\u6B65"})]})]}):(0,e.jsxs)(o.Z,{vertical:!0,children:[(0,e.jsx)(l.Z,{children:(0,e.jsx)(_.ZP,{onClick:function(){return i(1)},children:"\u4E0A\u4E00\u6B65"})}),(0,e.jsxs)(l.Z.Compact,{style:{width:"100%",marginTop:"20px"},children:[(0,e.jsx)(W.Z,{placeholder:"\u8BF7\u8F93\u5165\u6FC0\u6D3B\u7801",value:E,onChange:w,onPressEnter:O}),(0,e.jsx)(_.ZP,{type:"primary",onClick:O,loading:X,children:"\u6FC0\u6D3B\u670D\u52A1"})]})]})},w=function(n){A(n.target.value)},O=function(){var a=T()(D()().mark(function n(){var m;return D()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(E){t.next=3;break}return P.ZP.error("\u8BF7\u8F93\u5165\u6FC0\u6D3B\u7801"),t.abrupt("return");case 3:return x(!0),t.next=6,(0,B.A2)(E);case 6:m=t.sent,x(!1),m.startsWith("\u6FC0\u6D3B\u6210\u529F")?(G(!0),A(""),sessionStorage.setItem("mj-active","true")):P.ZP.error(m);case 9:case"end":return t.stop()}},n)}));return function(){return a.apply(this,arguments)}}();return(0,e.jsx)(Z._z,{children:(0,e.jsx)(C.Z,{children:Y()})})};c.default=b}}]);