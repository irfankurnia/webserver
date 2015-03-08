define(["lib/react","lib/clib","lib/Autolinker","stores/ChatStore","actions/ChatActions","game-logic/engine"],function(e,t,n,r,i,s){function l(){var e=r.getState();return e.engine=s,e}function c(e,t){var r=this,i="msg-chat-message";switch(e.type){case"say":e.role==="admin"&&(i+=" msg-admin-message");var s=r.state.engine.username,f=new RegExp("@"+s+"(?:$|[^a-z0-9_-])","i");return s&&e.username!=s&&f.test(e.message)&&(i+=" msg-highlight-message"),a.li({className:i,key:"msg"+t},a.a({href:"/user/"+e.username,target:"_blank"},e.username,":")," ",a.span({className:"msg-body",dangerouslySetInnerHTML:{__html:n.link(u(e.message),{truncate:50,replaceFn:o})}}));case"mute":return i="msg-mute-message",a.li({className:i,key:"msg"+t},a.a({href:"/user/"+e.moderator,target:"_blank"},"*** <"+e.moderator+">"),e.shadow?" shadow muted ":" muted ",a.a({href:"/user/"+e.username,target:"_blank"},"<"+e.username+">")," for "+e.timespec);case"error":case"info":return i="msg-info-message",a.li({className:i,key:"msg"+t},a.span(null," *** "+e.message));default:}}var o=function(e,t){if(t.getType()!=="twitter")return!0;var n=t.getTwitterHandle();return'<a href="/user/'+n+'" target="_blank">@'+n+"</a>"},u=function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return function(t){return String(t).replace(/[&<>"']/g,function(t){return e[t]})}}(),a=e.DOM,f=120;return e.createClass({displayName:"Chat",getInitialState:function(){var e=l();return this.listLength=e.engine.chat.length,e},componentDidMount:function(){s.on({msg:this._onChange}),r.addChangeListener(this._onChange);var e=this.refs.messages.getDOMNode();e.scrollTop=e.scrollHeight},componentWillUnmount:function(){s.off({msg:this._onChange}),r.removeChangeListener(this._onChange);var e=this.refs.messages.getDOMNode().style.height;i.setHeight(e)},componentDidUpdate:function(e,t){if(t.engine.chat.length!=this.listLength){this.listLength=this.state.engine.chat.length;var n=this.refs.messages.getDOMNode(),r=n.scrollHeight-n.offsetHeight-n.scrollTop;r<f&&(n.scrollTop=n.scrollHeight)}},_onChange:function(){this.isMounted()&&this.setState(l())},_sendMessage:function(e){if(e.keyCode==13){var t=this.state.inputText;t.length>1&&t.length<500&&this._say(t)}},_say:function(e){i.say(e)},_updateInputText:function(e){i.updateInputText(e.target.value)},render:function(){var e=this,t=this.state.engine.chat.map(c,e),n;this.state.engine.username?n=a.input({className:"chat-input",onKeyDown:this._sendMessage,onChange:this._updateInputText,value:this.state.inputText,ref:"input",placeholder:"Type here..."}):n=a.input({className:"chat-input",ref:"input",placeholder:"Log in to chat...",disabled:!0});var r={height:this.state.height};return a.div({className:"messages-container"},a.ul({className:"messages",ref:"messages",style:r},t),n)}})});