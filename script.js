// ═══ STATE ═══
const S={
  tasks:[
    {id:1,t:'Cobrar inadimplentes apt 204 e 310',col:'doing',resp:'rat',pri:'alta',cat:'',obs:'',comments:[]},
    {id:2,t:'Verificar automação CEMIG no Inter',col:'todo',resp:'rat',pri:'media',cat:'inter',obs:'',comments:[]},
    {id:3,t:'Reunião com empreiteira — corredor',col:'todo',resp:'amb',pri:'alta',cat:'obras',obs:'',comments:[]},
    {id:4,t:'Conferir pagamentos do mês anterior',col:'done',resp:'fer',pri:'baixa',cat:'',obs:'',comments:[]},
    {id:5,t:'Enviar balancete aos condôminos',col:'todo',resp:'fer',pri:'alta',cat:'',obs:'',comments:[]},
  ],
  fluxo:[
    {id:1,d:'Condomínio — 28 aptos',t:'entrada',v:14000,obs:''},
    {id:2,d:'CEMIG área comum',t:'saida',v:1200,obs:''},
    {id:3,d:'Portaria terceirizada',t:'saida',v:3500,obs:''},
    {id:4,d:'Limpeza',t:'saida',v:800,obs:''},
    {id:5,d:'Câmeras — obras',t:'obras',v:4500,obs:''},
    {id:6,d:'Reserva maio',t:'reserva',v:1000,obs:''},
  ],
  etapas:[
    {id:1,nome:'Câmeras de segurança',inicio:'01/05',fim:'19/05',orc:4500,link:'',obs:'Câmeras instaladas no corredor e portaria',done:false,items:[
      {id:101,desc:'Compra das câmeras',orc:2000,pago:2000,done:true},
      {id:102,desc:'Instalação e cabeamento',orc:1500,pago:0,done:false},
      {id:103,desc:'DVR e configuração',orc:1000,pago:0,done:false},
    ]},
    {id:2,nome:'Marcenaria — Entrada',inicio:'18/05',fim:'20/05',orc:0,link:'',obs:'Espelho, maçaneta e armário',done:false,items:[
      {id:201,desc:'Espelho entrada',orc:0,pago:0,done:false},
      {id:202,desc:'Maçaneta',orc:0,pago:0,done:false},
      {id:203,desc:'Fecho click armário',orc:0,pago:0,done:false},
    ]},
    {id:3,nome:'Limpeza e Dedetização',inicio:'19/05',fim:'19/05',orc:800,link:'',obs:'Desentupidora Gigante · 10h30',done:false,items:[
      {id:301,desc:'Caixa de gordura',orc:500,pago:0,done:false},
      {id:302,desc:'Dedetização áreas comuns',orc:300,pago:0,done:false},
    ]},
  ],
  fornecedores:[
    {id:1,nome:'Desentupidora Gigante',tipo:'Dedetização e limpeza',tel:'3455-5189 / 99903-0010',val:800,data:'19/05/2026 às 10h30',obs:'CNPJ: 11.957.120/0001-06 · Rua Itamarati 365 · CRF nº 38091'},
    {id:2,nome:'Marceneiro',tipo:'Marcenaria / Acabamentos',tel:'A confirmar',val:0,data:'18/05/2026',obs:''},
  ],
  lembretes:[
    {id:1,desc:'Retirar plástico do espelho',cat:'marceneiro',srv:'Marceneiro — 18/05',done:false,obs:''},
    {id:2,desc:'Conferir instalação da maçaneta',cat:'marceneiro',srv:'Marceneiro — 18/05',done:false,obs:''},
    {id:3,desc:'Testar fecho click do armário da entrada',cat:'marceneiro',srv:'Marceneiro — 18/05',done:false,obs:''},
    {id:4,desc:'Confirmar presença Desentupidora Gigante',cat:'vistoria',srv:'Gigante — 19/05 às 10h30',done:false,obs:''},
    {id:5,desc:'Liberar acesso caixas de gordura',cat:'vistoria',srv:'Gigante — 19/05 às 10h30',done:false,obs:''},
  ],
  pagamentos:[
    // 2 aptos com dono morando: pagamento unificado (dono paga tudo)
    {id:1,apt:'101',tipo_apto:'dono',
      proprietario:{nome:'(Proprietário apto 101)',tel:'',email:''},
      inquilino:null,
      cond:500,obra:200,seg:150,
      st_cond:'ok',st_obra:'ok',obs:'',comments:[]},
    {id:2,apt:'102',tipo_apto:'dono',
      proprietario:{nome:'(Proprietário apto 102)',tel:'',email:''},
      inquilino:null,
      cond:500,obra:200,seg:150,
      st_cond:'ok',st_obra:'ok',obs:'',comments:[]},
    // 4 aptos de aluguel: inquilino paga cond, proprietário paga obra+seg
    {id:3,apt:'201',tipo_apto:'aluguel',
      proprietario:{nome:'(Proprietário apto 201)',tel:'',email:''},
      inquilino:{nome:'(Inquilino apto 201)',tel:'',email:''},
      cond:500,obra:200,seg:150,
      st_cond:'ok',st_obra:'ok',obs:'',comments:[]},
    {id:4,apt:'202',tipo_apto:'aluguel',
      proprietario:{nome:'(Proprietário apto 202)',tel:'',email:''},
      inquilino:{nome:'(Inquilino apto 202)',tel:'',email:''},
      cond:500,obra:200,seg:150,
      st_cond:'ok',st_obra:'ok',obs:'',comments:[]},
    {id:5,apt:'203',tipo_apto:'aluguel',
      proprietario:{nome:'(Proprietário apto 203)',tel:'',email:''},
      inquilino:{nome:'(Inquilino apto 203)',tel:'',email:''},
      cond:500,obra:200,seg:150,
      st_cond:'pend',st_obra:'ok',obs:'',comments:[]},
    {id:6,apt:'204',tipo_apto:'aluguel',
      proprietario:{nome:'(Proprietário apto 204)',tel:'',email:''},
      inquilino:{nome:'(Inquilino apto 204)',tel:'',email:''},
      cond:500,obra:200,seg:150,
      st_cond:'venc',st_obra:'pend',obs:'',comments:[]},
  ],
  condominos:[],// preenchido a partir de pagamentos
  ocorrencias:[
    {id:1,t:'Vazamento no corredor 2º andar',apt:'202',tipo:'vazamento',resp:'fer',desc:'Água escorrendo pela parede perto do elevador',st:'andamento',data:'10/05/2026',obs:'',comments:[]},
    {id:2,t:'Barulho excessivo apt 310',apt:'305',tipo:'barulho',resp:'rat',desc:'Música alta após 22h repetidas vezes',st:'aberta',data:'12/05/2026',obs:'',comments:[]},
  ],
  assembleias:[
    {id:1,t:'Assembleia Ordinária — Maio 2026',data:'25/05/2026 às 19h',local:'Salão de festas',pautas:'1. Aprovação das obras\n2. Prestação de contas\n3. Aprovação orçamento 2026',ata:'',obs:''},
  ],
  eventos:[
    {id:1,dia:5,l:'Cond. vence',cat:'conta'},
    {id:2,dia:10,l:'CEMIG',cat:'conta'},
    {id:3,dia:15,l:'Internet',cat:'conta'},
    {id:4,dia:18,l:'Marceneiro',cat:'obras'},
    {id:5,dia:19,l:'Gigante 10h30',cat:'obras'},
    {id:6,dia:20,l:'Seguro',cat:'conta'},
    {id:7,dia:22,l:'Balancete',cat:'fer'},
    {id:8,dia:25,l:'Assembleia 19h',cat:'lembrete'},
  ],
  check:[
    {s:'Recebimentos',items:[{id:'c1',l:'Conferir lista de pagantes',done:true,r:'fer',obs:'',comments:[]},{id:'c2',l:'Cobrar inadimplentes',done:false,r:'fer',obs:'',comments:[]},{id:'c3',l:'Emitir recibos',done:true,r:'rat',obs:'',comments:[]}]},
    {s:'Contas',items:[{id:'c4',l:'Verificar automações Inter',done:true,r:'rat',obs:'',comments:[]},{id:'c5',l:'Pagar contas manuais',done:false,r:'rat',obs:'',comments:[]},{id:'c6',l:'Guardar comprovantes',done:false,r:'amb',obs:'',comments:[]}]},
    {s:'Obras',items:[{id:'c7',l:'Atualizar planilha de gastos',done:false,r:'fer',obs:'',comments:[]},{id:'c8',l:'Acompanhar marceneiro — 18/05',done:false,r:'fer',obs:'',comments:[]},{id:'c9',l:'Acompanhar Gigante — 19/05',done:false,r:'rat',obs:'',comments:[]}]},
    {s:'Financeiro',items:[{id:'c10',l:'Separar valor p/ reserva',done:true,r:'rat',obs:'',comments:[]},{id:'c11',l:'Enviar balancete',done:false,r:'fer',obs:'',comments:[]}]},
  ],
  autoLog:[],
  rules:{inadimplente_task:true,vencida_lembrete:true,reserva_alerta:true,obra_concluida_fluxo:true,checklist_completo:true,vencimento_3dias:true},
  calOff:0,filt:null,pagFilt:'todos',lemFilt:'todos',ocorrFilt:'todas',comunFilt:'todos',
  resp:'fer',audResp:'fer',ocResp:'fer',
  _etapaCtx:null,nid:400,rec:false,sr:null,wint:null,audTxt:'',
};

// CURSOR
const cur=document.getElementById('cur');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px'});
document.querySelectorAll('a,button,[onclick]').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
});

// HELPERS
const fmt=v=>'R$ '+v.toLocaleString('pt-BR');
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const nowStr=()=>{const d=new Date();return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'})+' '+d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})};
const RC=s=>s==='fer'?'bd-fer':s==='rat'?'bd-rat':'';
function toast(msg,type='ok'){const t=document.getElementById('toast');t.textContent=msg;t.style.background=type==='ok'?'rgba(16,185,129,.13)':'rgba(245,158,11,.13)';t.style.borderColor=type==='ok'?'rgba(16,185,129,.35)':'rgba(245,158,11,.35)';t.style.color=type==='ok'?'#6ee7b7':'#fde68a';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3200);}
const rippleStyle=document.createElement('style');rippleStyle.textContent='@keyframes rip{to{transform:scale(1);opacity:0}}';document.head.appendChild(rippleStyle);
document.addEventListener('click',e=>{
  const b=e.target.closest('.btn,.btn-save,.btn-cancel,.kadd,.cal-nb,.pill');if(!b)return;
  const r=document.createElement('span');const rect=b.getBoundingClientRect();const s=Math.max(rect.width,rect.height)*2.2;
  Object.assign(r.style,{position:'absolute',borderRadius:'50%',background:'rgba(255,255,255,.18)',width:s+'px',height:s+'px',left:(e.clientX-rect.left-s/2)+'px',top:(e.clientY-rect.top-s/2)+'px',transform:'scale(0)',animation:'rip .6s ease-out forwards',pointerEvents:'none'});
  b.style.position='relative';b.style.overflow='hidden';b.appendChild(r);setTimeout(()=>r.remove(),700);
});

// NAV
const VT={dashboard:'/ dashboard',kanban:'/ tarefas',agenda:'/ agenda',pagamentos:'/ pagamentos',fluxo:'/ fluxo de caixa',obras:'/ obras',check:'/ checklist',ocorrencias:'/ ocorrências',condominos:'/ condôminos',comunicados:'/ comunicados',assembleias:'/ assembleias',automacoes:'/ automações'};
const VS={dashboard:'Maio 2026 · Edifício Pátio',kanban:'Clique para ver detalhes · Arraste para mover',agenda:'Calendário e eventos',pagamentos:'Conferência de pagamentos — valores editáveis',fluxo:'Entradas, saídas e reserva de emergência',obras:'Etapas, gastos, fornecedores e lembretes',check:'Rotina mensal do condomínio',ocorrencias:'Log de problemas e reclamações',condominos:'Cadastro de moradores e contatos',comunicados:'Mensagens prontas para WhatsApp',assembleias:'Atas e votações',automacoes:'Regras inteligentes que conectam todas as abas'};
function goView(v,el){
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.si').forEach(x=>x.classList.remove('on'));
  document.getElementById('view-'+v).classList.add('on');
  if(el)el.classList.add('on');
  document.getElementById('view-title').textContent=VT[v]||'';
  document.getElementById('view-sub').textContent=VS[v]||'';
  document.getElementById('filter-pills').style.display=v==='kanban'?'flex':'none';
  const r={dashboard:renderDash,kanban:renderKanban,agenda:renderCal,pagamentos:renderPagamentos,fluxo:renderFluxo,obras:renderObras,check:renderCheck,ocorrencias:renderOcorrencias,condominos:renderCondominos,comunicados:renderComunicados,assembleias:renderAssembleias,automacoes:renderAutomacoes};
  if(r[v])r[v]();
}
function filtAv(u){S.filt=S.filt===u?null:u;document.getElementById('av-fer').classList.toggle('active',S.filt!=='rat');document.getElementById('av-rat').classList.toggle('active',S.filt!=='fer');if(document.getElementById('view-kanban').classList.contains('on'))renderKanban();}
function filtPill(f,btn){document.querySelectorAll('#filter-pills .pill').forEach(b=>b.classList.remove('on'));btn.classList.add('on');S.filt=f==='todas'?null:f;renderKanban();}
function filtPagView(f,btn){document.querySelectorAll('#view-pagamentos .pills .pill').forEach(b=>b.classList.remove('on'));btn.classList.add('on');S.pagFilt=f;renderPagamentos();}
function filtLem(f,btn){document.querySelectorAll('#lem-filter .pill').forEach(b=>b.classList.remove('on'));btn.classList.add('on');S.lemFilt=f;renderLembretes();}
function filtOcorr(f,btn){document.querySelectorAll('#view-ocorrencias .pills .pill').forEach(b=>b.classList.remove('on'));btn.classList.add('on');S.ocorrFilt=f;renderOcorrencias();}
function filtComun(f,btn){document.querySelectorAll('#view-comunicados button.pill').forEach(b=>b.classList.remove('on'));btn.classList.add('on');S.comunFilt=f;renderComunicados();}

// MODALS
function openModal(id){document.getElementById(id).classList.add('open')}
function closeModal(id){document.getElementById(id).classList.remove('open')}
function openAddModal(){S.resp='fer';syncResp();openModal('modal-task')}
function selResp(r){S.resp=r;['fer','rat','amb'].forEach(x=>{const b=document.getElementById('ro-'+x);if(b)b.className='resp-opt'+(S.resp===x?' on '+x:'');})}
function selAudResp(r){S.audResp=r;['fer','rat','amb'].forEach(x=>{const b=document.getElementById('aro-'+x);if(b)b.className='resp-opt'+(S.audResp===x?' on '+x:'');})}
function selOcResp(r){S.ocResp=r;['fer','rat','amb'].forEach(x=>{const b=document.getElementById('oc-'+x);if(b)b.className='resp-opt'+(S.ocResp===x?' on '+x:'');})}
function syncResp(){selResp(S.resp)}

