	
	
	function fun() {  
	
			var f = document.getElementById("fn").value;
			var s = document.getElementById("sn").value;
			fname=f.replaceAll(/\s/g,'');
			sname=s.replaceAll(/\s/g,'');
			var fn = fname, sn = sname;
			var fl = fname.length;
			var sl = sname.length;
			let fasak = "";
			let a = "";
			let fl1 = null;
			let sl1 = null;
			let x = 0;
			let count = 0;
			if (fl >= sl) {
				for(let i=0; i<fl; i++) {
					a = sname[x]; fl1 = fname.length; fname = fname.replace(a,"");
					if (fl1 > fname.length) {
						sname = sname.replace(a,"");} else {x++;}
					if (fname.length === fn.length){
						count = fn.length+sn.length;
					} else {
						count = fname.length+sname.length;
					}
				}
			} else {
				for(let i=0; i<sl; i++) {
						a = fname[x];
						sl1 = sname.length;
						sname = sname.replace(a,"");
						if (sl1 > sname.length) {
							fname = fname.replace(a,"");
						} else {
						x++;
						}
						if (sname.length === sn){
							count = sn.length+fn.length;
						} else {
							count = sname.length+fname.length;
						}
					}
			}
			
			if(count<=6) {
					result = count;
				}
				else if (count>6 && count<=12) {
					result = count - 6;
				}
				else if(count>12 && count<=18) {
						result = count - 12;
				}
				else if(count>18 && count<=24){
							result= count-18;
				}
				
				function image(link){
					const img = document.getElementById("sm");
					img.src =link;
					img.style.width = "50%";
					img.style.height = "25%";
					img.style.margin = "5% 25% 20px 20%";
					img.style.borderRadius ="30px";
				
				}
			
			switch(result)
				{
					case 1:image("Pictures/Friends.jpg");fasak="You both are 'Friends'";break;
					case 2:image("Pictures/Lovers.jpg");fasak="You both are  'Lovers'"; break;
					case 3:image("Pictures/Affection.jpg");fasak="You both have 'Affection'"; break;
					case 4:image("Pictures/Marriage.png");fasak="You both will get 'Marriage'"; break;
					case 5:image("Pictures/Enemies.jpg");fasak="You both are 'Enemies'"; break;              
					case 6:image("Pictures/Siblings.jpg");fasak="You both are 'Sibling'"; break;
				}
			
			document.getElementById("output").innerHTML = fasak;
		
		 return true;
		 } 


	function refun() {
		document.getElementById("form").reset();
	 return true;
	 }