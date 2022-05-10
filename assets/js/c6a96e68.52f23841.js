"use strict";(self.webpackChunkdifranca=self.webpackChunkdifranca||[]).push([[337],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3153:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={keywords:["argo","cd","argocd","gitops"]},c="Architecture",l={unversionedId:"devsecops/argocd/architecture",id:"devsecops/argocd/architecture",title:"Architecture",description:"Argo CD components, CRDs and architectural patterns.",source:"@site/docs/tech/devsecops/argocd/architecture.md",sourceDirName:"devsecops/argocd",slug:"/devsecops/argocd/architecture",permalink:"/tech-notes/devsecops/argocd/architecture",draft:!1,editUrl:"https://github.com/difranca/difranca.github.io/blob/main/docs/tech/devsecops/argocd/architecture.md",tags:[],version:"current",frontMatter:{keywords:["argo","cd","argocd","gitops"]},sidebar:"tech",previous:{title:"Argo CD",permalink:"/tech-notes/devsecops/argocd"}},p={},d=[{value:"Components",id:"components",level:2},{value:"argocd-server",id:"argocd-server",level:3},{value:"argocd-application-controller",id:"argocd-application-controller",level:3},{value:"argocd-repo-server",id:"argocd-repo-server",level:3},{value:"argocd-dex",id:"argocd-dex",level:3},{value:"argocd-redis",id:"argocd-redis",level:3},{value:"Custom Resources",id:"custom-resources",level:2},{value:"Application",id:"application",level:3},{value:"Project",id:"project",level:3},{value:"App of Apps (Cluster Bootstrapping)",id:"app-of-apps-cluster-bootstrapping",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Argo CD components, CRDs and architectural patterns."),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("h3",{id:"argocd-server"},"argocd-server"),(0,o.kt)("p",null,"It runs the Argo CD API server which exposes the API consumed by the Web UI, CLI, and CI/CD systems."),(0,o.kt)("p",null,"Responsibilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application management and status reporting"),(0,o.kt)("li",{parentName:"ul"},"Invoking of application operations (e.g. sync, rollback, user-defined actions)"),(0,o.kt)("li",{parentName:"ul"},"Repository and cluster credential management (stored as Kubernetes secrets)"),(0,o.kt)("li",{parentName:"ul"},"Authentication and auth delegation to external identity providers"),(0,o.kt)("li",{parentName:"ul"},"RBAC enforcement"),(0,o.kt)("li",{parentName:"ul"},"Listener/forwarder for Git webhook events")),(0,o.kt)("h3",{id:"argocd-application-controller"},"argocd-application-controller"),(0,o.kt)("p",null,"It runs Argo CD Application Controller, which is a Kubernetes controller, that continuously monitors running applications and compares the current state against the desired target state."),(0,o.kt)("p",null,"Responsabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"OutOfSync")," application state detection"),(0,o.kt)("li",{parentName:"ul"},"Optionally takes corrective actions against ",(0,o.kt)("em",{parentName:"li"},"OutOfSync")," states"),(0,o.kt)("li",{parentName:"ul"},"Invoking any user-defined hooks for lifecycle events (e.g. PreSync, Sync, PostSync)")),(0,o.kt)("h3",{id:"argocd-repo-server"},"argocd-repo-server"),(0,o.kt)("p",null,"It runs Argo CD Repository Server, which maintains a local cache of the Git repository holding the application manifests."),(0,o.kt)("p",null,"Responsabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generating and returning the Kubernetes manifests based on:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Repository URL"),(0,o.kt)("li",{parentName:"ul"},"Revision (commit, tag, branch)"),(0,o.kt)("li",{parentName:"ul"},"Application path"),(0,o.kt)("li",{parentName:"ul"},"Template specific settings (e.g. parameters, Helm values.yaml)")))),(0,o.kt)("h3",{id:"argocd-dex"},"argocd-dex"),(0,o.kt)("p",null,"It runs Argo CD Dex, which is an identity service that uses OpenID Connect to drive authentication for Argo CD."),(0,o.kt)("p",null,"Responsabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deferring authentication to:"),(0,o.kt)("li",{parentName:"ul"},"LDAP servers"),(0,o.kt)("li",{parentName:"ul"},"SAML providers"),(0,o.kt)("li",{parentName:"ul"},"Other identity providers, such as GitHub, Google, and Active Directory")),(0,o.kt)("h3",{id:"argocd-redis"},"argocd-redis"),(0,o.kt)("p",null,"It runs Redis, which is an open source in-memory data structure store, used as a database."),(0,o.kt)("p",null,"Responsabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cache")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"More Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/"},"https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/"))))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"custom-resources"},"Custom Resources"),(0,o.kt)("h3",{id:"application"},"Application"),(0,o.kt)("p",null,"Application is a custom Resource Definition (CRD) which represents a deployed application instance in an environment.\nIt is defined by two key pieces of information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source"),": reference to the desired state in Git (repository, revision, path, environment)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Destination"),": reference to the target cluster and namespace")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"More Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#applications"},"https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#applications"))))),(0,o.kt)("h3",{id:"project"},"Project"),(0,o.kt)("p",null,"Projects provide a logical grouping of applications.\nIt can apply restrictions to applications, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What may be deployed (trusted Git sources)"),(0,o.kt)("li",{parentName:"ul"},"Where apps may be deployed to (destination clusters and namespaces)"),(0,o.kt)("li",{parentName:"ul"},"What kinds of objects may be deployed (e.g. RBAC, CRDs, DaemonSets, NetworkPolicy)"),(0,o.kt)("li",{parentName:"ul"},"Defining project roles to provide application RBAC (bound to OIDC groups and/or JWT tokens)")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"More Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/projects/"},"https://argo-cd.readthedocs.io/en/stable/user-guide/projects/"))))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"app-of-apps-cluster-bootstrapping"},"App of Apps (Cluster Bootstrapping)"),(0,o.kt)("p",null,"It is a pattern that creates an Argo CD application that creates other apps. This allows you to declaratively manage a group of apps that can be deployed and configured."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"More Information")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/"},"https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/"))))))}m.isMDXComponent=!0}}]);