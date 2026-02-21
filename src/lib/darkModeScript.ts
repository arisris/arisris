export const darkModeScript = ({
  storageKey = "_t_",
  toggleId = "toggle-theme",
  darkKey = "dark",
  lightKey = "light",
  isAstroViewTransition = true,
}: {
  storageKey?: string;
  toggleId?: string;
  darkKey?: string;
  lightKey?: string;
  isAstroViewTransition?: boolean;
} = {}): string =>
  `!((e,t,m,a,v)=>{const c=()=>"undefined"!=typeof localStorage&&localStorage.getItem(e)?localStorage.getItem(e):window.matchMedia(\`(prefers-color-scheme:\${m})\`).matches?m:a,n=(t=c())=>{t===a?document.documentElement.classList.remove(m):document.documentElement.classList.add(m),window.localStorage.setItem(e,t)},o=()=>{const e=document.getElementById(t);e&&e.addEventListener("click",e=>{e.preventDefault(),n(c()===m?a:m)})};n();v?(document.addEventListener("astro:after-swap",()=>n()),document.addEventListener("astro:page-load",o)):(window.addEventListener("DOMContentLoaded",o))})(\"${storageKey}\",\"${toggleId}\",\"${darkKey}\",\"${lightKey}\",${isAstroViewTransition});`;
