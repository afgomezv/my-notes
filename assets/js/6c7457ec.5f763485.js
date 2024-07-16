"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1443],{4807:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=r(4848),s=r(8453);const t={sidebar_position:3,title:"Ejemplos"},i=void 0,a={id:"graphql/example-one",title:"Ejemplos",description:"Query sin argumentos",source:"@site/data/graphql/example-one.md",sourceDirName:"graphql",slug:"/graphql/example-one",permalink:"/my-notes/data/graphql/example-one",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Ejemplos"},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/my-notes/data/graphql/instalacion"},next:{title:"Mutaciones",permalink:"/my-notes/data/graphql/mutations"}},l={},d=[{value:"Query sin argumentos",id:"query-sin-argumentos",level:2},{value:"Orig\xe9n de datos",id:"orig\xe9n-de-datos",level:3},{value:"Definici\xf3n de tipos",id:"definici\xf3n-de-tipos",level:3},{value:"Resolvers",id:"resolvers",level:3},{value:"Query con argumentos argumentos",id:"query-con-argumentos-argumentos",level:2},{value:"Orig\xe9n de datos",id:"orig\xe9n-de-datos-1",level:3},{value:"Definici\xf3n de tipos",id:"definici\xf3n-de-tipos-1",level:3},{value:"Resolvers",id:"resolvers-1",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"query-sin-argumentos",children:"Query sin argumentos"}),"\n",(0,o.jsx)(n.h3,{id:"orig\xe9n-de-datos",children:"Orig\xe9n de datos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const books = [\r\n  {\r\n    title: "Titulo libro 1",\r\n    author: "Autor libro 1",\r\n  },\r\n  {\r\n    title: "Titulo libro 2",\r\n    author: "Autor libro 2",\r\n  },\r\n];\n'})}),"\n",(0,o.jsx)(n.h3,{id:"definici\xf3n-de-tipos",children:"Definici\xf3n de tipos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const typeDefs = `\r\n    # comentarios\r\n    type Book {\r\n        title: String\r\n        author: String\r\n    }\r\n    type Query {\r\n        books: [Book]\r\n    }\r\n`;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const resolvers = {\r\n  Query: {\r\n    books: () => books,\r\n  },\r\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"query-con-argumentos-argumentos",children:"Query con argumentos argumentos"}),"\n",(0,o.jsx)(n.h3,{id:"orig\xe9n-de-datos-1",children:"Orig\xe9n de datos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'const books = [\r\n  {\r\n    id: 1,\r\n    title: "Titulo libro 1",\r\n    author: "Autor libro 1",\r\n  },\r\n  {\r\n    id: 2,\r\n    title: "Titulo libro 2",\r\n    author: "Autor libro 2",\r\n  },\r\n];\n'})}),"\n",(0,o.jsx)(n.h3,{id:"definici\xf3n-de-tipos-1",children:"Definici\xf3n de tipos"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const typeDefs = `\r\n    # comentarios\r\n    type Book {\r\n        id: ID!\r\n        title: String\r\n        author: String\r\n    }\r\n    type Query {\r\n        books: [Book]\r\n        book(id:ID!): Book\r\n    }\r\n`;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"resolvers-1",children:"Resolvers"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const resolvers = {\r\n  Query: {\r\n    books: () => books,\r\n    book: (parent, args) => books.find((book) => book.id === parseInt(args.id)),\r\n  },\r\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Este es un ejemplo muy b\xe1sico, no se necesita por las mutaciones"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var o=r(6540);const s={},t=o.createContext(s);function i(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);