"use strict";(self.webpackChunkdifranca=self.webpackChunkdifranca||[]).push([[988],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?i.createElement(h,o(o({ref:t},m),{},{components:n})):i.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={keywords:["git","hook","commit","pre-commit","secret","format","lint"]},c="Pre-Commit",s={unversionedId:"devsecops/git/pre-commit",id:"devsecops/git/pre-commit",title:"Pre-Commit",description:"Pre-commit is a framework for managing and maintaining multi-language pre-commit hooks.",source:"@site/docs/tech/devsecops/git/pre-commit.md",sourceDirName:"devsecops/git",slug:"/devsecops/git/pre-commit",permalink:"/tech-notes/devsecops/git/pre-commit",draft:!1,editUrl:"https://github.com/difranca/difranca.github.io/blob/main/docs/tech/devsecops/git/pre-commit.md",tags:[],version:"current",frontMatter:{keywords:["git","hook","commit","pre-commit","secret","format","lint"]},sidebar:"tech",previous:{title:"Git",permalink:"/tech-notes/devsecops/git"},next:{title:"\ud83d\udcdc Cheat Sheets",permalink:"/tech-notes/cheats"}},m={},p=[{value:"Installation",id:"installation",level:2},{value:"Install Pre-Commit",id:"install-pre-commit",level:3},{value:"Create Config File",id:"create-config-file",level:3},{value:"Set Git Template",id:"set-git-template",level:3},{value:"Clone a Repository",id:"clone-a-repository",level:3}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pre-commit"},"Pre-Commit"),(0,a.kt)("p",null,"Pre-commit is a framework for managing and maintaining multi-language pre-commit hooks."),(0,a.kt)("p",null,"Git hook scripts are useful for identifying issues before pushing your code or submitting it to review."),(0,a.kt)("p",null,"There are hooks for various purposes, such as formatting files, running tests, validating syntax, identifying security flaws, among others."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"More Information")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pre-commit.com"},"https://pre-commit.com"))))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This guide explains how to install and configure pre-commit so that hooks are applied to all repositories that are cloned or initialized."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"install-pre-commit"},"Install Pre-Commit"),(0,a.kt)("p",null,"Using homebrew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install pre-commit\n")),(0,a.kt)("p",null,"Using conda:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"conda install -c conda-forge pre-commit\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"create-config-file"},"Create Config File"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".pre-commit-config.yaml")," file in a directory that is easily accessible."),(0,a.kt)("p",null,"In this example the user's home directory will be used."),(0,a.kt)("p",null,"This file must contain a list of repositories and IDs of the hooks you want to use."),(0,a.kt)("p",null,"The list of repositories and hooks are available at ",(0,a.kt)("a",{parentName:"p",href:"https://pre-commit.com/hooks.html"},"https://pre-commit.com/hooks.html"),"."),(0,a.kt)("p",null,"As an example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"detect-secrets")," hook will be used to check if there are any potential secrets that may be leaked in the commit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='.pre-commit-config.yaml'",title:"'.pre-commit-config.yaml'"},"repos:\n- repo: https://github.com/Yelp/detect-secrets\n    rev: v1.2.0\n    hooks:\n    - id: detect-secrets\n      exclude: package.lock.json\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For more information on how to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},".pre-commit-config"),", visit ",(0,a.kt)("a",{parentName:"p",href:"https://pre-commit.com/index.html#pre-commit-configyaml---hooks"},"this page"),"."))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"set-git-template"},"Set Git Template"),(0,a.kt)("p",null,"It is necessary to set in which directory the git template will be written:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global init.templateDir <teplate-dir>\npre-commit init-templatedir <teplate-dir> -c <pre-commit-config-path>\n")),(0,a.kt)("p",null,"Using the user's home as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global init.templateDir ~/.git-template\npre-commit init-templatedir ~/.git-template -c ~/.pre-commit-config.yaml\n")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"clone-a-repository"},"Clone a Repository"),(0,a.kt)("p",null,"Now whenever a repository is cloned or initialized, it will have the hooks set up already (",(0,a.kt)("inlineCode",{parentName:"p"},"<repo>/.git/hooks/pre-commit"),")."),(0,a.kt)("p",null,"As an example, let's try to commit a file that contains a secret token:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f git commit -m "Testing secret leak"\n\nDetect secrets.......................................Failed\n- hook id: detect-secrets\n- exit code: 1\n\nERROR: Potential secrets about to be committed to git repo!\n\nSecret Type: Base64 High Entropy String\nLocation:    service.py:9\n')),(0,a.kt)("p",null,"The commit correctly fails so that the secret is not leaked."))}d.isMDXComponent=!0}}]);