// SAVES
function saveTask(){const t=document.getElementById('mt-t').value.trim();if(!t)return;S.tasks.push({id:S.nid++,t,col:document.getElementById('mt-col').value,resp:S.resp,pri:document.getElementById('mt-pri').value,cat:document.getElementById('mt-cat').value,obs:document.getElementById('mt-obs').value,comments:[]});document.getElementById('mt-t').value='';document.getElementById('mt-obs').value='';closeModal('modal-task');renderKanban();renderDash();toast('✓ Tarefa criada!');}
function saveFluxo(){const d=document.getElementById('mf-desc').value.trim();const v=parseFloat(document.getElementById('mf-val').value);if(!d||!v)return;S.fluxo.push({id:S.nid++,d,t:document.getElementById('mf-tipo').value,v,obs:''});document.getElementById('mf-desc').value='';document.getElementById('mf-val').value='';closeModal('modal-fluxo');renderFluxo();renderDash();runAutomations('novo lançamento');toast('✓ Lançamento salvo!');}
function saveEtapa(){const n=document.getElementById('me2-nome').value.trim();if(!n)return;const e={id:S.nid++,nome:n,inicio:document.getElementById('me2-inicio').value,fim:document.getElementById('me2-fim').value,orc:parseFloat(document.getElementById('me2-orc').value)||0,link:document.getElementById('me2-link').value,obs:document.getElementById('me2-obs').value,done:false,items:[]};S.etapas.push(e);['me2-nome','me2-inicio','me2-fim','me2-orc','me2-link','me2-obs'].forEach(id=>{document.getElementById(id).value='';});closeModal('modal-etapa');autoServicoAgendado({nome:n,forn:n,data:e.inicio});renderObras();toast('✓ Etapa adicionada!');}
function saveSubitem(){const desc=document.getElementById('msi-desc').value.trim();if(!desc||!S._etapaCtx)return;const etapa=S.etapas.find(e=>e.id===S._etapaCtx);if(!etapa)return;etapa.items.push({id:S.nid++,desc,orc:parseFloat(document.getElementById('msi-orc').value)||0,pago:parseFloat(document.getElementById('msi-pago').value)||0,done:false});document.getElementById('msi-desc').value='';document.getElementById('msi-orc').value='';document.getElementById('msi-pago').value='';closeModal('modal-subitem');renderObras();toast('✓ Item adicionado!');}
function saveForn(){const n=document.getElementById('mfn-nome').value.trim();if(!n)return;S.fornecedores.push({id:S.nid++,nome:n,tipo:document.getElementById('mfn-tipo').value,tel:document.getElementById('mfn-tel').value,val:parseFloat(document.getElementById('mfn-val').value)||0,data:document.getElementById('mfn-data').value,obs:document.getElementById('mfn-obs').value});document.getElementById('mfn-nome').value='';closeModal('modal-forn');renderFornecedores();toast('✓ Fornecedor salvo!');}
function saveLem(){const d=document.getElementById('ml-desc').value.trim();if(!d)return;S.lembretes.push({id:S.nid++,desc:d,cat:document.getElementById('ml-cat').value,srv:document.getElementById('ml-srv').value,done:false,obs:''});document.getElementById('ml-desc').value='';closeModal('modal-lem');renderLembretes();renderDash();toast('✓ Lembrete salvo!');}
function saveApt(){const n=document.getElementById('ma-num').value.trim();if(!n)return;const p={id:S.nid++,apt:n,prop:document.getElementById('ma-prop').value,tel:document.getElementById('ma-tel').value,email:document.getElementById('ma-email').value,tipo:document.getElementById('ma-tipo').value,cond:parseFloat(document.getElementById('ma-cond').value)||0,obra:parseFloat(document.getElementById('ma-obra').value)||0,seg:parseFloat(document.getElementById('ma-seg').value)||0,st:'pend',obs:''};S.pagamentos.push(p);['ma-num','ma-prop','ma-tel','ma-email','ma-cond','ma-obra','ma-seg'].forEach(id=>{document.getElementById(id).value='';});closeModal('modal-apt');renderPagamentos();renderDash();toast('✓ Apartamento adicionado!');}
function saveCond(){const n=document.getElementById('mc2-nome').value.trim();const apt=document.getElementById('mc2-apt').value.trim();if(!n||!apt)return;S.condominos.push({id:S.nid++,apt,nome:n,tel:document.getElementById('mc2-tel').value,email:document.getElementById('mc2-email').value,tipo:document.getElementById('mc2-tipo').value,entrada:document.getElementById('mc2-entrada').value});['mc2-apt','mc2-nome','mc2-tel','mc2-email','mc2-entrada'].forEach(id=>{document.getElementById(id).value='';});closeModal('modal-cond');renderCondominos();toast('✓ Condômino salvo!');}
function saveOcorr(){const t=document.getElementById('moc-t').value.trim();if(!t)return;S.ocorrencias.push({id:S.nid++,t,apt:document.getElementById('moc-apt').value,tipo:document.getElementById('moc-tipo').value,resp:S.ocResp,desc:document.getElementById('moc-desc').value,st:'aberta',data:new Date().toLocaleDateString('pt-BR'),obs:'',comments:[]});document.getElementById('moc-t').value='';document.getElementById('moc-desc').value='';closeModal('modal-ocorr');renderOcorrencias();logAuto('alert','🚨','<strong>Nova ocorrência:</strong> '+t,'Registrada em '+new Date().toLocaleDateString('pt-BR'));toast('✓ Ocorrência registrada!');}
function saveAssem(){const t=document.getElementById('mas-t').value.trim();if(!t)return;S.assembleias.push({id:S.nid++,t,data:document.getElementById('mas-data').value,local:document.getElementById('mas-local').value,pautas:document.getElementById('mas-pautas').value,ata:document.getElementById('mas-ata').value,obs:''});document.getElementById('mas-t').value='';closeModal('modal-assem');renderAssembleias();toast('✓ Assembleia salva!');}
function saveEvento(){const l=document.getElementById('mev-t').value.trim();const dia=parseInt(document.getElementById('mev-dia').value);if(!l||!dia)return;S.eventos.push({id:S.nid++,dia,l,cat:document.getElementById('mev-cat').value});document.getElementById('mev-t').value='';document.getElementById('mev-dia').value='';closeModal('modal-evento');renderCal();toast('✓ Evento adicionado!');}

// ═══ DASHBOARD ═══
function renderDash(){
  const active=S.tasks.filter(t=>t.col!=='done').length;
  const done=S.tasks.filter(t=>t.col==='done').length;
  document.getElementById('ds-tasks').textContent=active;
  document.getElementById('ds-tasks-s').textContent=done+' concluída'+(done!==1?'s':'');
  document.getElementById('ds-tasks-b').style.width=Math.round(done/Math.max(1,S.tasks.length)*100)+'%';
  const inad=S.pagamentos.filter(p=>p.st!=='ok').length;
  document.getElementById('ds-inad').textContent=inad;
  document.getElementById('ds-inad-b').style.width=Math.round(inad/Math.max(1,S.pagamentos.length)*100)+'%';
  const ent=S.fluxo.filter(f=>f.t==='entrada').reduce((a,b)=>a+b.v,0);
  const sai=S.fluxo.filter(f=>f.t==='saida'||f.t==='obras').reduce((a,b)=>a+b.v,0);
  const res=S.fluxo.filter(f=>f.t==='reserva').reduce((a,b)=>a+b.v,0);
  const saldo=ent-sai-res;
  document.getElementById('ds-saldo').textContent=fmt(saldo);
  document.getElementById('ds-saldo').style.color=saldo>=0?'#6ee7b7':'#fca5a5';
  document.getElementById('ds-ent').textContent=fmt(ent);
  document.getElementById('ds-sai').textContent=fmt(sai);
  document.getElementById('ds-res').textContent=fmt(res);
  const pct=Math.round(res/30000*100);
  document.getElementById('ds-reserva').textContent=fmt(res);
  document.getElementById('ds-reserva-s').textContent='de R$30k · '+pct+'%';
  document.getElementById('ds-reserva-b').style.width=pct+'%';
  const allI=S.check.flatMap(s=>s.items);
  const chkD=allI.filter(i=>i.done).length;
  const chkP=Math.round(chkD/Math.max(1,allI.length)*100);
  document.getElementById('ds-chk-n').textContent=chkD;
  document.getElementById('ds-chk-t').textContent='de '+allI.length;
  document.getElementById('ds-ring-pct').textContent=chkP+'%';
  document.getElementById('ds-ring').setAttribute('stroke-dashoffset',207-207*(chkP/100));
  // kanban mini
  const km=document.getElementById('ds-k-mini');km.innerHTML='';
  S.tasks.filter(t=>t.col!=='done').slice(0,5).forEach(t=>{
    const el=document.createElement('div');
    el.style.cssText='display:flex;align-items:center;gap:10px;padding:9px 12px;background:rgba(255,255,255,.04);border-radius:10px;cursor:pointer';
    el.innerHTML=`<div style="width:3px;height:28px;border-radius:3px;background:${t.pri==='alta'?'var(--rosa)':t.pri==='media'?'#fbbf24':'var(--verde-c)'}"></div><span style="font-size:11px;color:rgba(255,255,255,.72);flex:1;line-height:1.35">${esc(t.t)}</span><span class="badge ${RC(t.resp)}">${t.resp==='amb'?'Amb':t.resp==='fer'?'Fe':'Ra'}</span>`;
    el.onclick=()=>openDrawer('task',t.id);
    km.appendChild(el);
  });
  // próximos serviços
  const ps=document.getElementById('ds-prox');ps.innerHTML='';
  S.etapas.filter(e=>!e.done).slice(0,3).forEach(e=>{
    const el=document.createElement('div');
    el.style.cssText='display:flex;align-items:flex-start;gap:10px;padding:10px;background:rgba(255,255,255,.04);border-radius:10px';
    el.innerHTML=`<div style="width:8px;height:8px;border-radius:50%;margin-top:4px;flex-shrink:0;background:var(--amber);box-shadow:0 0 6px rgba(245,158,11,.5)"></div><div><div style="font-size:12px;color:rgba(255,255,255,.8)">${esc(e.nome)}</div><div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:2px">${e.inicio}–${e.fim}${e.orc?' · '+fmt(e.orc):''}</div></div>`;
    ps.appendChild(el);
  });
  // inadimplentes mini
  const im=document.getElementById('ds-inad-list');im.innerHTML='';
  S.pagamentos.filter(p=>aptStGeral(p)!=='ok').slice(0,4).forEach(p=>{
    const stG=aptStGeral(p);
    const el=document.createElement('div');
    el.style.cssText='display:flex;flex-direction:column;gap:3px;padding:8px 10px;background:rgba(255,255,255,.04);border-radius:10px;cursor:pointer;margin-bottom:4px';
    const condTag=p.st_cond!=='ok'?`<span class="badge ${p.st_cond==='venc'?'bd-venc':'bd-pend'}" style="font-size:8px">cond ${p.st_cond}</span>`:'';
    const obraTag=p.tipo_apto==='aluguel'&&p.st_obra!=='ok'?`<span class="badge ${p.st_obra==='venc'?'bd-venc':'bd-pend'}" style="font-size:8px">obra ${p.st_obra}</span>`:'';
    el.innerHTML=`<div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:11px;color:rgba(255,255,255,.65);font-weight:500">Apt ${p.apt}</span><div style="display:flex;gap:4px">${condTag}${obraTag}</div></div><div style="font-size:10px;color:rgba(255,255,255,.3)">${esc(aptNomeProp(p))}${p.tipo_apto==='aluguel'?' · '+esc(aptNomeInq(p)):''}</div>`;
    el.onclick=()=>goView('pagamentos',document.getElementById('si-pagamentos'));
    im.appendChild(el);
  });
}

// ═══ KANBAN ═══
function renderKanban(){
  const COLS=[{k:'todo',l:'A fazer',dot:'rgba(255,255,255,.3)'},{k:'doing',l:'Em andamento',dot:'var(--rosa)'},{k:'done',l:'Concluído',dot:'var(--verde-c)'}];
  const board=document.getElementById('kanban-board');board.innerHTML='';
  let dragged=null;
  COLS.forEach(col=>{
    let tasks=S.tasks.filter(t=>t.col===col.k);
    if(S.filt&&S.filt!=='todas')tasks=tasks.filter(t=>t.resp===S.filt||t.resp==='amb');
    const colEl=document.createElement('div');colEl.className='k-col g';colEl.style.borderRadius='20px';colEl.dataset.col=col.k;
    const hdr=document.createElement('div');hdr.className='k-col-header';
    hdr.innerHTML=`<div class="k-col-label"><div class="k-col-dot" style="background:${col.dot}"></div>${col.l}</div><span class="k-col-n">${tasks.length}</span>`;
    colEl.appendChild(hdr);
    tasks.forEach(t=>{
      const c=document.createElement('div');c.className=`kcard g ${t.pri}`;c.draggable=true;c.dataset.tid=t.id;
      const cN=(t.comments||[]).length;
      c.innerHTML=`<button class="kcard-open-btn" onclick="event.stopPropagation();openDrawer('task',${t.id})"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></button>
        <div class="kcard-title">${esc(t.t)}</div>
        ${t.obs?`<div class="kcard-obs">${esc(t.obs.substring(0,80))}${t.obs.length>80?'…':''}</div>`:''}
        <div class="kcard-footer"><div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap"><span class="badge ${RC(t.resp)}">${t.resp==='amb'?'Ambas':t.resp==='fer'?'Fernanda':'Ratazana'}</span>${t.cat==='obras'?'<span class="badge bd-obras">obras</span>':''}${t.cat==='inter'?'<span class="badge bd-inter">inter</span>':''}${t.pri==='alta'?'<span class="badge bd-alta">!</span>':''}</div><div style="display:flex;align-items:center;gap:6px">${cN?`<span style="font-size:9px;color:rgba(255,255,255,.3)">💬${cN}</span>`:''}</div></div>`;
      c.addEventListener('click',e=>{if(!e.target.closest('.kcard-open-btn'))openDrawer('task',t.id);});
      c.addEventListener('dragstart',e=>{dragged=c;setTimeout(()=>c.classList.add('dragging'),0);e.dataTransfer.effectAllowed='move';});
      c.addEventListener('dragend',()=>{c.classList.remove('dragging');dragged=null;document.querySelectorAll('.drag-placeholder,.k-col').forEach(x=>{x.classList&&x.classList.remove('drag-over');if(x.classList&&x.classList.contains('drag-placeholder'))x.remove();});});
      colEl.appendChild(c);
    });
    colEl.addEventListener('dragover',e=>{e.preventDefault();colEl.classList.add('drag-over');const after=getDragAfter(colEl,e.clientY);const ph=document.querySelector('.drag-placeholder');if(!ph){const p=document.createElement('div');p.className='kcard drag-placeholder g';colEl.insertBefore(p,add);}else{if(!after)colEl.insertBefore(ph,add);else colEl.insertBefore(ph,after);}});
    colEl.addEventListener('dragleave',e=>{if(!colEl.contains(e.relatedTarget))colEl.classList.remove('drag-over');});
    colEl.addEventListener('drop',e=>{e.preventDefault();colEl.classList.remove('drag-over');if(!dragged)return;const tid=parseInt(dragged.dataset.tid);const task=S.tasks.find(x=>x.id===tid);if(task){task.col=col.k;renderKanban();renderDash();toast('✓ Movido para '+col.l);}});
    const add=document.createElement('button');add.className='kadd';add.innerHTML='+ Adicionar tarefa';add.onclick=()=>{document.getElementById('mt-col').value=col.k;openAddModal()};colEl.appendChild(add);
    board.appendChild(colEl);
  });
}
function getDragAfter(col,y){const els=[...col.querySelectorAll('.kcard:not(.dragging):not(.drag-placeholder)')];return els.reduce((cl,el)=>{const box=el.getBoundingClientRect();const off=y-box.top-box.height/2;if(off<0&&off>cl.offset)return{offset:off,el};return cl;},{offset:-Infinity}).el;}

