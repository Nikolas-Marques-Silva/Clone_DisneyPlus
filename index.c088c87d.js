AOS.init();const e=new Date("2024-01-09"),o=setInterval(()=>{let t=e-new Date;document.querySelector("#contador").innerHTML=`${Math.floor(t/1e3/60/60/24)}d ${Math.floor(t/1e3/60/60)%24}h ${Math.floor(t/1e3/60)%60}m ${Math.floor(t/1e3)%60}s`,t<0&&(clearInterval(o),document.querySelector("#contador").innerHTML="Meu aniversário de 16 anos chegou!!!")});
//# sourceMappingURL=index.c088c87d.js.map
