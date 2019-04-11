(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=(a(193),a(162)),s=a(7),o=a.n(s),c=a(4),l=a.n(c),d=a(203),p=a.n(d),u={video:l.a.shape({id:l.a.string,startSeconds:l.a.number,GT:l.a.string,Ours:l.a.string}).isRequired},m=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={visible:!1,playing:!1},t.ref=function(e){t.player=e},t.play=function(){t.setState({playing:!0})},t.pause=function(){t.setState({playing:!1})},t.replay=function(){t.player.seekTo(0),t.play()},t.toggleVisibility=function(){t.setState({visible:!t.state.visible})},t}return o()(t,e),t.prototype.render=function(){var e=this.props.video,t=this.state,n=t.visible,r=t.playing;return i.a.createElement("div",{className:"col-sm-4 example"},i.a.createElement("div",{className:"btn-group d-flex",role:"group"},i.a.createElement("button",{type:"button",className:"btn btn-sm btn-warning material-icons w-100",onClick:this.replay},"replay"),i.a.createElement("button",{type:"button",className:"btn btn-sm btn-success material-icons w-100",onClick:this.play},"play_arrow"),i.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger  material-icons w-100",onClick:this.pause},"pause")),i.a.createElement("div",{className:"text-dark mb-1"},i.a.createElement("strong",null," (Ours) ",e.Ours)," "),i.a.createElement("div",{className:"text-dark mb-1"}," (GT) ",e.GT," "),i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-danger audio-control",onClick:this.toggleVisibility},"Video"),i.a.createElement(p.a,{ref:this.ref,style:{display:n?"block":"none"},width:"100%",height:"200px",playing:r,url:a(173)("./"+e.id+"_"+e.startSeconds+".mp4"),onEnded:this.onEnded,onProgress:this.onProgress,onPlay:this.onPlay,onPause:this.onPause}))},t}(i.a.Component);m.propTypes=u;var g=m,f=(a(268),[{id:"6BJ455B1aAs",startSeconds:0,Ours:"a large explosion followed by a loud pop",GT:"a whooshing noise followed by an explosion"},{id:"31WGUPOYS5g",startSeconds:22,Ours:"a small motor is running , whirring occurs , and a high - pitched whine is present",GT:"a drone whirring followed by a crashing sound"},{id:"EzWEO2WD_MM",startSeconds:70,Ours:"a small motor is running , whirring occurs , and a high - pitched whine is present",GT:"a drone whirring followed by a crashing sound"},{id:"-YS5uKWoB6g",startSeconds:30,Ours:"a man and woman talking , then a baby crying",GT:"a kid crying as a man and a woman talk followed by a car door opening then closing"},{id:"fGGYeXR_LS8",startSeconds:30,Ours:"a man speaking with a series of whistling in the background",GT:"a man talking as another person whistles while water trickles on a hard surface in the background"},{id:"hJtOGmN_KVw",startSeconds:140,Ours:"a man speaking as plastic crinkles",GT:"plastic crumpling and crinkling are ongoing , and an adult male speaks"},{id:"bX2vDaHL26U",startSeconds:60,Ours:"a vehicle engine is running and revving , and tires squeal",GT:"white noise , then a motor revving up and a tire skidding"},{id:"YIqpIjjee00",startSeconds:30,Ours:"hissing and gurgling of water flowing down a toilet",GT:"plastic crumpling and crinkling are ongoing , and an adult male speaks"},{id:"bygBWUkpaC8",startSeconds:270,Ours:"a man speaks with birds chirping in the distance",GT:"a man speaking with light wind followed by brief silence then birds chirping"},{id:"yhDw7PZje3g",startSeconds:30,Ours:"a man speaking followed by bees buzzing",GT:"a man speaks with wind blowing and buzzing of insects"},{id:"SGaIvgwwWSE",startSeconds:30,Ours:"a thunderstorm is in the distance",GT:"rain falling and thunder roaring in the distance"},{id:"bpv_LneHmfU",startSeconds:10,Ours:"a large aircraft engine is running",GT:"humming of a nearby jet engine"},{id:"GuizRlAQ8qQ",startSeconds:50,Ours:"a vehicle engine revving",GT:"high pitched continuous drilling that slows down",wrong:!0},{id:"FDwK7T1JO_0",startSeconds:160,Ours:"a man speaking and a sewing machine working",GT:"two men speaking followed by plastic clacking then a power tool drilling",wrong:!0}]);t.default=function(){return i.a.createElement("div",{className:"supp"},i.a.createElement(r.a,{title:"AudioCaps Supplementary"}),i.a.createElement("header",{className:"container mt-2 mb-5"},"NAACL-HLT 2019"),i.a.createElement("div",{className:"container my-5"},i.a.createElement("div",{className:"row justify-content-center"},i.a.createElement("h1",null,"[Supplementary Materials] "),i.a.createElement("h1",null,"AudioCaps: Generating Captions for Audios in The Wild"))),i.a.createElement("div",{className:"container mb-5"},i.a.createElement("h2",null,"Abstract"),i.a.createElement("p",{align:"justify"},"We explore the problem of ",i.a.createElement("em",null,"audio captioning"),": generating natural language description for any kind of audio in the wild, which has been surprisingly unexplored in previous research. We contribute a large-scale dataset of about 46K audio clips to human-written text pairs collected via crowdsourcing on the  ",i.a.createElement("a",{href:"https://research.google.com/audioset"},"AudioSet ")," dataset. Our thorough empirical studies not only show that our collected captions are indeed faithful for audio inputs and but also discover what forms of audio representation and captioning models are effective for the audio captioning. From extensive experiments, we also propose two novel components that help improve audio captioning performance: the top-down multi-scale encoder and aligned semantic attention.")),i.a.createElement("div",{className:"container mb-5"},i.a.createElement("h2",null,"Examples"),i.a.createElement("div",{className:"row"},f.filter(function(e){return!0!==e.wrong}).map(function(e){return i.a.createElement(g,{key:e.id,video:e})})))," ",i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,"Wrong Examples"),i.a.createElement("div",{className:"row"},f.filter(function(e){return e.wrong}).map(function(e){return i.a.createElement(g,{key:e.id,video:e})}))," ")," ")}},162:function(e,t,a){"use strict";var n=a(163),i=a(0),r=a.n(i),s=a(4),o=a.n(s),c=a(191),l=a.n(c);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,c=n.data.site,d=t||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},173:function(e,t,a){var n={"./-YS5uKWoB6g_30.mp4":174,"./31WGUPOYS5g_22.mp4":175,"./6BJ455B1aAs_0.mp4":176,"./EzWEO2WD_MM_70.mp4":177,"./FDwK7T1JO_0_160.mp4":178,"./GuizRlAQ8qQ_50.mp4":179,"./SGaIvgwwWSE_30.mp4":180,"./YIqpIjjee00_30.mp4":181,"./bX2vDaHL26U_60.mp4":182,"./bpv_LneHmfU_10.mp4":183,"./bygBWUkpaC8_270.mp4":184,"./fGGYeXR_LS8_30.mp4":185,"./hJtOGmN_KVw_140.mp4":186,"./yhDw7PZje3g_30.mp4":187};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=173},174:function(e,t,a){e.exports=a.p+"static/-YS5uKWoB6g_30-ca995e7a7f742b6577f0fee225c41ee5.mp4"},175:function(e,t,a){e.exports=a.p+"static/31WGUPOYS5g_22-d62c85aac180f46c7020b826f2612d0b.mp4"},176:function(e,t,a){e.exports=a.p+"static/6BJ455B1aAs_0-0f65b4186055692fd188b63a4624ff16.mp4"},177:function(e,t,a){e.exports=a.p+"static/EzWEO2WD_MM_70-d207fcffbfd2659aebfde78d9557ef00.mp4"},178:function(e,t,a){e.exports=a.p+"static/FDwK7T1JO_0_160-c300d03706a93806aac0bc521c90d66c.mp4"},179:function(e,t,a){e.exports=a.p+"static/GuizRlAQ8qQ_50-e0548ea7056c2a600255ed2d067caafb.mp4"},180:function(e,t,a){e.exports=a.p+"static/SGaIvgwwWSE_30-18f06eafe9053365fd17584ac35953c3.mp4"},181:function(e,t,a){e.exports=a.p+"static/YIqpIjjee00_30-b36dbd0f568ac7fe74c28151a279d212.mp4"},182:function(e,t,a){e.exports=a.p+"static/bX2vDaHL26U_60-294d3626b8d0f5c18656dd3b3745f0c1.mp4"},183:function(e,t,a){e.exports=a.p+"static/bpv_LneHmfU_10-b156ef9a848b1ef725d43ff8af6a37d2.mp4"},184:function(e,t,a){e.exports=a.p+"static/bygBWUkpaC8_270-dfa3ae4dc4bf270167be902435eb68a0.mp4"},185:function(e,t,a){e.exports=a.p+"static/fGGYeXR_LS8_30-0d297bd2a2c9d078e3745f67df61db6a.mp4"},186:function(e,t,a){e.exports=a.p+"static/hJtOGmN_KVw_140-36c4c99f72f322a7c78c4931b5d028d4.mp4"},187:function(e,t,a){e.exports=a.p+"static/yhDw7PZje3g_30-7c67885e32b57e481d4ce0a527baf6e4.mp4"}}]);
//# sourceMappingURL=component---src-pages-supp-js-196c52236eccc7b4cffa.js.map