// ═══ PAGAMENTOS ═══
// Helpers de status unificado por apto
function aptStGeral(p){
  if(p.tipo_apto==='dono') return p.st_cond==='venc'||p.st_obra==='venc'?'venc':p.st_cond==='pend'||p.st_obra==='pend'?'pend':'ok';
  return p.st_cond==='venc'||p.st_obra==='venc'?'venc':p.st_cond==='pend'||p.st_obra==='pend'?'pend':'ok';
}
function aptNomeInq(p){return p.inquilino?p.inquilino.nome:'—';}
function aptNomeProp(p){return p.proprietario?p.proprietario.nome:'—';}
function aptTelInq(p){return p.inquilino?p.inquilino.tel:'';}
function aptTelProp(p){return p.proprietario?p.proprietario.tel:'';}

function renderPagamentos(){
  let apts=S.pagamentos;
  if(S.pagFilt==='pend') apts=apts.filter(p=>aptStGeral(p)!=='ok');
  else if(S.pagFilt==='ok') apts=apts.filter(p=>aptStGeral(p)==='ok');

  // totais
  const totalCondRec=S.pagamentos.filter(p=>p.st_cond==='ok').reduce((a,b)=>a+b.cond,0);
  const totalObraRec=S.pagamentos.filter(p=>p.st_obra==='ok').reduce((a,b)=>a+b.obra+b.seg,0);
  const totalRec=totalCondRec+totalObraRec;
  const totalAb=S.pagamentos.reduce((a,b)=>{
    let v=0;if(b.st_cond!=='ok')v+=b.cond;if(b.st_obra!=='ok')v+=b.obra+b.seg;return a+v;
  },0);
  document.getElementById('pag-rec').textContent=fmt(totalRec);
  document.getElementById('pag-rec-s').textContent=S.pagamentos.filter(p=>aptStGeral(p)==='ok').length+' aptos em dia';
  document.getElementById('pag-rec-b').style.width=Math.round(totalRec/(totalRec+totalAb||1)*100)+'%';
  document.getElementById('pag-ab').textContent=fmt(totalAb);
  document.getElementById('pag-ab-s').textContent=S.pagamentos.filter(p=>aptStGeral(p)!=='ok').length+' aptos com pendência';
  document.getElementById('pag-ab-b').style.width=Math.round(totalAb/(totalRec+totalAb||1)*100)+'%';

  const tbody=document.getElementById('pag-tbody');tbody.innerHTML='';

  apts.forEach(p=>{
    const isAluguel = p.tipo_apto==='aluguel';
    const stCond=p.st_cond;const stObra=p.st_obra;
    const stCondCls=stCond==='ok'?'bd-ok':stCond==='venc'?'bd-venc':'bd-pend';
    const stObraCls=stObra==='ok'?'bd-ok':stObra==='venc'?'bd-venc':'bd-pend';
    const stCondLbl=stCond==='ok'?'✓ Pago':stCond==='venc'?'Vencido':'Pendente';
    const stObraLbl=stObra==='ok'?'✓ Pago':stObra==='venc'?'Vencido':'Pendente';

    const waInq=aptTelInq(p)?`<a href="https://wa.me/55${aptTelInq(p).replace(/\D/g,'')}" target="_blank" style="font-size:11px;text-decoration:none" title="WhatsApp inquilino">📱</a>`:'';
    const waProp=aptTelProp(p)?`<a href="https://wa.me/55${aptTelProp(p).replace(/\D/g,'')}" target="_blank" style="font-size:11px;text-decoration:none" title="WhatsApp proprietário">📱</a>`:'';

    if(isAluguel){
      // ALUGUEL: 2 linhas — inquilino (cond) e proprietário (obra+seg)
      const tr1=document.createElement('tr');
      tr1.style.borderBottom='none';
      tr1.innerHTML=`
        <td rowspan="2" style="vertical-align:middle;cursor:pointer" onclick="openDrawer('pag',${p.id})">
          <div style="font-family:'Unbounded',sans-serif;font-size:11px;font-weight:700;color:rgba(255,255,255,.7)">APT ${p.apt}</div>
          <span class="badge" style="background:rgba(96,165,250,.13);color:#bfdbfe;margin-top:4px;display:inline-flex">aluguel</span>
        </td>
        <td>
          <div style="font-size:12px;color:rgba(255,255,255,.8)">${esc(aptNomeInq(p))} ${waInq}</div>
          <div style="font-size:9px;color:rgba(255,255,255,.3);margin-top:2px">Inquilino</div>
        </td>
        <td><input class="pag-input" type="number" value="${p.cond}" style="width:72px" onchange="updatePag(${p.id},'cond',this.value)"></td>
        <td style="color:rgba(255,255,255,.2);font-size:11px;text-align:center">—</td>
        <td style="color:rgba(255,255,255,.2);font-size:11px;text-align:center">—</td>
        <td><span class="pag-total">${fmt(p.cond)}</span></td>
        <td>
          <button style="background:transparent;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:4px;font-family:inherit" onclick="cyclePagCondSt(${p.id})">
            <div class="sdot ${stCond}"></div><span class="badge ${stCondCls}">${stCondLbl}</span>
          </button>
        </td>
        <td>
          ${aptTelInq(p)?`<button class="btn btn-p" style="padding:4px 8px;font-size:9px" onclick="abrirMsgCobrancaInq(${p.id})">💬</button>`:''}
        </td>`;

      const tr2=document.createElement('tr');
      tr2.style.background='rgba(255,255,255,.015)';
      tr2.innerHTML=`
        <td>
          <div style="font-size:12px;color:rgba(255,255,255,.8)">${esc(aptNomeProp(p))} ${waProp}</div>
          <div style="font-size:9px;color:rgba(255,255,255,.3);margin-top:2px">Proprietário</div>
        </td>
        <td style="color:rgba(255,255,255,.2);font-size:11px;text-align:center">—</td>
        <td><input class="pag-input" type="number" value="${p.obra}" style="width:72px" onchange="updatePag(${p.id},'obra',this.value)"></td>
        <td><input class="pag-input" type="number" value="${p.seg}" style="width:72px" onchange="updatePag(${p.id},'seg',this.value)"></td>
        <td><span class="pag-total">${fmt(p.obra+p.seg)}</span></td>
        <td>
          <button style="background:transparent;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:4px;font-family:inherit" onclick="cyclePagObraSt(${p.id})">
            <div class="sdot ${stObra}"></div><span class="badge ${stObraCls}">${stObraLbl}</span>
          </button>
        </td>
        <td>
          ${aptTelProp(p)?`<button class="btn btn-v" style="padding:4px 8px;font-size:9px" onclick="abrirMsgCobrancaProp(${p.id})">💬</button>`:''}
        </td>`;

      tbody.appendChild(tr1);tbody.appendChild(tr2);
      // separator
      const sep=document.createElement('tr');sep.innerHTML='<td colspan="8" style="height:6px;background:transparent;border:none"></td>';
      tbody.appendChild(sep);

    } else {
      // DONO morando: linha única, dono paga tudo
      const stG=aptStGeral(p);
      const stGCls=stG==='ok'?'bd-ok':stG==='venc'?'bd-venc':'bd-pend';
      const stGLbl=stG==='ok'?'✓ Pago':stG==='venc'?'Vencido':'Pendente';
      const tr=document.createElement('tr');
      tr.innerHTML=`
        <td style="cursor:pointer" onclick="openDrawer('pag',${p.id})">
          <div style="font-family:'Unbounded',sans-serif;font-size:11px;font-weight:700;color:rgba(255,255,255,.7)">APT ${p.apt}</div>
          <span class="badge bd-ok" style="margin-top:4px;display:inline-flex">dono</span>
        </td>
        <td style="cursor:pointer" onclick="openDrawer('pag',${p.id})">
          <div style="font-size:12px;color:rgba(255,255,255,.8)">${esc(aptNomeProp(p))} ${waProp}</div>
          <div style="font-size:9px;color:rgba(255,255,255,.3);margin-top:2px">Proprietário / morador</div>
        </td>
        <td><input class="pag-input" type="number" value="${p.cond}" style="width:72px" onchange="updatePag(${p.id},'cond',this.value)"></td>
        <td><input class="pag-input" type="number" value="${p.obra}" style="width:72px" onchange="updatePag(${p.id},'obra',this.value)"></td>
        <td><input class="pag-input" type="number" value="${p.seg}" style="width:72px" onchange="updatePag(${p.id},'seg',this.value)"></td>
        <td><span class="pag-total">${fmt(p.cond+p.obra+p.seg)}</span></td>
        <td>
          <button style="background:transparent;border:none;cursor:pointer;display:inline-flex;align-items:center;gap:4px;font-family:inherit" onclick="cyclePagDono(${p.id})">
            <div class="sdot ${stG}"></div><span class="badge ${stGCls}">${stGLbl}</span>
          </button>
        </td>
        <td>${aptTelProp(p)?`<button class="btn btn-p" style="padding:4px 8px;font-size:9px" onclick="abrirMsgCobrancaDono(${p.id})">💬</button>`:''}</td>`;
      tbody.appendChild(tr);
      const sep=document.createElement('tr');sep.innerHTML='<td colspan="8" style="height:4px;background:transparent;border:none"></td>';
      tbody.appendChild(sep);
    }
  });
}

function updatePag(id,f,v){const p=S.pagamentos.find(x=>x.id===id);if(p){p[f]=parseFloat(v)||0;renderPagamentos();saveState();}}

// Ciclar status: inquilino (cond)
function cyclePagCondSt(id){
  const p=S.pagamentos.find(x=>x.id===id);if(!p)return;
  const prev=p.st_cond;
  p.st_cond=p.st_cond==='ok'?'pend':p.st_cond==='pend'?'venc':'ok';
  renderPagamentos();renderDash();
  if(p.st_cond!=='ok') autoInadimplente(p,'inq');
  else{ const task=S.tasks.find(t=>t.t.includes('apt '+p.apt)&&t.t.includes('inquilino')&&t.col!=='done');if(task){task.col='done';renderKanban();}logAuto('info','💚',`Apt ${p.apt} — <strong>inquilino pagou</strong> o condomínio`,''); }
  saveState();if(document.getElementById('view-automacoes').classList.contains('on'))renderAutomacoes();
}
// Ciclar status: proprietário (obra+seg)
function cyclePagObraSt(id){
  const p=S.pagamentos.find(x=>x.id===id);if(!p)return;
  p.st_obra=p.st_obra==='ok'?'pend':p.st_obra==='pend'?'venc':'ok';
  renderPagamentos();renderDash();
  if(p.st_obra!=='ok') autoInadimplente(p,'prop');
  else{ logAuto('info','💚',`Apt ${p.apt} — <strong>proprietário pagou</strong> aporte e seguro`,''); }
  saveState();if(document.getElementById('view-automacoes').classList.contains('on'))renderAutomacoes();
}
// Ciclar status: dono morando (tudo junto)
function cyclePagDono(id){
  const p=S.pagamentos.find(x=>x.id===id);if(!p)return;
  const nx=aptStGeral(p)==='ok'?'pend':aptStGeral(p)==='pend'?'venc':'ok';
  p.st_cond=nx;p.st_obra=nx;
  renderPagamentos();renderDash();
  if(nx!=='ok') autoInadimplente(p,'dono');
  else{ const task=S.tasks.find(t=>t.t.includes('apt '+p.apt)&&t.col!=='done');if(task){task.col='done';renderKanban();}logAuto('info','💚',`Apt ${p.apt} — <strong>proprietário pagou</strong> tudo`,''); }
  saveState();if(document.getElementById('view-automacoes').classList.contains('on'))renderAutomacoes();
}
// compat alias
function cyclePagSt(id){cyclePagDono(id);}

// Mensagens de cobrança específicas
function abrirMsgCobrancaInq(id){
  const p=S.pagamentos.find(x=>x.id===id);if(!p||!p.inquilino)return;
  const msg=`Olá, ${p.inquilino.nome}! 😊

Passando para lembrar que o condomínio do mês de *Maio 2026* — Apt ${p.apt} — está em aberto.

💰 Condomínio: *${fmt(p.cond)}*

Qualquer dúvida, estamos à disposição!

_Síndicas — Edifício Pátio_`;
  const tel=(p.inquilino.tel||'').replace(/\D/g,'');
  if(tel)window.open(`https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`,'_blank');
  else{navigator.clipboard&&navigator.clipboard.writeText(msg).then(()=>toast('📋 Tel não cadastrado — mensagem copiada!'));}
}
function abrirMsgCobrancaProp(id){
  const p=S.pagamentos.find(x=>x.id===id);if(!p||!p.proprietario)return;
  const msg=`Olá, ${p.proprietario.nome}!

Informamos que o *aporte de obras e seguro* do Apt ${p.apt} — referente a *Maio 2026* — está em aberto.

💰 Aporte obras: *${fmt(p.obra)}*
💰 Seg. equipamentos: *${fmt(p.seg)}*
💰 Total: *${fmt(p.obra+p.seg)}*

Agradecemos a regularização.

_Síndicas — Edifício Pátio_`;
  const tel=(p.proprietario.tel||'').replace(/\D/g,'');
  if(tel)window.open(`https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`,'_blank');
  else{navigator.clipboard&&navigator.clipboard.writeText(msg).then(()=>toast('📋 Tel não cadastrado — mensagem copiada!'));}
}
function abrirMsgCobrancaDono(id){
  const p=S.pagamentos.find(x=>x.id===id);if(!p||!p.proprietario)return;
  const msg=`Olá, ${p.proprietario.nome}! 😊

Passando para lembrar que o condomínio do mês de *Maio 2026* — Apt ${p.apt} — está em aberto.

💰 Condomínio: *${fmt(p.cond)}*
💰 Aporte obras: *${fmt(p.obra)}*
💰 Seg. equipamentos: *${fmt(p.seg)}*
💰 *Total: ${fmt(p.cond+p.obra+p.seg)}*

Qualquer dúvida, estamos à disposição!

_Síndicas — Edifício Pátio_`;
  const tel=(p.proprietario.tel||'').replace(/\D/g,'');
  if(tel)window.open(`https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`,'_blank');
  else{navigator.clipboard&&navigator.clipboard.writeText(msg).then(()=>toast('📋 Tel não cadastrado — mensagem copiada!'));}
}
function abrirMsgCobranca(id){
  const p=S.pagamentos.find(x=>x.id===id);if(!p)return;
  if(p.tipo_apto==='aluguel'){abrirMsgCobrancaInq(id);abrirMsgCobrancaProp(id);}
  else abrirMsgCobrancaDono(id);
}

