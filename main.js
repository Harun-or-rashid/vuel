
Vue.component('first',{
    template:  '<li><slot></slot></li>'
});
var Vue= new Vue({
    el:'#ringku',
    data:data,
    methods:{
        addMember(){
      this.members.push(this.newName)
    // alert("hi")
    }

}})