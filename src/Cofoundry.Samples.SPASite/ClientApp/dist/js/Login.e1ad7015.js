(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{a55b:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("content-panel",[e("h1",[t._v("Login")]),t.loginComplete?t._e():e("form",{on:{submit:function(o){return o.preventDefault(),t.submitLogin(o)}}},[e("form-group",{attrs:{title:"Email",id:"inputEmail"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.command.email,expression:"command.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email",required:""},domProps:{value:t.command.email},on:{input:function(o){o.target.composing||t.$set(t.command,"email",o.target.value)}}})]),e("form-group",{attrs:{title:"Password",id:"inputPassword"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.command.password,expression:"command.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.command.password},on:{input:function(o){o.target.composing||t.$set(t.command,"password",o.target.value)}}})]),e("validation-summary",{attrs:{errors:t.errors}}),e("form-actions",[e("submit-button",{attrs:{title:"Login"}})],1)],1),t.loginComplete?e("div",{staticClass:"message"},[e("p",[t._v("Login successful!")]),e("p",[e("router-link",{attrs:{to:"/"}},[t._v("View the cats")])],1)]):t._e()])},n=[],i=(e("cadf"),e("551c"),e("097d"),e("3786"),e("c06c")),r=e("405a"),s=e("195c"),m=e("56b7"),l=e("c377"),c={name:"login",components:{ValidationSummary:i["a"],FormGroup:r["a"],ContentPanel:s["a"],FormActions:m["a"],SubmitButton:l["a"]},data:function(){return{loginComplete:!1,command:{},errors:[]}},methods:{submitLogin:function(){var t=this;function o(){t.loginComplete=!0,t.errors=[]}function e(o){t.errors=o}this.$store.dispatch("auth/login",this.command).then(o).catch(e)}}},u=c,d=e("2877"),p=Object(d["a"])(u,a,n,!1,null,"16b4222e",null);p.options.__file="Login.vue";o["default"]=p.exports}}]);
//# sourceMappingURL=Login.e1ad7015.js.map