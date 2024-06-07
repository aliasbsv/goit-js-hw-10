import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as c,i as m}from"./assets/vendor-77e16229.js";const t={inputDate:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),daysField:document.querySelector("[data-days]"),hoursField:document.querySelector("[data-hours]"),minutesField:document.querySelector("[data-minutes]"),secondsField:document.querySelector("[data-seconds]")};let r,a;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n-Date.now()>0?(t.startBtn.disabled=!1,a=n):(t.startBtn.disabled=!0,m.error({position:"topRight",theme:"dark",messageColor:"white",color:"#ef4040",message:"Пожалуйста, выберите дату в будущем"}))}};c(t.inputDate,f);t.startBtn.addEventListener("click",()=>{r=setInterval(()=>{const e=Date.now(),n=a-e;if(n<=0){clearInterval(r),t.startBtn.disabled=!0,t.stopBtn.disabled=!0,t.inputDate.disabled=!1;return}const o=p(n);t.daysField.textContent=`${s(o.days)}`,t.hoursField.textContent=`${s(o.hours)}`,t.minutesField.textContent=`${s(o.minutes)}`,t.secondsField.textContent=`${s(o.seconds)}`},1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,t.inputDate.disabled=!0});t.stopBtn.addEventListener("click",()=>{clearInterval(r),t.daysField.textContent="00",t.hoursField.textContent="00",t.minutesField.textContent="00",t.secondsField.textContent="00",a=null,t.startBtn.disabled=!0,t.stopBtn.disabled=!0,t.inputDate.disabled=!1});function p(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),u=Math.floor(e%36e5/6e4),l=Math.floor(e%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}function s(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
