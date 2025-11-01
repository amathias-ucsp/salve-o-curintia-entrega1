
function onlyDigits(v){ return v.replace(/\D+/g,''); }

function maskCPF(v){
  v = onlyDigits(v).slice(0,11);
  if (v.length > 9) return v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/,'$1.$2.$3-$4');
  if (v.length > 6) return v.replace(/(\d{3})(\d{3})(\d{0,3})/,'$1.$2.$3');
  if (v.length > 3) return v.replace(/(\d{3})(\d{0,3})/,'$1.$2');
  return v;
}

function maskPhone(v){
  v = onlyDigits(v).slice(0,11);
  if (v.length > 10) return v.replace(/(\d{2})(\d{5})(\d{0,4})/,'($1) $2-$3');
  if (v.length > 6) return v.replace(/(\d{2})(\d{0,5})(\d{0,4})/,'($1) $2-$3');
  if (v.length > 2) return v.replace(/(\d{2})(\d{0,5})/,'($1) $2');
  return v;
}

function maskCEP(v){
  v = onlyDigits(v).slice(0,8);
  if (v.length > 5) return v.replace(/(\d{5})(\d{0,3})/,'$1-$2');
  return v;
}

function attachMasks(){
  const cpf = document.querySelector('input[name="cpf"]');
  const tel = document.querySelector('input[name="telefone"]');
  const cep = document.querySelector('input[name="cep"]');
  [ [cpf,maskCPF], [tel,maskPhone], [cep,maskCEP] ].forEach(([el,fn])=>{
    if (!el) return;
    el.addEventListener('input', e => { e.target.value = fn(e.target.value); });
    el.addEventListener('blur', e => { e.target.value = fn(e.target.value); });
  });
}

document.addEventListener('DOMContentLoaded', attachMasks);