// ═══ FLUXO ═══
function renderFluxo(){
  const ent=S.fluxo.filter(f=>f.t==='entrada').reduce((a,b)=>a+b.v,0);
  const sai=S.fluxo.filter(f=>f.t==='saida'||f.t==='obras').reduce((a,b)=>a+b.v,0);
  const res=S.fluxo.filter(f=>f.t==='reserva').reduce((a,b)=>a+b.v,0);
  const saldo=ent-sai-res;const pct=Math.round(res/30000*100);
  document.getElementById('fc-ent').textContent=fmt(ent);document.getElementById('fc-sai').textContent=fmt(sai);
  const sel=document.getElementById('fc-saldo');sel.textContent=fmt(saldo);sel.style.color=saldo>=0?'#6ee7b7':'#fca5a5';
  document.getElementById('fc-res-val').textContent=fmt(res);document.getElementById('fc-res-meta').textContent='de R$30.000 meta · '+pct+'%';document.getElementById('fc-res-pct').textContent=pct+'%';document.getElementById('fc-res-bar').style.width=pct+'%';
  const list=document.getElementById('fc-list-rows');list.innerHTML='';
  S.fluxo.forEach(f=>{const row=document.createElement('div');row.className='fc-row';row.style.cursor='pointer';const pos=f.t==='entrada';row.innerHTML=`<div><div class="fc-name">${esc(f.d)}</div><div style="font-size:10px;color:rgba(255,255,255,.28);margin-top:3px;display:flex;gap:6px"><span class="badge ${f.t==='obras'?'bd-obras':f.t==='reserva'?'bd-inter':pos?'bd-ok':'bd-alta'}">${f.t}</span>${f.obs?'<span style="font-size:9px">📝</span>':''}</div></div><div style="display:flex;align-items:center;gap:10px"><span class="fc-val ${pos?'pos':f.t==='reserva'?'res':'neg'}">${pos?'+':'-'} ${fmt(f.v)}</span><button style="background:transparent;border:none;color:rgba(255,255,255,.2);cursor:pointer;font-size:13px;padding:4px;transition:.2s" onclick="openDrawer('fluxo',${f.id})">✎</button></div>`;list.appendChild(row);});
}

// ═══ OBRAS ═══
function switchObra(tab,btn){
  ['etapas','gantt','fornecedores','lembretes'].forEach(t=>document.getElementById('obra-'+t).style.display='none');
  document.getElementById('obra-'+tab).style.display='block';
  document.querySelectorAll('#view-obras .pills .pill').forEach(b=>b.classList.remove('on'));
  if(btn)btn.classList.add('on');
  const addMap={etapas:'modal-etapa',fornecedores:'modal-forn',lembretes:'modal-lem',gantt:'modal-etapa'};
  const lbl={etapas:'+ Etapa',fornecedores:'+ Fornecedor',lembretes:'+ Lembrete',gantt:'+ Etapa'};
  const addBtn=document.getElementById('ob-add-btn');
  if(addBtn){addBtn.textContent=lbl[tab]||'+ Adicionar';addBtn.onclick=()=>openModal(addMap[tab]);}
  if(tab==='fornecedores')renderFornecedores();
  if(tab==='lembretes')renderLembretes();
  if(tab==='gantt')renderGantt();
}
function renderObras(){
  const totalOrc=S.etapas.reduce((a,e)=>a+e.orc,0);
  const totalPago=S.etapas.flatMap(e=>e.items).reduce((a,i)=>a+i.pago,0);
  const totalItems=S.etapas.flatMap(e=>e.items).length;
  const doneItems=S.etapas.flatMap(e=>e.items).filter(i=>i.done).length;
  const pct=totalItems?Math.round(doneItems/totalItems*100):0;
  document.getElementById('ob-orc').textContent=fmt(totalOrc);
  document.getElementById('ob-gasto').textContent=fmt(totalPago);
  document.getElementById('ob-gasto-s').textContent=totalOrc?Math.round(totalPago/totalOrc*100)+'% do orçado':'';
  document.getElementById('ob-prog').textContent=pct+'%';
  document.getElementById('ob-prog-b').style.width=pct+'%';
  const prox=S.etapas.find(e=>!e.done);
  document.getElementById('ob-prox').textContent=prox?prox.nome:'Nenhum';
  document.getElementById('ob-prox-s').textContent=prox?prox.inicio+' – '+prox.fim:'';
  renderEtapas();
}
function renderEtapas(){
  const list=document.getElementById('etapas-list');list.innerHTML='';
  S.etapas.forEach(etapa=>{
    const doneI=etapa.items.filter(i=>i.done).length;
    const pct=etapa.items.length?Math.round(doneI/etapa.items.length*100):0;
    const pagototal=etapa.items.reduce((a,i)=>a+i.pago,0);
    const el=document.createElement('div');el.className='obra-etapa g';
    el.innerHTML=`<div class="etapa-hdr${etapa._open?' open':''}" onclick="toggleEtapa(${etapa.id},this)">
      <span class="etapa-arrow">▶</span>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:500;color:rgba(255,255,255,.85)">${esc(etapa.nome)}</div>
        <div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:3px;display:flex;gap:8px">${etapa.inicio}–${etapa.fim} · ${doneI}/${etapa.items.length} itens · Pago: ${fmt(pagototal)}${etapa.orc?' / Orc: '+fmt(etapa.orc):''}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:60px;height:4px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden"><div style="height:100%;background:linear-gradient(90deg,var(--amber),#d97706);width:${pct}%;border-radius:4px"></div></div>
        <span style="font-size:10px;color:rgba(255,255,255,.35)">${pct}%</span>
        ${etapa.link?`<a href="${esc(etapa.link)}" target="_blank" style="font-size:10px;color:var(--blue);text-decoration:none" title="Abrir link">🔗</a>`:''}
        <button class="btn btn-g" style="padding:4px 10px;font-size:10px" onclick="event.stopPropagation();S._etapaCtx=${etapa.id};document.getElementById('msi-etapa-nome').textContent='${esc(etapa.nome)}';openModal('modal-subitem')">+ item</button>
        <button class="btn btn-g" style="padding:4px 10px;font-size:10px" onclick="event.stopPropagation();openDrawer('etapa',${etapa.id})">✎</button>
      </div>
    </div>
    <div class="etapa-body" ${etapa._open?'style="display:block"':''}>
      ${etapa.obs?`<div style="font-size:11px;color:rgba(255,255,255,.3);padding:8px 12px;border-left:2px solid rgba(255,255,255,.08);margin-bottom:8px">${esc(etapa.obs)}</div>`:''}
      ${etapa.items.map(item=>`
        <div class="etapa-item">
          <div class="etapa-check ${item.done?'ck':''}" onclick="toggleEtapaItem(${etapa.id},${item.id})"></div>
          <span class="etapa-nome ${item.done?'':''}"; style="${item.done?'text-decoration:line-through;opacity:.45':''}">${esc(item.desc)}</span>
          <span class="etapa-val">Orc: ${fmt(item.orc)}</span>
          <span class="etapa-val ${item.pago?'pago':''}">Pago: ${fmt(item.pago)}</span>
          <button style="background:transparent;border:none;color:rgba(255,255,255,.2);cursor:pointer;font-size:11px;padding:2px 6px" onclick="editSubitem(${etapa.id},${item.id})">✎</button>
        </div>`).join('')}
      ${!etapa.items.length?'<div style="font-size:11px;color:rgba(255,255,255,.2);padding:8px 12px">Nenhum item. Clique "+ item" para adicionar.</div>':''}
    </div>`;
    list.appendChild(el);
  });
}
function toggleEtapa(id,hdr){const e=S.etapas.find(x=>x.id===id);if(e){e._open=!e._open;hdr.classList.toggle('open',e._open);const body=hdr.nextElementSibling;body.style.display=e._open?'block':'none';hdr.querySelector('.etapa-arrow').style.transform=e._open?'rotate(90deg)':'';};}
function toggleEtapaItem(eid,iid){const e=S.etapas.find(x=>x.id===eid);if(!e)return;const item=e.items.find(x=>x.id===iid);if(!item)return;item.done=!item.done;const allDone=e.items.length&&e.items.every(i=>i.done);if(allDone&&!e.done){e.done=true;autoEtapaConcluida(e);}else if(!item.done){e.done=false;}renderEtapas();renderObras();}
function editSubitem(eid,iid){const e=S.etapas.find(x=>x.id===eid);const item=e&&e.items.find(x=>x.id===iid);if(!item)return;document.getElementById('msi-desc').value=item.desc;document.getElementById('msi-orc').value=item.orc;document.getElementById('msi-pago').value=item.pago;document.getElementById('msi-etapa-nome').textContent=e.nome;S._etapaCtx=eid;S._editSubitemId=iid;openModal('modal-subitem');}
function renderGantt(){
  const g=document.getElementById('gantt-rows');if(!g)return;g.innerHTML='';
  const days=document.getElementById('gantt-days');if(days)days.innerHTML='';
  for(let d=1;d<=31;d++){const el=document.createElement('div');el.style.cssText='font-size:8px;color:rgba(255,255,255,.15);text-align:center';el.textContent=d;if(days)days.appendChild(el);}
  S.etapas.forEach(e=>{
    const row=document.createElement('div');row.className='gantt-row';
    const parseDay=s=>{const m=String(s||'').match(/(\d+)/);return m?parseInt(m[1]):1};
    const start=parseDay(e.inicio);const end=parseDay(e.fim);
    const left=Math.round((start-1)/31*100);const width=Math.max(3,Math.round((end-start+1)/31*100));
    const colors=e.done?'#6ee7b7':'linear-gradient(90deg,var(--amber),#f59e0b)';
    row.innerHTML=`<div class="gantt-label" title="${esc(e.nome)}">${esc(e.nome)}</div><div class="gantt-bar-wrap"><div class="gantt-bar" style="width:${width}%;margin-left:${left}%;background:${e.done?'var(--verde)':'var(--amber)'};color:rgba(0,0,0,.6)">${e.inicio}</div></div>`;
    g.appendChild(row);
  });
}
function renderFornecedores(){
  const grid=document.getElementById('fornecedores-grid');if(!grid)return;grid.innerHTML='';
  S.fornecedores.forEach(f=>{
    const card=document.createElement('div');card.className='g';card.style.cssText='border-radius:16px;padding:18px;transition:transform .2s;cursor:pointer';
    card.innerHTML=`<div style="font-size:16px;margin-bottom:10px">🏢</div><div style="font-family:\'Unbounded\',sans-serif;font-size:12px;font-weight:700;margin-bottom:4px">${esc(f.nome)}</div><div style="font-size:11px;color:rgba(255,255,255,.35);line-height:1.6">${esc(f.tipo)}<br>${esc(f.tel)}${f.data?'<br>📅 '+esc(f.data):''}</div>${f.val?`<div style="font-size:14px;font-weight:600;color:var(--amber);margin-top:8px">${fmt(f.val)}</div>`:''}<div style="display:flex;gap:6px;margin-top:12px"><button class="btn btn-g" style="flex:1;justify-content:center;padding:7px;font-size:10px" onclick="navigator.clipboard&&navigator.clipboard.writeText('${esc(f.tel)}').then(()=>toast('📋 Copiado!'))">Copiar tel</button>${f.tel?`<a href="https://wa.me/55${f.tel.replace(/\D/g,'')}" target="_blank" class="btn btn-v" style="padding:7px 12px;font-size:10px;text-decoration:none">WhatsApp</a>`:''}</div>`;
    card.addEventListener('click',e=>{if(!e.target.closest('.btn'))openDrawer('forn',f.id);});
    grid.appendChild(card);
  });
}
function renderLembretes(){
  const list=document.getElementById('lembretes-list');if(!list)return;list.innerHTML='';
  let lems=S.lembretes;if(S.lemFilt!=='todos')lems=lems.filter(l=>l.cat===S.lemFilt);
  lems.forEach(l=>{
    const el=document.createElement('div');el.className='chk-item'+(l.done?' done':'');
    const catColors={marceneiro:'rgba(245,158,11,.15)',vistoria:'rgba(96,165,250,.15)',geral:'rgba(255,255,255,.08)'};
    el.innerHTML=`<div class="chk-box ${l.done?'ck':''}" onclick="toggleLem(${l.id})"></div><div style="flex:1;cursor:pointer" onclick="openDrawer('lembrete',${l.id})"><div class="chk-t">${esc(l.desc)}</div>${l.srv?`<div style="font-size:10px;color:rgba(255,255,255,.28);margin-top:3px">🔗 ${esc(l.srv)}</div>`:''}</div><span style="font-size:9px;font-weight:600;padding:2px 8px;border-radius:20px;background:${catColors[l.cat]||catColors.geral};letter-spacing:.5px">${l.cat}</span><button style="background:transparent;border:none;color:rgba(255,255,255,.2);cursor:pointer;font-size:13px;padding:4px 6px" onclick="openDrawer('lembrete',${l.id})">✎</button>`;
    list.appendChild(el);
  });
}
function toggleLem(id){const l=S.lembretes.find(x=>x.id===id);if(l){l.done=!l.done;renderLembretes();renderDash();}}

// ═══ CHECKLIST ═══
function renderCheck(){
  const allI=S.check.flatMap(s=>s.items);const done=allI.filter(i=>i.done).length;const pct=Math.round(done/Math.max(1,allI.length)*100);
  document.getElementById('chk-done').textContent=done;document.getElementById('chk-total').textContent='de '+allI.length+' itens';document.getElementById('chk-pct').textContent=pct+'%';document.getElementById('chk-ring').setAttribute('stroke-dashoffset',207-207*(pct/100));
  const ferI=allI.filter(i=>i.r==='fer'||i.r==='amb');const ratI=allI.filter(i=>i.r==='rat'||i.r==='amb');
  const ferD=ferI.filter(i=>i.done).length;const ratD=ratI.filter(i=>i.done).length;
  document.getElementById('chk-fer-n').textContent=ferD+'/'+ferI.length;document.getElementById('chk-rat-n').textContent=ratD+'/'+ratI.length;
  document.getElementById('chk-fer-b').style.width=(ferI.length?Math.round(ferD/ferI.length*100):0)+'%';
  document.getElementById('chk-rat-b').style.width=(ratI.length?Math.round(ratD/ratI.length*100):0)+'%';
  const cont=document.getElementById('checklist-main');cont.innerHTML='';
  S.check.forEach(sec=>{
    const st=document.createElement('div');st.className='chk-sec-t';st.textContent=sec.s;cont.appendChild(st);
    sec.items.forEach(item=>{
      const el=document.createElement('div');el.className='chk-item'+(item.done?' done':'');
      const cN=(item.comments||[]).length;
      el.innerHTML=`<div class="chk-box ${item.done?'ck':''}" onclick="toggleChk('${item.id}')"></div><div style="flex:1;cursor:pointer" onclick="openDrawer('check','${item.id}')"><div class="chk-t">${esc(item.l)}</div><div style="display:flex;align-items:center;gap:5px;margin-top:4px"><span class="badge ${item.r==='fer'?'bd-fer':item.r==='rat'?'bd-rat':''}">${item.r==='amb'?'Ambas':item.r==='fer'?'Fernanda':'Ratazana'}</span>${item.obs?'<span style="font-size:9px;color:rgba(255,255,255,.25)">📝</span>':''}${cN?`<span style="font-size:9px;color:rgba(255,255,255,.25)">💬${cN}</span>`:''}</div></div><button style="background:transparent;border:none;color:rgba(255,255,255,.2);cursor:pointer;font-size:13px;padding:4px 6px;transition:.2s" onclick="openDrawer('check','${item.id}')">✎</button>`;
      cont.appendChild(el);
    });
  });
}
function toggleChk(id){S.check.forEach(s=>s.items.forEach(i=>{if(i.id===id)i.done=!i.done;}));renderCheck();renderDash();autoChecklistCompleto();}

