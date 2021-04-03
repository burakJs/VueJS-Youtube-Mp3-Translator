window.addEventListener('load',()=>{
	var app = new Vue({
	  el: '#app',
	  data: {
	    url:'',
	    id:'',
	    link:'',
	  },
	  methods:{
	 	onayla:function(){
	 			if (this.url!="") {
		 			this.id=this.url.substr(this.id.length - 11);
		 			this.link=`https://www.yt-download.org/api/button/mp3/${this.id}`;
	 			}
	 			else{
	 				alert("Empty Error");
	 			}
	 		}
		},
	})
})	

// this.link=`https://www.download-mp3-youtube.com/api/? api_key=NTA4ODk2NDc4&format=mp3&video_id=${this.id}&button_color=0085ef&text_color=444444`;


//https://www.yt-download.org/api/button/mp3/YouTube-Video-ID
/*	
	var url ="https://www.youtube.com/watch?v=sSab1WFGuXA"
	var id = url.substr(id.length - 11);
	document.write(id);

	var buton = document.getElementById('buton');

	function onayla(){
	  buton.src=
	   `https://www.download-mp3-youtube.com/api/? api_key=NTA4ODk2NDc4&format=mp3&video_id=${id}`;
	}
*/