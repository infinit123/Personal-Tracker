const KEY='revizio_nova_v1', LEGACY=['revizio_app_state_v3','revizio_app_state_v2','revizio_app_state'];
export const defaults={target:1500,executions:[],clients:[],appointments:[],theme:'auto',includeSaturday:false};
export function load(){let raw=localStorage.getItem(KEY); if(!raw) for(const k of LEGACY){raw=localStorage.getItem(k);if(raw)break} try{return normalize({...defaults,...JSON.parse(raw||'{}')})}catch{return structuredClone(defaults)}}
export function normalize(s){s.target=Number(s.target)>0?Number(s.target):1500;for(const k of ['executions','clients','appointments'])if(!Array.isArray(s[k]))s[k]=[];if(!['auto','light','dark'].includes(s.theme))s.theme='auto';s.executions=s.executions.map(x=>({...x,amountNoVat:Number(x.amountNoVat??Number(x.priceVat||0)/1.21)||0,category:x.category||category(x.name)}));return s}
export function persist(s){localStorage.setItem(KEY,JSON.stringify(s))}
export const category=n=>{n=String(n||'').toLowerCase();return n.includes('servexpress')?'Servexpress':n.includes('revizie')?'Revizie':n.includes('detector')||n.includes('homplex')?'Detectoare':'Verificare'};