// ═══ OCORRÊNCIAS ═══
function renderOcorrencias(){
  const list=document.getElementById('ocorr-list');list.innerHTML='';
  let ocs=S.ocorrencias;if(S.ocorrFilt!=='todas')ocs=ocs.filter(o=>o.st===S.ocorrFilt);
  if(!ocs.length){list.innerHTML='<div style="padding:24px;text-align:center;font-size:12px;color:rgba(255,255,255,.2)">Nenhuma ocorrência encontrada</div>';return;}
  const stColors={aberta:'#f87171',andamento:'#fbbf24',resolvida:'#6ee7b7'};
  const tipoIco={vazamento:'💧',barulho:'🔊',equipamento:'⚙️',limpeza:'🧹',outro:'📋'};
  ocs.forEach(o=>{
    const el=document.createElement('div');el.className='ocorr-item';el.style.cursor='pointer';
    el.innerHTML=`<div class="ocorr-status-dot" style="background:${stColors[o.st]||'#fff'}"></div>
      <div style="font-size:16px">${tipoIco[o.tipo]||'📋'}</div>
      <div style="flex:1" onclick="openDrawer('ocorr',${o.id})">
        <div style="font-size:13px;font-weight:500;color:rgba(255,255,255,.85)">${esc(o.t)}</div>
        <div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:3px;display:flex;gap:8px"><span>Apt ${o.apt}</span><span>${o.data}</span></div>
        ${o.desc?`<div style="font-size:11px;color:rgba(255,255,255,.4);margin-top:4px">${esc(o.desc.substring(0,80))}${o.desc.length>80?'…':''}</div>`:''}
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <span class="badge ${o.resp==='fer'?'bd-fer':o.resp==='rat'?'bd-rat':''}">${o.resp==='amb'?'Ambas':o.resp==='fer'?'Fernanda':'Ratazana'}</span>
        <button style="background:transparent;border:none;cursor:pointer;font-size:10px;color:rgba(255,255,255,.3)" onclick="cycleOcorrSt(${o.id})">${o.st==='aberta'?'→ andamento':o.st==='andamento'?'→ resolver':'✓ resolvida'}</button>
      </div>`;
    list.appendChild(el);
  });
}
function cycleOcorrSt(id){const o=S.ocorrencias.find(x=>x.id===id);if(o){o.st=o.st==='aberta'?'andamento':o.st==='andamento'?'resolvida':'aberta';renderOcorrencias();toast('✓ Status atualizado');}}

// ═══ CONDÔMINOS ═══
function renderCondominos(){
  const q=(document.getElementById('cond-search')?.value||'').toLowerCase();
  const grid=document.getElementById('cond-grid');grid.innerHTML='';
  const colors=['#c084b8','#6fcf97','#60a5fa','#f59e0b','#f87171','#a78bfa'];
  let idx=0;

  S.pagamentos.forEach(p=>{
    // ── Card do APT (wrapper) ──
    const aptDiv=document.createElement('div');
    aptDiv.style.cssText='grid-column:span 1';

    const stG=aptStGeral(p);
    const stBadge=`<span class="badge ${stG==='ok'?'bd-ok':stG==='venc'?'bd-venc':'bd-pend'}">${stG==='ok'?'Em dia':stG==='venc'?'Vencido':'Pend.'}</span>`;
    const tipoBadge=p.tipo_apto==='aluguel'?'<span class="badge bd-agd">aluguel</span>':'<span class="badge bd-ok">dono mora</span>';

    let cardHTML=`<div class="g" style="border-radius:16px;padding:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="font-family:'Unbounded',sans-serif;font-size:14px;font-weight:900;letter-spacing:-.5px">APT ${p.apt}</div>
        <div style="display:flex;gap:5px">${tipoBadge}${stBadge}</div>
      </div>`;

    // Proprietário
    const pr=p.proprietario||{};
    const prColor=colors[idx%colors.length];idx++;
    const prTelClean=(pr.tel||'').replace(/\D/g,'');
    cardHTML+=`<div style="background:rgba(255,255,255,.04);border-radius:12px;padding:12px;margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
        <div class="cond-avatar" style="width:36px;height:36px;background:${prColor+'22'};color:${prColor};border:1.5px solid ${prColor+'44'};font-size:13px">${(pr.nome||'P').charAt(0)}</div>
        <div style="flex:1">
          <div style="font-size:12px;font-weight:500;color:rgba(255,255,255,.85)">${esc(pr.nome||'Proprietário')}</div>
          <div style="font-size:9px;color:rgba(255,255,255,.3);margin-top:1px">Proprietário${p.tipo_apto==='aluguel'?' · paga obra + seg':' · paga tudo'}</div>
        </div>
        ${p.tipo_apto==='aluguel'?`<span class="badge ${p.st_obra==='ok'?'bd-ok':p.st_obra==='venc'?'bd-venc':'bd-pend'}" style="font-size:8px">${p.st_obra==='ok'?'✓':p.st_obra==='venc'?'Venc.':'Pend.'}</span>`:''}
      </div>
      ${pr.tel?`<div style="font-size:10px;color:rgba(255,255,255,.35);margin-bottom:6px">📱 ${esc(pr.tel)}</div>`:''}
      ${pr.email?`<div style="font-size:10px;color:rgba(255,255,255,.35);margin-bottom:6px">✉️ ${esc(pr.email)}</div>`:''}
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${prTelClean?`<a href="https://wa.me/55${prTelClean}" target="_blank" class="btn btn-v" style="padding:6px 10px;font-size:10px;text-decoration:none;flex:1;justify-content:center">📱 WhatsApp</a>`:'<span style="font-size:10px;color:rgba(255,255,255,.2)">Sem tel cadastrado</span>'}
        <button class="btn btn-p" style="padding:6px 10px;font-size:10px" onclick="${p.tipo_apto==='aluguel'?`abrirMsgCobrancaProp(${p.id})`:`abrirMsgCobrancaDono(${p.id})`}">💬 msg</button>
      </div>
    </div>`;

    // Inquilino (só se aluguel)
    if(p.tipo_apto==='aluguel'){
      const inq=p.inquilino||{};
      const inqColor=colors[idx%colors.length];idx++;
      const inqTelClean=(inq.tel||'').replace(/\D/g,'');
      cardHTML+=`<div style="background:rgba(96,165,250,.05);border:1px solid rgba(96,165,250,.12);border-radius:12px;padding:12px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <div class="cond-avatar" style="width:36px;height:36px;background:${inqColor+'22'};color:${inqColor};border:1.5px solid ${inqColor+'44'};font-size:13px">${(inq.nome||'I').charAt(0)}</div>
          <div style="flex:1">
            <div style="font-size:12px;font-weight:500;color:rgba(255,255,255,.85)">${esc(inq.nome||'Inquilino')}</div>
            <div style="font-size:9px;color:rgba(255,255,255,.3);margin-top:1px">Inquilino · paga condomínio</div>
          </div>
          <span class="badge ${p.st_cond==='ok'?'bd-ok':p.st_cond==='venc'?'bd-venc':'bd-pend'}" style="font-size:8px">${p.st_cond==='ok'?'✓':p.st_cond==='venc'?'Venc.':'Pend.'}</span>
        </div>
        ${inq.tel?`<div style="font-size:10px;color:rgba(255,255,255,.35);margin-bottom:6px">📱 ${esc(inq.tel)}</div>`:''}
        ${inq.email?`<div style="font-size:10px;color:rgba(255,255,255,.35);margin-bottom:6px">✉️ ${esc(inq.email)}</div>`:''}
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${inqTelClean?`<a href="https://wa.me/55${inqTelClean}" target="_blank" class="btn btn-b" style="padding:6px 10px;font-size:10px;text-decoration:none;flex:1;justify-content:center">📱 WhatsApp</a>`:'<span style="font-size:10px;color:rgba(255,255,255,.2)">Sem tel cadastrado</span>'}
          <button class="btn btn-p" style="padding:6px 10px;font-size:10px" onclick="abrirMsgCobrancaInq(${p.id})">💬 msg</button>
        </div>
      </div>`;
    }

    cardHTML+=`<button class="btn btn-g" style="width:100%;justify-content:center;margin-top:10px;font-size:10px" onclick="openDrawer('pag',${p.id})">✎ Editar dados do apto</button></div>`;
    aptDiv.innerHTML=cardHTML;

    const qStr=q.toLowerCase();
    const match=!q||p.apt.includes(qStr)||(p.proprietario?.nome||'').toLowerCase().includes(qStr)||(p.inquilino?.nome||'').toLowerCase().includes(qStr);
    if(match)grid.appendChild(aptDiv);
  });
  if(!grid.children.length)grid.innerHTML='<div style="grid-column:1/-1;padding:24px;text-align:center;font-size:12px;color:rgba(255,255,255,.2)">Nenhum condômino encontrado</div>';
}

// ═══ COMUNICADOS ═══
const TEMPLATES=[
  {id:'cob1',cat:'cobranca',tom:'gentil',titulo:'1º aviso — lembrete gentil',icon:'💌',msg:(p,mes)=>`Olá, ${p.prop}! 😊\n\nPassando para lembrar que o condomínio do mês de *${mes}* — Apt ${p.apt} — está em aberto.\n\n💰 Valor: *${fmt(p.cond+p.obra+p.seg)}*\n  → Condomínio: ${fmt(p.cond)}\n  → Aporte obras: ${fmt(p.obra)}\n  → Seg. equipamentos: ${fmt(p.seg)}\n\nQualquer dúvida, estamos à disposição! 🏢\n\n_Síndicas — Edifício Pátio_`},
  {id:'cob2',cat:'cobranca',tom:'direto',titulo:'2º aviso — cobrança direta',icon:'🔔',msg:(p,mes)=>`Olá, ${p.prop}.\n\nCondomínio ${mes} — Apt ${p.apt} *ainda em aberto*.\n\n💰 Total: *${fmt(p.cond+p.obra+p.seg)}*\n\nPor favor, efetue o pagamento o quanto antes para evitar encargos.\n\n_Síndicas — Edifício Pátio_`},
  {id:'cob3',cat:'cobranca',tom:'urgente',titulo:'3º aviso — vencido / urgente',icon:'⚠️',msg:(p,mes)=>`${p.prop}, boa tarde.\n\nO condomínio de *${mes}* — Apt ${p.apt} está *VENCIDO*.\n\n⚠️ Total em aberto: *${fmt(p.cond+p.obra+p.seg)}*\n\nSolicito a regularização *com urgência* para evitar procedimentos administrativos.\n\n_Síndicas — Edifício Pátio_`},
  {id:'obra1',cat:'obra',titulo:'Aviso de obra / serviço',icon:'🏗️',msg:(serv)=>`Prezados condôminos,\n\nInformamos que no dia *${serv.data||'a confirmar'}* haverá o seguinte serviço no condomínio:\n\n🔧 *${serv.nome}*\nEmpresa: ${serv.forn||'a definir'}\n\nPedimos compreensão pelos eventuais transtornos.\n\n_Síndicas — Edifício Pátio_`},
  {id:'manut1',cat:'manut',titulo:'Aviso de manutenção',icon:'🔩',msg:()=>`Prezados condôminos,\n\nComunicamos que haverá *manutenção preventiva* nas áreas comuns do edifício.\n\n📅 Data: a informar\n⏰ Horário: a informar\n🚧 Área: a informar\n\nAgradecemos a compreensão.\n\n_Síndicas — Edifício Pátio_`},
  {id:'prest1',cat:'prestacao',titulo:'Prestação de contas mensal',icon:'📊',msg:()=>{const ent=S.fluxo.filter(f=>f.t==='entrada').reduce((a,b)=>a+b.v,0);const sai=S.fluxo.filter(f=>f.t==='saida'||f.t==='obras').reduce((a,b)=>a+b.v,0);const res=S.fluxo.filter(f=>f.t==='reserva').reduce((a,b)=>a+b.v,0);const inad=S.pagamentos.filter(p=>p.st!=='ok').length;return `🏢 *PRESTAÇÃO DE CONTAS — MAIO 2026*\n*Edifício Pátio*\n\n📥 Entradas: *${fmt(ent)}*\n📤 Saídas: *${fmt(sai)}*\n🏦 Reserva acumulada: *${fmt(res)}*\n💰 Saldo livre: *${fmt(ent-sai-res)}*\n\n⚠️ Inadimplentes: ${inad} apt(s)\n\nQualquer dúvida, falar com as síndicas.\n\n_Fernanda e Ratazana — Síndicas_`;}},
];
function renderComunicados(){
  const grid=document.getElementById('comun-grid');grid.innerHTML='';
  let temps=TEMPLATES;if(S.comunFilt!=='todos')temps=temps.filter(t=>t.cat===S.comunFilt);
  temps.forEach(tpl=>{
    const card=document.createElement('div');card.className='g';card.style.cssText='border-radius:16px;padding:18px;display:flex;flex-direction:column;gap:10px';
    // get first inadimplente for preview
    const firstInad=S.pagamentos.find(p=>p.st!=='ok')||S.pagamentos[0];
    const firstServ=S.etapas[0]||{nome:'Serviço',forn:'Fornecedor',data:'19/05'};
    let msg='';
    try{msg=tpl.msg(firstInad||{},'Maio 2026',firstServ)||'';}catch(e){msg='...';}
    card.innerHTML=`<div style="display:flex;align-items:center;gap:10px;margin-bottom:2px"><span style="font-size:20px">${tpl.icon}</span><div><div style="font-size:12px;font-weight:600;color:rgba(255,255,255,.85)">${tpl.titulo}</div>${tpl.tom?`<div style="font-size:10px;color:rgba(255,255,255,.3)">Tom: ${tpl.tom}</div>`:''}</div></div>
      <div class="msg-preview" id="prev-${tpl.id}">${esc(msg)}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${tpl.cat==='cobranca'?`<select id="sel-${tpl.id}" style="background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:100px;padding:6px 12px;font-size:11px;color:#fff;outline:none;cursor:pointer">${S.pagamentos.map(p=>`<option value="${p.id}">${p.apt} — ${p.prop}</option>`).join('')}</select>`:''}
        <button class="btn btn-g" style="padding:7px 14px;font-size:11px;flex:1;justify-content:center" onclick="copiarMensagem('${tpl.id}')">📋 Copiar</button>
        ${tpl.cat==='cobranca'?`<button class="btn btn-v" style="padding:7px 14px;font-size:11px" onclick="abrirWhatsApp('${tpl.id}')">📲 WhatsApp</button>`:''}
      </div>`;
    grid.appendChild(card);
  });
}
function copiarMensagem(tplId){
  const tpl=TEMPLATES.find(t=>t.id===tplId);if(!tpl)return;
  let msg='';
  try{
    if(tpl.cat==='cobranca'){const sel=document.getElementById('sel-'+tplId);const pid=sel?parseInt(sel.value):null;const p=pid?S.pagamentos.find(x=>x.id===pid):S.pagamentos[0];msg=tpl.msg(p,'Maio 2026');}
    else{msg=tpl.msg(S.etapas[0]||{},'Maio 2026');}
  }catch(e){msg='';}
  navigator.clipboard&&navigator.clipboard.writeText(msg).then(()=>toast('📋 Mensagem copiada!'));
}
function abrirWhatsApp(tplId){
  const tpl=TEMPLATES.find(t=>t.id===tplId);if(!tpl)return;
  const sel=document.getElementById('sel-'+tplId);const pid=sel?parseInt(sel.value):null;
  const p=pid?S.pagamentos.find(x=>x.id===pid):S.pagamentos[0];
  if(!p)return;
  let msg='';try{msg=tpl.msg(p,'Maio 2026');}catch(e){return;}
  const tel=p.tel?p.tel.replace(/\D/g,''):'';
  if(tel)window.open(`https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`,'_blank');
  else{navigator.clipboard&&navigator.clipboard.writeText(msg).then(()=>toast('📋 Tel não cadastrado — mensagem copiada!'));}
}
function abrirMsgCobranca(pagId){
  const p=S.pagamentos.find(x=>x.id===pagId);if(!p)return;
  const tpl=TEMPLATES.find(t=>t.id===(p.st==='venc'?'cob3':p.st==='pend'?'cob2':'cob1'));
  if(!tpl)return;
  let msg='';try{msg=tpl.msg(p,'Maio 2026');}catch(e){return;}
  const tel=p.tel?p.tel.replace(/\D/g,''):'';
  if(tel)window.open(`https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`,'_blank');
  else{navigator.clipboard&&navigator.clipboard.writeText(msg).then(()=>toast('📋 Tel não cadastrado — mensagem copiada!'));}
}
function gerarResumoSemana(){
  const ent=S.fluxo.filter(f=>f.t==='entrada').reduce((a,b)=>a+b.v,0);
  const sai=S.fluxo.filter(f=>f.t==='saida'||f.t==='obras').reduce((a,b)=>a+b.v,0);
  const res=S.fluxo.filter(f=>f.t==='reserva').reduce((a,b)=>a+b.v,0);
  const inad=S.pagamentos.filter(p=>p.st!=='ok');
  const pend=S.tasks.filter(t=>t.col!=='done');
  const allI=S.check.flatMap(s=>s.items);const chkD=allI.filter(i=>i.done).length;
  const resumo=`📋 *RESUMO DA SEMANA — Edifício Pátio*\n${new Date().toLocaleDateString('pt-BR')}\n\n💰 *Financeiro*\nEntradas: ${fmt(ent)} | Saídas: ${fmt(sai)}\nReserva: ${fmt(res)} (${Math.round(res/30000*100)}% da meta)\n\n🏗️ *Obras*\n${S.etapas.filter(e=>!e.done).map(e=>`• ${e.nome} (${e.inicio}–${e.fim})`).join('\n')||'Nenhuma pendente'}\n\n⚠️ *Inadimplentes (${inad.length})*\n${inad.map(p=>`• Apt ${p.apt} — ${p.prop}: ${fmt(p.cond+p.obra+p.seg)} (${p.st})`).join('\n')||'Todos em dia! ✅'}\n\n✅ *Checklist: ${chkD}/${allI.length} itens*\n📝 *Tarefas abertas: ${pend.length}*\n\n_Fernanda e Ratazana — Síndicas_`;
  navigator.clipboard&&navigator.clipboard.writeText(resumo).then(()=>toast('📋 Resumo copiado para a área de transferência!'));
}

