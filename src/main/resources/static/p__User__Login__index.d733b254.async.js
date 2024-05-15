"use strict";(self.webpackChunkmidjourney_proxy_pool_admin=self.webpackChunkmidjourney_proxy_pool_admin||[]).push([[366],{2067:function(w,E,e){e.r(E);var b=e(15009),d=e.n(b),I=e(97857),v=e.n(I),T=e(99289),M=e.n(T),B=e(5574),y=e.n(B),U=e(99702),R=e(66927),S=e(87547),W=e(94149),F=e(82554),h=e(87297),P=e(28906),o=e(35312),j=e(2453),K=e(11665),O=e(67294),Z=e(73935),N=e(67610),a=e(85893),k=function(){var s=useEmotionCss(function(r){var i=r.token;return{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:i.colorPrimaryActive}}});return _jsxs(_Fragment,{children:[_jsx(AlipayCircleOutlined,{className:s},"AlipayCircleOutlined"),_jsx(TaobaoCircleOutlined,{className:s},"TaobaoCircleOutlined"),_jsx(WeiboCircleOutlined,{className:s},"WeiboCircleOutlined")]})},z=function(){var s=(0,P.l)(function(r){var i=r.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:i.borderRadius,":hover":{backgroundColor:i.colorBgTextHover}}});return(0,a.jsx)("div",{className:s,"data-lang":!0,children:o.SelectLang&&(0,a.jsx)(o.SelectLang,{})})},q=function(s){var r=s.content;return _jsx(Alert,{style:{marginBottom:24},message:r,type:"error",showIcon:!0})},H=function(){var s=(0,O.useState)({}),r=y()(s,2),i=r[0],$=r[1],G=(0,O.useState)("account"),x=y()(G,2),A=x[0],V=x[1],D=(0,o.useModel)("@@initialState"),m=D.initialState,Q=D.setInitialState,J=(0,P.l)(function(){return{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}),t=(0,o.useIntl)(),X=function(){var f=M()(d()().mark(function l(c){var u,_,g,C,L;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,R.x4)(v()({},c));case 3:if(u=n.sent,u.code!==1){n.next=11;break}return j.ZP.success("\u767B\u5F55\u6210\u529F\uFF01"),n.next=8,m==null||(_=m.fetchUserInfo)===null||_===void 0?void 0:_.call(m);case 8:return g=n.sent,g&&((0,Z.flushSync)(function(){Q(function(Y){return v()(v()({},Y),{},{currentUser:g})})}),g.active?location.hash="#/welcome":location.hash="#/activate"),n.abrupt("return");case 11:C=t.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),console.log(u),j.ZP.error(C),$(u),n.next=22;break;case 17:n.prev=17,n.t0=n.catch(0),L=t.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),console.log(n.t0),j.ZP.error(L);case 22:case"end":return n.stop()}},l,null,[[0,17]])}));return function(c){return f.apply(this,arguments)}}(),ee=i.code,ae=i.description;return(0,a.jsxs)("div",{className:J,children:[(0,a.jsx)(o.Helmet,{children:(0,a.jsxs)("title",{children:[t.formatMessage({id:"menu.login",defaultMessage:"\u767B\u5F55\u9875"}),"- ",N.Z.title]})}),(0,a.jsx)(z,{}),(0,a.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,a.jsxs)(F.U,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,a.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"Midjourney Proxy Pool Admin",subTitle:" ",initialValues:{autoLogin:!0},onFinish:function(){var f=M()(d()().mark(function l(c){return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,X(c);case 2:case"end":return _.stop()}},l)}));return function(l){return f.apply(this,arguments)}}(),children:[(0,a.jsx)(K.Z,{activeKey:A,onChange:V,centered:!0,items:[{key:"account",label:t.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})}]}),A==="account"&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{name:"username",fieldProps:{size:"large",prefix:(0,a.jsx)(S.Z,{})},placeholder:t.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin"}),rules:[{required:!0,message:(0,a.jsx)(o.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,a.jsx)(h.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,a.jsx)(W.Z,{})},placeholder:t.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: admin"}),rules:[{required:!0,message:(0,a.jsx)(o.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]})]})}),(0,a.jsx)(U.Z,{})]})};E.default=H}}]);
