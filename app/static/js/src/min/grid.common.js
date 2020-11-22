(function(a){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jqdnr","./jqmodal"],a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var n=a.jgrid,w=a.fn.jqGrid,p=w.getGuiStyles,x=w.getGridRes;n.jqModal=n.jqModal||{};a.extend(!0,n.jqModal,{toTop:!0});a.extend(n,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true");a.o&&a.o.remove()},hideModal:function(d,c){c=a.extend({jqm:!0,gb:"",removemodal:!1},c||{});var b=
c.gb&&"string"===typeof c.gb&&"#gbox_"===c.gb.substr(0,6)?a("#"+c.gb.substr(6))[0]:!1,h=a(d);if(c.onClose&&(b=b?c.onClose.call(b,d):c.onClose(d),"boolean"===typeof b&&!b))return;if(a.fn.jqm&&!0===c.jqm)h.attr("aria-hidden","true").jqmHide();else{if(""!==c.gb)try{a(">.jqgrid-overlay",c.gb).first().hide()}catch(l){}h.hide().attr("aria-hidden","true")}c.removemodal&&h.remove()},createModal:function(d,c,b,h,l,k,e){var g=n.jqID,f=this.p,f=null!=f?f.jqModal||{}:{};b=a.extend(!0,{resizingRightBottomIcon:w.getIconRes.call(this,
"form.resizableLtr")},n.jqModal||{},f,b);var f=document.createElement("div"),m="#"+g(d.themodal),r="rtl"===a(b.gbox).attr("dir")?!0:!1,u=d.resizeAlso?"#"+g(d.resizeAlso):!1;e=a.extend({},e||{});f.className=p.call(this,"dialog.window","ui-jqdialog");f.id=d.themodal;f.dir=r?"rtl":"ltr";var q=document.createElement("div");q.className=p.call(this,"dialog.document");a(q).attr("role","document");var y=document.createElement("div");y.className=p.call(this,"dialog.subdocument");q.appendChild(y);f.appendChild(q);
q=document.createElement("div");q.className=p.call(this,"dialog.header","ui-jqdialog-titlebar "+(r?"ui-jqdialog-titlebar-rtl":"ui-jqdialog-titlebar-ltr"));q.id=d.modalhead;a(q).append("<span class='ui-jqdialog-title'>"+b.caption+"</span>");var v=p.call(this,"states.hover"),t=a("<a aria-label='Close' class='"+p.call(this,"dialog.closeButton","ui-jqdialog-titlebar-close")+"'></a>").hover(function(){t.addClass(v)},function(){t.removeClass(v)}).append("<span class='"+w.getIconRes.call(this,"form.close")+
"'></span>");a(q).append(t);r=document.createElement("div");a(r).addClass(p.call(this,"dialog.content","ui-jqdialog-content")).attr("id",d.modalcontent);a(r).append(c);y.appendChild(r);a(y).prepend(q);!0===k?a("body").append(f):"string"===typeof k?a(k).append(f):a(f).insertBefore(h);a(f).css(e);void 0===b.jqModal&&(b.jqModal=!0);c={};if(a.fn.jqm&&!0===b.jqModal)0===b.left&&0===b.top&&b.overlay&&(b=a(l).offset(),b.left+=4,b.top+=4),c.top=b.top+"px",c.left=b.left;else if(0!==b.left||0!==b.top)c.left=
b.left,c.top=b.top+"px";a("a.ui-jqdialog-titlebar-close",q).click(function(){var c=a(m).data("onClose")||b.onClose,d=a(m).data("gbox")||b.gbox;n.hideModal(m,{gb:d,jqm:b.jqModal,onClose:c,removemodal:b.removemodal||!1});return!1});0!==b.width&&b.width||(b.width=300);0!==b.height&&b.height||(b.height=200);b.zIndex||((h=a(h).parents("*[role=dialog]").first().css("z-index"))?(b.zIndex=parseInt(h,10)+2,b.toTop=!0):b.zIndex=950);c.left&&(c.left+="px");a(f).css(a.extend({width:isNaN(b.width)?"auto":b.width+
"px",height:isNaN(b.height)?"auto":b.height+"px",zIndex:b.zIndex},c)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":d.modalhead,"aria-hidden":"true"});void 0===b.drag&&(b.drag=!0);void 0===b.resize&&(b.resize=!0);if(b.drag)if(a.fn.jqDrag)a(q).css("cursor","move"),a(f).jqDrag(q);else try{a(f).draggable({handle:a("#"+g(q.id))})}catch(z){}if(b.resize)if(a.fn.jqResize)a(r).append("<div class='jqResize ui-resizable-handle ui-resizable-se "+b.resizingRightBottomIcon+"'></div>"),a(m).jqResize(".jqResize",
u);else try{a(f).resizable({handles:"se, sw",alsoResize:u})}catch(z){}!0===b.closeOnEscape&&a(f).keydown(function(c){27===c.which&&(c=a(m).data("onClose")||b.onClose,n.hideModal(m,{gb:b.gbox,jqm:b.jqModal,onClose:c,removemodal:b.removemodal||!1,formprop:!b.recreateForm||!1,form:b.form||""}))})},viewModal:function(d,c){c=a.extend(!0,{overlay:30,modal:!1,overlayClass:p.call(this,"overlay"),onShow:n.showModal,onHide:n.closeModal,gbox:"",jqm:!0,jqM:!0},n.jqModal||{},c||{});if(a.fn.jqm&&!0===c.jqm)c.jqM?
a(d).attr("aria-hidden","false").jqm(c).jqmShow():a(d).attr("aria-hidden","false").jqmShow();else{""!==c.gbox&&(a(">.jqgrid-overlay",c.gbox).first().show(),a(d).data("gbox",c.gbox));a(d).show().attr("aria-hidden","false");try{a(":input:visible",d)[0].focus()}catch(b){}}},info_dialog:function(d,c,b,h){var l=this,k=l.p,e=a.extend(!0,{width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1E3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]},
n.jqModal||{},null!=k?k.jqModal||{}:{},{caption:"<b>"+d+"</b>"},h||{}),g=e.jqModal;a.fn.jqm&&!g&&(g=!1);d="";var f=p.call(l,"states.hover");if(0<e.buttons.length)for(h=0;h<e.buttons.length;h++)void 0===e.buttons[h].id&&(e.buttons[h].id="info_button_"+h),d+=n.builderFmButon.call(l,e.buttons[h].id,e.buttons[h].text);c="<div id='info_id'>"+("<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+(isNaN(e.dataheight)?e.dataheight:e.dataheight+"px")+
";"+("text-align:"+e.align+";")+"'>"+c+"</div>");if(b||""!==d)c+="<hr class='"+p.call(l,"dialog.hr")+"' style='margin:1px'/><div style='text-align:"+e.buttonalign+";padding:.8em 0 .5em 0;background-image:none;border-width: 1px 0 0 0;'>"+(b?n.builderFmButon.call(l,"closedialog",b):"")+d+"</div>";c+="</div>";try{"false"===a("#info_dialog").attr("aria-hidden")&&n.hideModal("#info_dialog",{jqm:g}),a("#info_dialog").remove()}catch(m){}n.createModal.call(l,{themodal:"info_dialog",modalhead:"info_head",
modalcontent:"info_content",resizeAlso:"infocnt"},c,e,"","",!0);d&&a.each(e.buttons,function(c){a("#"+n.jqID(l.id),"#info_id").on("click",function(){e.buttons[c].onClick.call(a("#info_dialog"));return!1})});a("#closedialog","#info_id").click(function(){n.hideModal("#info_dialog",{jqm:g,onClose:a("#info_dialog").data("onClose")||e.onClose,gb:a("#info_dialog").data("gbox")||e.gbox});return!1});a(".fm-button","#info_dialog").hover(function(){a(this).addClass(f)},function(){a(this).removeClass(f)});a.isFunction(e.beforeOpen)&&
e.beforeOpen();n.viewModal.call(l,"#info_dialog",{onHide:function(a){a.w.hide().remove();a.o&&a.o.remove()},modal:e.modal,jqm:g});a.isFunction(e.afterOpen)&&e.afterOpen();try{a("#info_dialog").focus()}catch(m){}},bindEv:function(d,c){a.isFunction(c.dataInit)&&c.dataInit.call(this,d,c);c.dataEvents&&a.each(c.dataEvents,function(){if(void 0!==this.data)a(d).on(this.type,this.data,this.fn);else a(d).on(this.type,this.fn)})},createEl:function(d,c,b,h,l){function k(c,b,d){var e="dataInit dataEvents dataUrl buildSelect sopt searchhidden defaultValue attr custom_element custom_value selectFilled rowId column mode cm iCol".split(" ");
void 0!==d&&a.isArray(d)&&a.merge(e,d);a.each(b,function(b,d){-1===a.inArray(b,e)&&a(c).attr(b,d)});b.hasOwnProperty("id")||a(c).attr("id",n.randId())}var e="",g=this,f=g.p,m=n.info_dialog,r=x.call(a(g),"errors.errcap"),u=x.call(a(g),"edit"),q=u.msg,u=u.bClose;if(null==c)return"";switch(d){case "textarea":e=document.createElement("textarea");h?c.cols||a(e).css({width:"100%","box-sizing":"border-box"}):c.cols||(c.cols=19);c.rows||(c.rows=2);if("&nbsp;"===b||"&#160;"===b||1===b.length&&160===b.charCodeAt(0))b=
"";e.value=b;k(e,c);a(e).attr({role:"textbox"});break;case "checkbox":e=document.createElement("input");e.type="checkbox";c.value?(l=c.value.split(":"),b===l[0]&&(e.checked=!0,e.defaultChecked=!0),e.value=l[0],a(e).data("offval",l[1])):(l=String(b).toLowerCase(),0>l.search(/(false|f|0|no|n|off|undefined)/i)&&""!==l?(e.checked=!0,e.defaultChecked=!0,e.value=b):e.value="on",a(e).data("offval","off"));k(e,c,["value"]);a(e).attr({role:"checkbox","aria-checked":e.checked?"true":"false"});break;case "select":e=
document.createElement("select");m=[];d=null;!0===c.multiple?(h=!0,e.multiple="multiple",a(e).attr("aria-multiselectable","true"),m=b.split(","),m=a.map(m,function(b){return a.trim(b)})):(h=!1,m[0]=a.trim(b));void 0===c.size&&(c.size=h?3:1);try{d=c.rowId}catch(t){}f&&f.idPrefix&&(d=n.stripPref(f.idPrefix,d));if(void 0!==c.dataUrl){var p=c.postData||l.postData,f={elem:e,options:c,cm:c.cm,mode:c.mode,rowid:d,iCol:c.iCol,ovm:m};a.ajax(a.extend({url:a.isFunction(c.dataUrl)?c.dataUrl.call(g,d,b,String(c.name),
f):c.dataUrl,type:"GET",dataType:"html",data:a.isFunction(p)?p.call(g,d,b,String(c.name)):p,context:f,success:function(b,c,d){var e=this.ovm,h=this.elem,f=this.cm,l=this.iCol,m=a.extend({},this.options),q=this.rowid,r=this.mode;b=a.isFunction(m.buildSelect)?m.buildSelect.call(g,b,d,f,l):b;"string"===typeof b&&(b=a(a.trim(b)).html());b&&(a(h).append(b),k(h,m,p?["postData"]:void 0),setTimeout(function(){var b;a("option",h).each(function(c){0===c&&h.multiple&&(this.selected=!1);-1<a.inArray(a.trim(a(this).val()),
e)&&(b=this.selected=!0)});b||a("option",h).each(function(){-1<a.inArray(a.trim(a(this).text()),e)&&(this.selected=!0)});n.fullBoolFeedback.call(g,m.selectFilled,"jqGridSelectFilled",{elem:h,options:m,cm:f,rowid:q,mode:r,cmName:null!=f?f.name:m.name,iCol:l})},0))}},l||{}))}else c.value&&(n.fillSelectOptions(e,c.value,void 0===c.separator?":":c.separator,void 0===c.delimiter?";":c.delimiter,h,b),k(e,c,["value"]),n.fullBoolFeedback.call(g,c.selectFilled,"jqGridSelectFilled",{elem:e,options:c,cm:c.cm,
rowid:d,mode:c.mode,cmName:null!=c.cm?c.cm.name:c.name,iCol:c.iCol}));break;case "text":case "password":case "button":l="button"===d?"button":"textbox";e=document.createElement("input");e.type=d;k(e,c);e.value=b;"button"!==d&&(h?c.size||a(e).css({width:"100%","box-sizing":"border-box"}):c.size||(c.size=20));a(e).attr("role",l);break;case "image":case "file":e=document.createElement("input");e.type=d;k(e,c);break;case "custom":e=document.createElement("span");try{if(a.isFunction(c.custom_element)){var v=
c.custom_element.call(g,b,c);if(v instanceof jQuery||n.isHTMLElement(v)||"string"===typeof v)v=a(v).addClass("customelement").attr({id:c.id,name:c.name}),a(e).empty().append(v);else throw"editoptions.custom_element returns value of a wrong type";}else throw"editoptions.custom_element is not a function";}catch(t){"e1"===t&&m.call(g,r,"function 'custom_element' "+q.nodefined,u),"e2"===t?m.call(g,r,"function 'custom_element' "+q.novalue,u):m.call(g,r,"string"===typeof t?t:t.message,u)}}return e},checkDate:function(a,
c){var b={},d;a=a.toLowerCase();d=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/";a=a.split(d);c=c.split(d);if(3!==c.length)return!1;var l=-1,k,e=d=-1,g;for(g=0;g<a.length;g++)k=isNaN(c[g])?0:parseInt(c[g],10),b[a[g]]=k,k=a[g],-1!==k.indexOf("y")&&(l=g),-1!==k.indexOf("m")&&(e=g),-1!==k.indexOf("d")&&(d=g);k="y"===a[l]||"yyyy"===a[l]?4:"yy"===a[l]?2:-1;var f;g=[0,31,29,31,30,31,30,31,31,30,31,30,31];if(-1===l)return!1;f=b[a[l]].toString();2===k&&1===f.length&&(k=1);if(f.length!==
k||0===b[a[l]]&&"00"!==c[l]||-1===e)return!1;f=b[a[e]].toString();if(1>f.length||1>b[a[e]]||12<b[a[e]]||-1===d)return!1;f=b[a[d]].toString();!(k=1>f.length||1>b[a[d]]||31<b[a[d]])&&(k=2===b[a[e]])&&(l=b[a[l]],k=b[a[d]]>(0!==l%4||0===l%100&&0!==l%400?28:29));return k||b[a[d]]>g[b[a[e]]]?!1:!0},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(a){var c=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!n.isEmpty(a))if(a=a.match(c)){if(a[3]){if(1>a[1]||12<a[1])return!1}else if(23<a[1])return!1;
if(59<a[2])return!1}else return!1;return!0},checkValues:function(d,c,b,h,l){var k,e,g=this.p;e=g.colModel;var f=n.isEmpty,m=x.call(a(this),"edit.msg"),r=x.call(a(this),"formatter.date.masks");if(void 0===b){"string"===typeof c&&(c=g.iColByName[c]);if(void 0===c||0>c)return[!0,"",""];h=e[c];b=h.editrules;null!=h.formoptions&&(k=h.formoptions.label)}else k=void 0===h?"_":h,h=e[c];if(b){k||(k=null!=g.colNames?g.colNames[c]:h.label);if(!0===b.required&&f(d))return[!1,k+": "+m.required,""];g=!1===b.required?
!1:!0;if(!0===b.number&&(!1!==g||!f(d))&&isNaN(d))return[!1,k+": "+m.number,""];if(void 0!==b.minValue&&!isNaN(b.minValue)&&parseFloat(d)<parseFloat(b.minValue))return[!1,k+": "+m.minValue+" "+b.minValue,""];if(void 0!==b.maxValue&&!isNaN(b.maxValue)&&parseFloat(d)>parseFloat(b.maxValue))return[!1,k+": "+m.maxValue+" "+b.maxValue,""];var p;if(!(!0!==b.email||!1===g&&f(d)||(p=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
p.test(d))))return[!1,k+": "+m.email,""];if(!(!0!==b.integer||!1===g&&f(d)||!isNaN(d)&&0===d%1&&-1===d.indexOf(".")))return[!1,k+": "+m.integer,""];if(!(!0!==b.date||!1===g&&f(d)||(h.formatoptions&&h.formatoptions.newformat?(e=h.formatoptions.newformat,r.hasOwnProperty(e)&&(e=r[e])):e=e[c].datefmt||"Y-m-d",n.checkDate(e,d))))return[!1,k+": "+m.date+" - "+e,""];if(!0===b.time&&!(!1===g&&f(d)||n.checkTime(d)))return[!1,k+": "+m.date+" - hh:mm (am/pm)",""];if(!(!0!==b.url||!1===g&&f(d)||(p=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,
p.test(d))))return[!1,k+": "+m.url,""];if(!0===b.custom){if(!1!==g||!f(d))return a.isFunction(b.custom_func)?(d=b.custom_func.call(this,d,k,c),a.isArray(d)?d:[!1,m.customarray,""]):[!1,m.customfcheck,""]}else if(a.isFunction(b.custom)&&(!1!==g||!f(d)))return d=b.custom.call(this,l),a.isArray(d)?d:[!1,m.customarray,""]}return[!0,"",""]}})});
//# sourceMappingURL=grid.common.map