// ═══ ASSEMBLEIAS ═══
function renderAssembleias(){
  const list=document.getElementById('assem-list');list.innerHTML='';
  if(!S.assembleias.length){list.innerHTML='<div class="g" style="border-radius:16px;padding:24px;text-align:center;font-size:12px;color:rgba(255,255,255,.2)">Nenhuma assembleia registrada</div>';return;}
  S.assembleias.forEach(a=>{
    const card=document.createElement('div');card.className='g';card.style.cssText='border-radius:16px;padding:18px;cursor:pointer;transition:transform .2s;margin-bottom:10px';
    card.innerHTML=`<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px">
      <div><div style="font-family:\'Unbounded\',sans-serif;font-size:14px;font-weight:700;letter-spacing:-.3px">${esc(a.t)}</div><div style="font-size:11px;color:rgba(255,255,255,.35);margin-top:4px">📅 ${esc(a.data)} · 📍 ${esc(a.local)}</div></div>
      <button class="btn btn-g" style="padding:6px 12px;font-size:10px" onclick="gerarAta(${a.id})">📋 Gerar ata</button>
    </div>
    ${a.pautas?`<div style="font-size:11px;color:rgba(255,255,255,.45);line-height:1.6;white-space:pre-line">${esc(a.pautas)}</div>`:''}
    ${a.ata?`<div style="background:rgba(107,143,113,.08);border:1px solid rgba(107,143,113,.2);border-radius:10px;padding:10px;margin-top:10px;font-size:11px;color:rgba(255,255,255,.5);white-space:pre-line">${esc(a.ata)}</div>`:``}`;
    card.onclick=e=>{if(!e.target.closest('.btn'))openDrawer('assem',a.id);};
    list.appendChild(card);
  });
}
function gerarAta(id){
  const a=S.assembleias.find(x=>x.id===id);if(!a)return;
  const ata=`ATA DA ASSEMBLEIA — ${a.t.toUpperCase()}\n\nData: ${a.data}\nLocal: ${a.local}\nEdifício Pátio — Rua Raimundo Correia, 211, São Pedro, BH\n\nPautas discutidas:\n${a.pautas||'—'}\n\nResultados e deliberações:\n${a.ata||'(Preencher após a assembleia)'}\n\n_____________________________\nFernanda — Síndica\n\n_____________________________\nRatazana — Co-síndica\n\nData da lavratura: ${new Date().toLocaleDateString('pt-BR')}`;
  navigator.clipboard&&navigator.clipboard.writeText(ata).then(()=>toast('📋 Ata copiada!'));
}

// ═══ CALENDÁRIO ═══
const MONTHS=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
function calNav(d){S.calOff+=d;renderCal();}
function renderCal(){
  const now=new Date();const d=new Date(now.getFullYear(),now.getMonth()+S.calOff,1);
  document.getElementById('cal-title').textContent=MONTHS[d.getMonth()]+' '+d.getFullYear();
  const dh=document.getElementById('cal-dh');dh.innerHTML='';
  ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].forEach(x=>{const h=document.createElement('div');h.className='cal-dh';h.textContent=x;dh.appendChild(h);});
  const grid=document.getElementById('cal-grid');grid.innerHTML='';
  const first=new Date(d.getFullYear(),d.getMonth(),1).getDay();
  const total=new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
  const prev=new Date(d.getFullYear(),d.getMonth(),0).getDate();
  for(let i=0;i<first;i++){const el=document.createElement('div');el.className='cday other';el.innerHTML=`<div class="cday-n">${prev-first+i+1}</div>`;grid.appendChild(el);}
  for(let dd=1;dd<=total;dd++){
    const el=document.createElement('div');const isToday=S.calOff===0&&dd===now.getDate();
    el.className='cday'+(isToday?' today':'');
    let html=`<div class="cday-n">${dd}</div>`;
    S.eventos.filter(e=>e.dia===dd).forEach(e=>{html+=`<div class="cevt ${e.cat}">${esc(e.l)}</div>`;});
    el.innerHTML=html;el.onclick=()=>{document.getElementById('mev-dia').value=dd;openModal('modal-evento');};
    grid.appendChild(el);
  }
  const rem=42-first-total;for(let i=1;i<=rem;i++){const el=document.createElement('div');el.className='cday other';el.innerHTML=`<div class="cday-n">${i}</div>`;grid.appendChild(el);}
  const evList=document.getElementById('cal-events-list');evList.innerHTML='';
  [...S.eventos].sort((a,b)=>a.dia-b.dia).forEach(e=>{
    const el=document.createElement('div');el.style.cssText='display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(255,255,255,.04);border-radius:12px;margin-bottom:5px';
    el.innerHTML=`<div style="font-family:\'Unbounded\',sans-serif;font-size:18px;font-weight:700;letter-spacing:-1px;color:rgba(255,255,255,.3);min-width:30px">${e.dia}</div><div><div style="font-size:12px;color:rgba(255,255,255,.75)">${esc(e.l)}</div><span class="cevt ${e.cat}" style="margin-top:3px;display:inline-block">${e.cat}</span></div>`;
    evList.appendChild(el);
  });
}

// ═══ AUTOMAÇÕES ═══
function logAuto(type,icon,msg,detail){
  S.autoLog.unshift({type,icon,msg,detail,time:nowStr(),id:S.nid++});
  if(S.autoLog.length>60)S.autoLog.pop();
  const dot=document.getElementById('auto-notif-dot');if(dot)dot.style.display='block';
  updateAutoFeed();
}
function updateAutoFeed(){
  const feed=document.getElementById('auto-feed');if(!feed)return;
  feed.innerHTML='';
  if(!S.autoLog.length){feed.innerHTML='<div style="font-size:12px;color:rgba(255,255,255,.2);padding:12px;text-align:center">Nenhuma automação disparada ainda.</div>';return;}
  S.autoLog.slice(0,20).forEach(e=>{
    const el=document.createElement('div');el.className=`auto-entry ${e.type}`;
    el.innerHTML=`<div class="auto-ico ${e.type}">${e.icon}</div><div style="flex:1"><div style="font-size:12px;color:rgba(255,255,255,.72);line-height:1.5">${e.msg}</div>${e.detail?`<div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:3px">${e.detail}</div>`:''}<div style="font-size:9px;color:rgba(255,255,255,.2);margin-top:4px">${e.time}</div></div>`;
    feed.appendChild(el);
  });
}
function autoInadimplente(p, quem){
  if(!S.rules.inadimplente_task)return;
  // quem = 'inq' | 'prop' | 'dono'
  const isAluguel = p.tipo_apto==='aluguel';
  const stG = aptStGeral(p);
  const nomeInq = aptNomeInq(p);
  const nomeProp = aptNomeProp(p);

  if(quem==='inq'||(!quem&&isAluguel&&p.st_cond!=='ok')){
    const titulo=`Cobrar apt ${p.apt} — inquilino (cond) ${p.st_cond==='venc'?'VENCIDO':'pendente'}`;
    if(!S.tasks.find(t=>t.t.includes('apt '+p.apt)&&t.t.includes('inquilino')&&t.col!=='done')){
      S.tasks.push({id:S.nid++,t:titulo,col:'todo',resp:'rat',pri:p.st_cond==='venc'?'alta':'media',cat:'',obs:`Inquilino: ${nomeInq} · Cond: ${fmt(p.cond)}`,comments:[]});
      logAuto('task','🔔',`<strong>Tarefa para Ratazana:</strong> cobrar apt ${p.apt} — inquilino`,`${nomeInq} · ${fmt(p.cond)} · ${p.st_cond}`);
    }
    if(p.st_cond==='venc'&&S.rules.vencida_lembrete)S.lembretes.push({id:S.nid++,desc:`Ligar para inquilino apt ${p.apt} — ${nomeInq}`,cat:'geral',srv:'Cobrança automática',done:false,obs:''});
  }
  if(quem==='prop'||(!quem&&isAluguel&&p.st_obra!=='ok')){
    const titulo=`Cobrar apt ${p.apt} — proprietário (obra+seg) ${p.st_obra==='venc'?'VENCIDO':'pendente'}`;
    if(!S.tasks.find(t=>t.t.includes('apt '+p.apt)&&t.t.includes('proprietário')&&t.col!=='done')){
      S.tasks.push({id:S.nid++,t:titulo,col:'todo',resp:'rat',pri:p.st_obra==='venc'?'alta':'media',cat:'',obs:`Proprietário: ${nomeProp} · Obra: ${fmt(p.obra)} + Seg: ${fmt(p.seg)}`,comments:[]});
      logAuto('task','🔔',`<strong>Tarefa para Ratazana:</strong> cobrar apt ${p.apt} — proprietário`,`${nomeProp} · ${fmt(p.obra+p.seg)} · ${p.st_obra}`);
    }
    if(p.st_obra==='venc'&&S.rules.vencida_lembrete)S.lembretes.push({id:S.nid++,desc:`Ligar para proprietário apt ${p.apt} — ${nomeProp}`,cat:'geral',srv:'Cobrança automática',done:false,obs:''});
  }
  if(quem==='dono'||(!quem&&!isAluguel&&stG!=='ok')){
    const titulo=`Cobrar apt ${p.apt} — ${nomeProp} (${stG==='venc'?'VENCIDO':'pendente'})`;
    if(!S.tasks.find(t=>t.t.includes('apt '+p.apt)&&t.col!=='done')){
      S.tasks.push({id:S.nid++,t:titulo,col:'todo',resp:'rat',pri:stG==='venc'?'alta':'media',cat:'',obs:`${nomeProp} · Total: ${fmt(p.cond+p.obra+p.seg)}`,comments:[]});
      logAuto('task','🔔',`<strong>Tarefa para Ratazana:</strong> cobrar apt ${p.apt} — ${nomeProp}`,`Total: ${fmt(p.cond+p.obra+p.seg)}`);
    }
  }
}
function autoEtapaConcluida(etapa){
  if(!S.rules.obra_concluida_fluxo)return;
  const gasto=etapa.items.reduce((a,i)=>a+i.pago,0);
  if(gasto>0){S.fluxo.push({id:S.nid++,d:'Etapa concluída: '+etapa.nome,t:'obras',v:gasto,obs:'Lançado automaticamente'});}
  const chkItem=S.check.flatMap(s=>s.items).find(i=>i.l.toLowerCase().includes(etapa.nome.toLowerCase().substring(0,10)));
  if(chkItem){chkItem.done=true;renderCheck();}
  logAuto('check','✅',`<strong>Etapa concluída:</strong> ${etapa.nome}`,gasto?`R$${gasto.toLocaleString('pt-BR')} lançado no fluxo de obras`:'');
  S.eventos.push({id:S.nid++,dia:new Date().getDate(),l:'✅ '+etapa.nome,cat:'obras'});
  renderFluxo();renderDash();
}
function autoServicoAgendado(serv){
  if(!S.rules.obra_concluida_fluxo)return;
  const sec=S.check.find(s=>s.s==='Obras');if(!sec)return;
  if(sec.items.find(i=>i.l.toLowerCase().includes((serv.nome||serv.forn||'').toLowerCase().substring(0,8))))return;
  sec.items.push({id:'auto_'+S.nid++,l:`Acompanhar: ${serv.nome}`,done:false,r:'amb',obs:'',comments:[]});
  logAuto('check','📋',`<strong>Item adicionado ao checklist:</strong> ${serv.nome}`,'Criado automaticamente ao adicionar serviço');
}
function autoChecklistCompleto(){
  const all=S.check.flatMap(s=>s.items);
  if(all.length&&all.every(i=>i.done)){logAuto('check','🎉','<strong>Checklist 100% concluído!</strong> Parabéns Fernanda e Ratazana 🎊','Todos os itens do mês foram marcados como feitos!');}
}
function autoReservaAlerta(){
  if(!S.rules.reserva_alerta)return;
  const res=S.fluxo.filter(f=>f.t==='reserva').reduce((a,b)=>a+b.v,0);
  const pct=Math.round(res/30000*100);
  if(pct<10&&!S.autoLog.find(l=>l.msg&&l.msg.includes('Reserva abaixo'))){logAuto('alert','💰',`<strong>Reserva abaixo de 10%</strong> — apenas ${pct}%`,`Atual: ${fmt(res)} de R$30.000 meta · Sugestão: separar pelo menos R$${((30000*0.1)-res).toLocaleString('pt-BR')} este mês`);}
}
function autoVencimento3dias(){
  if(!S.rules.vencimento_3dias)return;
  const hoje=new Date().getDate();
  S.pagamentos.filter(p=>p.st!=='ok'&&p.venc&&Math.abs(p.venc-hoje)<=3).forEach(p=>{
    if(!S.tasks.find(t=>t.t.includes('vence apt '+p.apt)))
      logAuto('alert','📅',`<strong>Vencimento próximo:</strong> Apt ${p.apt} — ${p.prop}`,`Vence dia ${p.venc} · ${fmt(p.cond+p.obra+p.seg)}`);
  });
}
function runAutomations(trigger){
  S.pagamentos.forEach(p=>{
    const stG=aptStGeral(p);
    if(stG!=='ok'){
      if(p.tipo_apto==='aluguel'){
        if(p.st_cond!=='ok')autoInadimplente(p,'inq');
        if(p.st_obra!=='ok')autoInadimplente(p,'prop');
      } else { autoInadimplente(p,'dono'); }
    }
  });
  autoReservaAlerta();autoVencimento3dias();
  if(trigger&&trigger!=='inicialização')logAuto('info','⚡',`<strong>Automações verificadas</strong> — via ${trigger}`,'');
}
function renderAutomacoes(){
  document.getElementById('auto-notif-dot').style.display='none';
  document.getElementById('aut-tasks').textContent=S.tasks.filter(t=>t.col!=='done').length;
  document.getElementById('aut-inad').textContent=S.pagamentos.filter(p=>p.st!=='ok').length;
  const allI=S.check.flatMap(s=>s.items);
  document.getElementById('aut-chk').textContent=allI.length?Math.round(allI.filter(i=>i.done).length/allI.length*100)+'%':'0%';
  const res=S.fluxo.filter(f=>f.t==='reserva').reduce((a,b)=>a+b.v,0);
  document.getElementById('aut-res').textContent=Math.round(res/30000*100)+'%';
  updateAutoFeed();
  // inadimplentes detail
  const id=document.getElementById('inad-detail');id.innerHTML='';
  const inad=S.pagamentos.filter(p=>p.st!=='ok');
  if(!inad.length){id.innerHTML='<div style="font-size:12px;color:rgba(255,255,255,.2);padding:12px;text-align:center">✅ Nenhum inadimplente!</div>';return;}
  inad.forEach(p=>{
    const el=document.createElement('div');el.style.cssText='display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:rgba(255,255,255,.04);border-radius:10px;margin-bottom:6px';
    const task=S.tasks.find(t=>t.t.includes('apt '+p.apt)&&t.col!=='done');
    el.innerHTML=`<div><div style="font-size:12px;font-weight:500;color:rgba(255,255,255,.8)">Apt ${p.apt} — ${p.prop}</div><div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:3px;display:flex;gap:6px"><span class="badge ${p.st==='venc'?'bd-venc':'bd-pend'}">${p.st}</span>${task?'<span class="badge bd-rat">tarefa criada</span>':''}</div></div><div style="text-align:right"><div style="font-size:13px;font-weight:600;color:#fca5a5">${fmt(p.cond+p.obra+p.seg)}</div><button class="btn btn-p" style="padding:4px 10px;font-size:9px;margin-top:4px" onclick="cyclePagSt(${p.id})">Marcar pago</button></div>`;
    id.appendChild(el);
  });
  // rules
  const rulesCont=document.getElementById('rules-list');rulesCont.innerHTML='';
  const RULES=[
    {key:'inadimplente_task',icon:'🔔',t:'Inadimplente → Tarefa para Ratazana',d:'Cria tarefa de cobrança automaticamente quando apt fica pendente/vencido'},
    {key:'vencida_lembrete',icon:'⚠️',t:'Vencido → Lembrete urgente',d:'Adiciona lembrete de cobrança quando status vai para Vencido'},
    {key:'reserva_alerta',icon:'💰',t:'Reserva < 10% → Alerta com sugestão',d:'Alerta quando reserva cair abaixo de 10% da meta (R$3.000)'},
    {key:'obra_concluida_fluxo',icon:'🏗️',t:'Etapa concluída → Fluxo + Checklist',d:'Lança gasto no fluxo e marca item do checklist quando etapa é concluída'},
    {key:'checklist_completo',icon:'✅',t:'Checklist 100% → Celebração no feed',d:'Registra quando todos os itens do mês são concluídos'},
    {key:'vencimento_3dias',icon:'📅',t:'Vencimento em 3 dias → Alerta',d:'Alerta preventivo quando um pagamento está próximo do vencimento'},
  ];
  RULES.forEach(r=>{
    const el=document.createElement('div');el.className='rule-card';
    el.innerHTML=`<div style="width:36px;height:36px;border-radius:10px;background:rgba(212,120,154,.1);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">${r.icon}</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:500;color:rgba(255,255,255,.8);margin-bottom:3px">${r.t}</div><div style="font-size:10px;color:rgba(255,255,255,.3);line-height:1.5">${r.d}</div></div>
      <label class="rule-toggle"><input type="checkbox" ${S.rules[r.key]?'checked':''} onchange="S.rules['${r.key}']=this.checked;toast(this.checked?'✓ Ativada':'Desativada')"><div class="rule-track"></div></label>`;
    rulesCont.appendChild(el);
  });
}

