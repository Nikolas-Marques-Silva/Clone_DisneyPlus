const e=new Date("2024-01-09"),o=setInterval(()=>{let r=e-new Date;document.querySelector("#contador").innerHTML=`${Math.floor(r/1e3/60/60/24)}d ${Math.floor(r/1e3/60/60)%24}h ${Math.floor(r/1e3/60)%60}m ${Math.floor(r/1e3)%60}s`,r<0&&(clearInterval(o),document.querySelector("#contador").innerHTML="Meu aniversário de 16 anos chegou!!!")});
//# sourceMappingURL=index.9b90116d.js.map
