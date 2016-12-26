function random(m,n){
			return parseInt(m+Math.random()*(n-m));
		}
		window.onload=function(){
			var oPs=document.getElementById('ps');
			var oPsn=document.getElementById('psn');
			var oHtml=document.getElementById('html');
			var oHtmln=document.getElementById('htmln');
			var oCss=document.getElementById('css');
			var oCssn=document.getElementById('cssn');
			var oJs=document.getElementById('js');
			var oJsn=document.getElementById('jsn');
			var oProject=document.getElementById('project');
			var aSpan=oProject.getElementsByTagName('span');
			oPs.onmouseover=function(){
				oPsn.style.display='block';
				oPs.style.width='980px';
				oPs.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
			};
			oPs.onmouseout=function(){
				oPsn.style.display='none';
				oPs.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';

			};
			oHtml.onmouseover=function(){
				oHtmln.style.display='block';
				oHtml.style.width='930px';
				oHtml.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';

			};
			oHtml.onmouseout=function(){
				oHtmln.style.display='none';
				oHtml.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';

			};
			oCss.onmouseover=function(){
				oCssn.style.display='block';
				oCss.style.width='882px';
				oCss.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';

			};
			oCss.onmouseout=function(){
				oCssn.style.display='none';
				oCss.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';

			};
			oJs.onmouseover=function(){
				oJsn.style.display='block';
				oJs.style.width='784px';
				oJs.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';

			};
			oJs.onmouseout=function(){
				oJsn.style.display='none';
				oJs.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';

			};
			for(var i=0;i<aSpan.length;i++){
				aSpan[i].onmouseover=function(){
					this.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
				};
				aSpan[i].onmouseout=function(){
					this.style.background='rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
				};
			}
		};