// ═══ DRAWER UNIVERSAL ═══
let drawerCtx=null,_drResp=null;
function openDrawer(type,id){drawerCtx={type,id};_drResp=null;document.getElementById('drawer-bg').classList.add('open');buildDrawer(type,id);}
function closeDrawer(){document.getElementById('drawer-bg').classList.remove('open');drawerCtx=null;}
function getItem(type,id){
  if(type==='task')return S.tasks.find(x=>x.id===id);
  if(type==='etapa')return S.etapas.find(x=>x.id===id);
  if(type==='forn')return S.fornecedores.find(x=>x.id===id);
  if(type==='lembrete')return S.lembretes.find(x=>x.id===id);
  if(type==='fluxo')return S.fluxo.find(x=>x.id===id);
  if(type==='pag')return S.pagamentos.find(x=>x.id===id);
  if(type==='ocorr')return S.ocorrencias.find(x=>x.id===id);
  if(type==='assem')return S.assembleias.find(x=>x.id===id);
  if(type==='check'){let f=null;S.check.forEach(s=>s.items.forEach(i=>{if(i.id===id)f=i;}));return f;}
  return null;
}
function buildDrawer(type,id){
  const body=document.getElementById('drawer-body');const dot=document.getElementById('dt-dot');const typeEl=document.getElementById('dt-type');const titleEl=document.getElementById('dt-title');
  body.innerHTML='';
  const colors={task:'#D4789A',etapa:'#F59E0B',forn:'#F59E0B',lembrete:'#60A5FA',fluxo:'#6ee7b7',check:'#A8C4AB',pag:'#6ee7b7',ocorr:'#f87171',assem:'#a78bfa'};
  dot.style.background=colors[type]||'#fff';
  const item=getItem(type,id);if(!item){body.innerHTML='<div style="padding:20px;color:rgba(255,255,255,.3)">Item não encontrado</div>';return;}
  typeEl.textContent={task:'Tarefa',etapa:'Etapa de obra',forn:'Fornecedor',lembrete:'Lembrete',fluxo:'Lançamento',check:'Checklist',pag:'Pagamento',ocorr:'Ocorrência',assem:'Assembleia'}[type]||type;
  titleEl.textContent=item.t||item.d||item.nome||item.desc||item.l||'—';
  let fields='';
  if(type==='task'){
    fields=`<span class="df-label">Título</span><input class="df-input" id="de-t" value="${esc(item.t)}">
    <span class="df-label">Atribuir a</span><div class="resp-row"><button class="resp-opt ${item.resp==='fer'?'on fer':''}" onclick="drR('fer')">Fernanda</button><button class="resp-opt ${item.resp==='rat'?'on rat':''}" onclick="drR('rat')">Ratazana</button><button class="resp-opt ${item.resp==='amb'?'on amb':''}" onclick="drR('amb')">Ambas</button></div>
    <span class="df-label">Coluna</span><select class="df-select" id="de-col"><option value="todo" ${item.col==='todo'?'selected':''}>A fazer</option><option value="doing" ${item.col==='doing'?'selected':''}>Em andamento</option><option value="done" ${item.col==='done'?'selected':''}>Concluído</option></select>
    <span class="df-label">Prioridade</span><select class="df-select" id="de-pri"><option value="alta" ${item.pri==='alta'?'selected':''}>Alta</option><option value="media" ${item.pri==='media'?'selected':''}>Média</option><option value="baixa" ${item.pri==='baixa'?'selected':''}>Baixa</option></select>
    <span class="df-label">Categoria</span><select class="df-select" id="de-cat"><option value="" ${!item.cat?'selected':''}>Geral</option><option value="obras" ${item.cat==='obras'?'selected':''}>Obras</option><option value="inter" ${item.cat==='inter'?'selected':''}>Inter</option></select>
    <span class="df-label">Observações</span><textarea class="df-textarea" id="de-obs">${esc(item.obs||'')}</textarea>`;
  }else if(type==='etapa'){
    fields=`<span class="df-label">Nome</span><input class="df-input" id="de-t" value="${esc(item.nome)}">
    <span class="df-label">Período</span><div style="display:flex;gap:8px"><input class="df-input" id="de-ini" value="${esc(item.inicio)}" placeholder="Início" style="flex:1"><input class="df-input" id="de-fim" value="${esc(item.fim)}" placeholder="Fim" style="flex:1"></div>
    <span class="df-label">Valor orçado (R$)</span><input class="df-input" type="number" id="de-orc" value="${item.orc||0}">
    <span class="df-label">Link orçamento / fotos</span><input class="df-input" id="de-link" value="${esc(item.link||'')}">
    <span class="df-label">Observações</span><textarea class="df-textarea" id="de-obs">${esc(item.obs||'')}</textarea>`;
  }else if(type==='forn'){
    fields=`<span class="df-label">Nome</span><input class="df-input" id="de-t" value="${esc(item.nome)}">
    <span class="df-label">Serviço</span><input class="df-input" id="de-tipo" value="${esc(item.tipo||'')}">
    <span class="df-label">Telefone</span><input class="df-input" id="de-tel" value="${esc(item.tel||'')}">
    <span class="df-label">Valor (R$)</span><input class="df-input" type="number" id="de-val" value="${item.val||0}">
    <span class="df-label">Data / Visita</span><input class="df-input" id="de-data" value="${esc(item.data||'')}">
    <span class="df-label">Observações (CNPJ, endereço...)</span><textarea class="df-textarea" id="de-obs">${esc(item.obs||'')}</textarea>`;
  }else if(type==='lembrete'){
    fields=`<span class="df-label">Descrição</span><input class="df-input" id="de-t" value="${esc(item.desc)}">
    <span class="df-label">Categoria</span><select class="df-select" id="de-cat"><option value="marceneiro" ${item.cat==='marceneiro'?'selected':''}>Marceneiro</option><option value="vistoria" ${item.cat==='vistoria'?'selected':''}>Vistoria</option><option value="geral" ${item.cat==='geral'?'selected':''}>Geral</option></select>
    <span class="df-label">Serviço relacionado</span><input class="df-input" id="de-srv" value="${esc(item.srv||'')}">
    <span class="df-label">Observações</span><textarea class="df-textarea" id="de-obs">${esc(item.obs||'')}</textarea>`;
  }else if(type==='fluxo'){
    fields=`<span class="df-label">Descrição</span><input class="df-input" id="de-t" value="${esc(item.d)}">
    <span class="df-label">Tipo</span><select class="df-select" id="de-tipo"><option value="entrada" ${item.t==='entrada'?'selected':''}>Entrada</option><option value="saida" ${item.t==='saida'?'selected':''}>Saída</option><option value="obras" ${item.t==='obras'?'selected':''}>Obras</option><option value="reserva" ${item.t==='reserva'?'selected':''}>Reserva</option></select>
    <span class="df-label">Valor (R$)</span><input class="df-input" type="number" id="de-val" value="${item.v||0}">
    <span class="df-label">Observações</span><textarea class="df-textarea" id="de-obs">${esc(item.obs||'')}</textarea>`;
  }else if(type==='check'){
    fields=`<span class="df-label">Descrição</span><input class="df-input" id="de-t" value="${esc(item.l)}">
    <span class="df-label">Responsável</span><div class="resp-row"><button class="resp-opt ${item.r==='fer'?'on fer':''}" onclick="drR('fer')">Fernanda</button><button class="resp-opt ${item.r==='rat'?'on rat':''}" onclick="drR('rat')">Ratazana</button><button class="resp-opt ${item.r==='amb'?'on amb':''}" onclick="drR('amb')">Ambas</button></div>
    <span class="df-label">Status</span><select class="df-select" id="de-done"><option value="0" ${!item.done?'selected':''}>Pendente</option><option value="1" ${item.done?'selected':''}>Concluído</option></select>
    <span class="df-label">Observações</span><textarea class="df-textarea" id="de-obs">${esc(item.obs||'')}</textarea>`;
  }else if(type==='pag'){
    fields=`<span class="df-label">Proprietário</span><input class="df-input" id="de-t" value="${esc(item.prop)}">
    <span class="df-label">Telefone</span><input class="df-input" id="de-tel" value="${esc(item.tel||'')}">
    <span class="df-label">E-mail</span><input class="df-input" id="de-email" value="${esc(item.email||'')}">
    <span class="df-label">Cond. mensal (R$)</span><input class="df-input" type="number" id="de-cond" value="${item.cond}">
    <span class="df-label">Aporte obras (R$)</span><input class="df-input" type="number" id="de-obra" value="${item.obra}">
    <span class="df-label">Seg. equipamentos (R$)</span><input class="df-input" type="number" id="de-seg" value="${item.seg}">
    <span class="df-label">Status</span><select class="df-select" id="de-st"><option value="ok" ${item.st==='ok'?'selected':''}>✓ Pago</option><option value="pend" ${item.st==='pend'?'selected':''}>Pendente</option><option value="venc" ${item.st==='venc'?'selected':''}>Vencido</option></select>
    <span class="df-label">Observações</span><textarea class="df-textarea" id="de-obs">${esc(item.obs||'')}</textarea>`;
  }else if(type==='ocorr'){
    fields=`<span class="df-label">Título</span><input class="df-input" id="de-t" value="${esc(item.t)}">
    <span class="df-label">Apartamento</span><input class="df-input" id="de-apt" value="${esc(item.apt||'')}">
    <span class="df-label">Status</span><select class="df-select" id="de-st"><option value="aberta" ${item.st==='aberta'?'selected':''}>Aberta</option><option value="andamento" ${item.st==='andamento'?'selected':''}>Em andamento</option><option value="resolvida" ${item.st==='resolvida'?'selected':''}>Resolvida</option></select>
    <span class="df-label">Responsável</span><div class="resp-row"><button class="resp-opt ${item.resp==='fer'?'on fer':''}" onclick="drR('fer')">Fernanda</button><button class="resp-opt ${item.resp==='rat'?'on rat':''}" onclick="drR('rat')">Ratazana</button><button class="resp-opt ${item.resp==='amb'?'on amb':''}" onclick="drR('amb')">Ambas</button></div>
    <span class="df-label">Descrição</span><textarea class="df-textarea" id="de-obs">${esc(item.desc||'')}</textarea>`;
  }else if(type==='assem'){
    fields=`<span class="df-label">Título</span><input class="df-input" id="de-t" value="${esc(item.t)}">
    <span class="df-label">Data e horário</span><input class="df-input" id="de-data" value="${esc(item.data||'')}">
    <span class="df-label">Local</span><input class="df-input" id="de-local" value="${esc(item.local||'')}">
    <span class="df-label">Pautas</span><textarea class="df-textarea" id="de-pautas">${esc(item.pautas||'')}</textarea>
    <span class="df-label">Ata / Resultado</span><textarea class="df-textarea" id="de-ata">${esc(item.ata||'')}</textarea>`;
  }
  body.innerHTML=fields+commHTML(item);
}
function drR(r){_drResp=r;document.querySelectorAll('#drawer-body .resp-opt').forEach(b=>{const bl=b.textContent.toLowerCase();const match=(r==='fer'&&bl.includes('fern'))||(r==='rat'&&bl.includes('rat'))||(r==='amb'&&bl.includes('amb'));b.className='resp-opt'+(match?' on '+r:'');});}
function commHTML(item){
  const comments=item.comments||[];
  const list=comments.map((c,i)=>`<div class="comment-item"><div class="comment-meta"><div class="comment-av ${c.author}">${c.author==='fer'?'Fe':'Ra'}</div><span class="comment-author">${c.author==='fer'?'Fernanda':'Ratazana'}</span><span class="comment-time">${c.time}</span></div><div class="comment-text">${esc(c.text)}</div><button class="comment-del" onclick="delComment(${i})">✕</button></div>`).join('');
  return `<span class="df-label" style="margin-top:20px">Comentários ${comments.length?'('+comments.length+')':''}</span><div class="comment-list" id="comment-list">${list||'<div style="font-size:12px;color:rgba(255,255,255,.2);padding:8px 0">Sem comentários.</div>'}</div><div class="comment-input-row"><textarea class="df-textarea comment-new" id="comment-new" placeholder="Adicionar comentário... (Ctrl+Enter)" style="min-height:48px;flex:1"></textarea><div style="display:flex;flex-direction:column;gap:6px"><select class="df-select" id="comment-author" style="padding:8px;font-size:11px"><option value="fer">Fer</option><option value="rat">Rat</option></select><button class="btn-comment" onclick="addComment()">→</button></div></div>`;
}
function addComment(){
  if(!drawerCtx)return;const text=document.getElementById('comment-new')?.value?.trim();if(!text)return;
  const author=document.getElementById('comment-author')?.value||'fer';const comment={author,text,time:nowStr()};
  const item=getItem(drawerCtx.type,drawerCtx.id);if(!item)return;if(!item.comments)item.comments=[];item.comments.push(comment);
  const cl=document.getElementById('comment-list');if(cl)cl.innerHTML=item.comments.map((c,i)=>`<div class="comment-item"><div class="comment-meta"><div class="comment-av ${c.author}">${c.author==='fer'?'Fe':'Ra'}</div><span class="comment-author">${c.author==='fer'?'Fernanda':'Ratazana'}</span><span class="comment-time">${c.time}</span></div><div class="comment-text">${esc(c.text)}</div><button class="comment-del" onclick="delComment(${i})">✕</button></div>`).join('');
  document.getElementById('comment-new').value='';toast('💬 Comentário adicionado');
}
function delComment(idx){if(!drawerCtx)return;const item=getItem(drawerCtx.type,drawerCtx.id);if(!item||!item.comments)return;item.comments.splice(idx,1);const cl=document.getElementById('comment-list');if(cl)cl.innerHTML=item.comments.length?item.comments.map((c,i)=>`<div class="comment-item"><div class="comment-meta"><div class="comment-av ${c.author}">${c.author==='fer'?'Fe':'Ra'}</div><span class="comment-author">${c.author==='fer'?'Fernanda':'Ratazana'}</span><span class="comment-time">${c.time}</span></div><div class="comment-text">${esc(c.text)}</div><button class="comment-del" onclick="delComment(${i})">✕</button></div>`).join(''):'<div style="font-size:12px;color:rgba(255,255,255,.2);padding:8px 0">Sem comentários.</div>';}
function drawerSave(){
  if(!drawerCtx)return;const{type,id}=drawerCtx;const item=getItem(type,id);if(!item)return;
  const g=k=>document.getElementById(k)?.value;
  if(type==='task'){item.t=g('de-t')||item.t;if(_drResp)item.resp=_drResp;item.col=g('de-col')||item.col;item.pri=g('de-pri')||item.pri;item.cat=g('de-cat')??item.cat;item.obs=g('de-obs')||'';document.getElementById('dt-title').textContent=item.t;renderKanban();renderDash();}
  else if(type==='etapa'){item.nome=g('de-t')||item.nome;item.inicio=g('de-ini')||item.inicio;item.fim=g('de-fim')||item.fim;item.orc=parseFloat(g('de-orc'))||item.orc;item.link=g('de-link')||'';item.obs=g('de-obs')||'';document.getElementById('dt-title').textContent=item.nome;renderObras();}
  else if(type==='forn'){item.nome=g('de-t')||item.nome;item.tipo=g('de-tipo')||item.tipo;item.tel=g('de-tel')||item.tel;item.val=parseFloat(g('de-val'))||item.val;item.data=g('de-data')||item.data;item.obs=g('de-obs')||'';document.getElementById('dt-title').textContent=item.nome;renderFornecedores();}
  else if(type==='lembrete'){item.desc=g('de-t')||item.desc;item.cat=g('de-cat')||item.cat;item.srv=g('de-srv')||'';item.obs=g('de-obs')||'';document.getElementById('dt-title').textContent=item.desc;renderLembretes();}
  else if(type==='fluxo'){item.d=g('de-t')||item.d;item.t=g('de-tipo')||item.t;item.v=parseFloat(g('de-val'))||item.v;item.obs=g('de-obs')||'';document.getElementById('dt-title').textContent=item.d;renderFluxo();}
  else if(type==='check'){item.l=g('de-t')||item.l;if(_drResp)item.r=_drResp;item.done=g('de-done')==='1';item.obs=g('de-obs')||'';document.getElementById('dt-title').textContent=item.l;renderCheck();}
  else if(type==='pag'){
    item.tipo_apto=g('de-tipo-apto')||item.tipo_apto;
    if(!item.proprietario)item.proprietario={};
    item.proprietario.nome=g('de-prop-nome')||item.proprietario.nome||'';
    item.proprietario.tel=g('de-prop-tel')||'';
    item.proprietario.email=g('de-prop-email')||'';
    if(item.tipo_apto==='aluguel'){
      if(!item.inquilino)item.inquilino={};
      item.inquilino.nome=g('de-inq-nome')||item.inquilino.nome||'';
      item.inquilino.tel=g('de-inq-tel')||'';
      item.inquilino.email=g('de-inq-email')||'';
    } else { item.inquilino=null; }
    item.cond=parseFloat(g('de-cond'))||item.cond;
    item.obra=parseFloat(g('de-obra'))||item.obra;
    item.seg=parseFloat(g('de-seg'))||item.seg;
    item.obs=g('de-obs')||'';
    document.getElementById('dt-title').textContent=(item.proprietario?.nome||'APT '+item.apt);
    renderPagamentos();renderCondominos();renderDash();
  }
  else if(type==='ocorr'){item.t=g('de-t')||item.t;item.apt=g('de-apt')||item.apt;item.st=g('de-st')||item.st;if(_drResp)item.resp=_drResp;item.desc=g('de-obs')||item.desc;document.getElementById('dt-title').textContent=item.t;renderOcorrencias();}
  else if(type==='assem'){item.t=g('de-t')||item.t;item.data=g('de-data')||item.data;item.local=g('de-local')||item.local;item.pautas=g('de-pautas')||'';item.ata=g('de-ata')||'';document.getElementById('dt-title').textContent=item.t;renderAssembleias();}
  renderDash();toast('✓ Salvo!');
}
function drawerDelete(){
  if(!drawerCtx)return;const{type,id}=drawerCtx;
  const names={task:'esta tarefa',etapa:'esta etapa',forn:'este fornecedor',lembrete:'este lembrete',fluxo:'este lançamento',check:'este item',pag:'este apartamento',ocorr:'esta ocorrência',assem:'esta assembleia'};
  if(!confirm('Excluir '+names[type]+'?'))return;
  if(type==='task')S.tasks=S.tasks.filter(x=>x.id!==id);
  else if(type==='etapa')S.etapas=S.etapas.filter(x=>x.id!==id);
  else if(type==='forn')S.fornecedores=S.fornecedores.filter(x=>x.id!==id);
  else if(type==='lembrete')S.lembretes=S.lembretes.filter(x=>x.id!==id);
  else if(type==='fluxo')S.fluxo=S.fluxo.filter(x=>x.id!==id);
  else if(type==='check')S.check.forEach(s=>{s.items=s.items.filter(i=>i.id!==id);});
  else if(type==='pag')S.pagamentos=S.pagamentos.filter(x=>x.id!==id);
  else if(type==='ocorr')S.ocorrencias=S.ocorrencias.filter(x=>x.id!==id);
  else if(type==='assem')S.assembleias=S.assembleias.filter(x=>x.id!==id);
  closeDrawer();renderDash();
  const refresh={task:renderKanban,etapa:renderObras,forn:renderFornecedores,lembrete:renderLembretes,fluxo:renderFluxo,check:renderCheck,pag:renderPagamentos,ocorr:renderOcorrencias,assem:renderAssembleias};
  if(refresh[type])refresh[type]();
  toast('🗑 Excluído');
}

