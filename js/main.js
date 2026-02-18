function go(p){
  window.location.href=p;
}

function moveNo(btn){
  btn.style.position="absolute";
  btn.style.left=Math.random()*70+"%";
  btn.style.top=Math.random()*70+"%";
}

function heartBlast(btn){
  for(let i=0;i<14;i++){
    const h=document.createElement("span");
    h.style.position="absolute";
    h.style.left="50%";
    h.style.top="50%";
    h.style.fontSize="18px";
    h.style.pointerEvents="none";

    const x=(Math.random()-0.5)*140;
    const y=(Math.random()-0.5)*140;

    h.style.transform="translate(-50%,-50%)";
    h.style.transition="0.8s";

    btn.appendChild(h);

    setTimeout(()=>{
      h.style.transform=`translate(${x}px,${y}px)`;
      h.style.opacity="0";
    },10);

    setTimeout(()=>h.remove(),800);
  }
}

function zoom(img,cap){
  const box=document.createElement("div");
  box.style.position="fixed";
  box.style.inset="0";
  box.style.background="rgba(0,0,0,0.6)";
  box.style.display="flex";
  box.style.flexDirection="column";
  box.style.justifyContent="center";
  box.style.alignItems="center";
  box.style.zIndex="999";
  const i=document.createElement("img");
  i.src=img;
  i.style.width="260px";
  i.style.borderRadius="15px";

  const c=document.createElement("p");
  c.innerHTML=cap;
  c.innerText=cap;
  c.style.color="deeppink";
  c.style.marginTop="12px";
  c.style.fontSize="26px";
  c.style.fontWeight="bold";
  c.style.textAlign="center";
  c.style.textShadow="0 2px 6px rgba(0,0,0,0.7)";

  box.onclick=()=>box.remove();
  box.appendChild(i);
  box.appendChild(c);
  document.body.appendChild(box);
}