// AUDIO
let waveInt=null;
function startRec(ev){if(ev&&ev.preventDefault)ev.preventDefault();if(S.rec)return;S.rec=true;document.getElementById('mic-btn').classList.add('rec');openModal('modal-audio');startWave();
  if('webkitSpeechRecognition' in window||'SpeechRecognition' in window){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;S.sr=new SR();S.sr.lang='pt-BR';S.sr.interimResults=true;S.sr.continuous=false;document.getElementById('aud-trans').textContent='🎙 Ouvindo...';S.sr.onresult=ev=>{let t='';for(let i=ev.resultIndex;i<ev.results.length;i++)t+=ev.results[i][0].transcript;document.getElementById('aud-trans').textContent=t;S.audTxt=t;};S.sr.onend=()=>processAI(S.audTxt);S.sr.onerror=()=>demoAudio();S.sr.start();}else demoAudio();}
function stopRec(ev){if(ev&&ev.preventDefault)ev.preventDefault();if(!S.rec)return;S.rec=false;document.getElementById('mic-btn').classList.remove('rec');if(S.sr){try{S.sr.stop();}catch(e){}}}
const DEMOS=['Ligar para fornecedor do elevador','Verificar conta de água foi paga','Avisar moradores sobre vistoria','Cobrar apartamento 105 em atraso','Pedir orçamento pintura corredor'];
let _demoIdx=0;
function demoAudio(){let i=0;const txt=DEMOS[_demoIdx++%DEMOS.length];document.getElementById('aud-trans').textContent='🎙 Ouvindo...';const rev=setInterval(()=>{document.getElementById('aud-trans').textContent=txt.substring(0,i+=3);if(i>=txt.length){clearInterval(rev);S.audTxt=txt;processAI(txt);}},40);}
function startWave(){const w=document.getElementById('aud-wave');w.innerHTML='';const bars=[];for(let i=0;i<16;i++){const b=document.createElement('div');b.className='wbar';b.style.height='4px';w.appendChild(b);bars.push(b);}waveInt=setInterval(()=>{bars.forEach(b=>{const h=S.rec?Math.random()*36+4:4;b.style.height=h+'px';b.style.background=`rgba(212,120,154,${Math.random()*.4+.4})`;});},80);}
function stopWave(){if(waveInt){clearInterval(waveInt);waveInt=null;}const w=document.getElementById('aud-wave');if(w)w.innerHTML='';}
async function processAI(raw){stopWave();if(!raw?.trim()){document.getElementById('aud-trans').textContent='Nada detectado.';return;}document.getElementById('spin-wrap').classList.add('show');document.getElementById('aud-trans').style.opacity='.3';
  try{const r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:120,messages:[{role:'user',content:`Síndicas de condomínio. Crie um título curto (máx 10 palavras) para uma tarefa com base no dito. Responda APENAS o título.\n\nDito: "${raw}"`}]})});const data=await r.json();const title=data.content?.[0]?.text?.trim()||raw;document.getElementById('aud-trans').textContent=title;S.audTxt=title;}catch(e){document.getElementById('aud-trans').textContent=raw;}
  document.getElementById('spin-wrap').classList.remove('show');document.getElementById('aud-trans').style.opacity='1';}
function saveAudTask(){const t=(document.getElementById('aud-trans').textContent||S.audTxt||'').trim();if(!t||t.startsWith('🎙'))return;S.tasks.push({id:S.nid++,t,col:'todo',resp:S.audResp,pri:'media',cat:'',obs:'',comments:[]});closeModal('modal-audio');renderKanban();renderDash();toast('✓ Tarefa criada por voz!');}


// ═══ PERSISTÊNCIA LOCAL ═══
const STORAGE_KEY = 'apeuso_gestao_v3';

// Campos do state que devem ser salvos (exclui funções e transientes)
const SAVE_KEYS = ['tasks','fluxo','etapas','fornecedores','lembretes','pagamentos','condominos','ocorrencias','assembleias','eventos','check','autoLog','rules','nid'];

function saveState() {
  try {
    const data = {};
    SAVE_KEYS.forEach(k => { data[k] = S[k]; });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    const ind = document.getElementById('save-ind');
    if(ind){ ind.style.display='flex'; clearTimeout(ind._t); ind._t=setTimeout(()=>ind.style.display='none',2000); }
  } catch(e) {
    console.warn('Erro ao salvar:', e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    SAVE_KEYS.forEach(k => {
      if (data[k] !== undefined) S[k] = data[k];
    });
    return true;
  } catch(e) {
    console.warn('Erro ao carregar:', e);
    return false;
  }
}

function resetState() {
  if (!confirm('Isso vai apagar TODOS os dados e voltar ao estado inicial. Tem certeza?')) return;
  localStorage.removeItem(STORAGE_KEY);
  toast('🗑 Dados apagados — recarregando...', 'alert');
  setTimeout(() => location.reload(), 1500);
}

// Intercepta todas as funções que modificam o state para auto-salvar
const _origSave = {
  saveTask, saveFluxo, saveEtapa, saveSubitem, saveForn, saveLem,
  saveApt, saveCond, saveOcorr, saveAssem, saveEvento, saveAudTask,
  cyclePagSt, toggleChk, toggleLem, toggleEtapaItem, updatePag,
  drawerSave, drawerDelete, cycleOcorrSt
};

// Wrap automático: toda função que modifica dados chama saveState() depois
Object.keys(_origSave).forEach(fname => {
  const orig = _origSave[fname];
  window[fname] = function(...args) {
    const result = orig.apply(this, args);
    saveState();
    return result;
  };
});

// Também salva ao fechar/sair da página
window.addEventListener('beforeunload', saveState);

// INIT
// Load persisted data first
const _hadData = loadState();
renderDash();
renderCal();
runAutomations('inicialização');
document.querySelectorAll('.si,.av-row,.cond-card,.kcard').forEach(el=>{el.addEventListener('mouseenter',()=>cur.classList.add('big'));el.addEventListener('mouseleave',()=>cur.classList.remove('big'));});