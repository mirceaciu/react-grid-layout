webpackJsonp([3],[function(t,e,n){(function(t){"use strict";var e=n(6),r=n(22),o=n(15),i=e.createClass({displayName:"AddRemoveLayout",mixins:[e.addons.PureRenderMixin],getDefaultProps:function(){return{className:"layout",cols:{lg:12,md:10,sm:6,xs:4,xxs:2},rowHeight:100}},getInitialState:function(){return{items:[0,1,2,3,4].map(function(t,e,n){return{i:t,x:2*t,y:0,w:2,h:2,add:t===n.length-1}}),newCounter:0}},createElement:function(t){var n={position:"absolute",right:"2px",top:0,cursor:"pointer"},r=t.add?"+":t.i;return e.createElement("div",{key:r,_grid:t},t.add?e.createElement("span",{className:"add text",onClick:this.onAddItem,title:"You can add an item by clicking here, too."},"Add +"):e.createElement("span",{className:"text"},r),e.createElement("span",{className:"remove",style:n,onClick:this.onRemoveItem.bind(this,r)},"x"))},onAddItem:function(){console.log("adding","n"+this.state.newCounter),this.setState({items:this.state.items.concat({i:"n"+this.state.newCounter,x:2*this.state.items.length%(this.state.cols||12),y:1/0,w:2,h:2}),newCounter:this.state.newCounter+1})},onBreakpointChange:function(t,e){this.setState({breakpoint:t,cols:e})},onLayoutChange:function(t){this.props.onLayoutChange(t),this.setState({layout:t})},onRemoveItem:function(t){console.log("removing",t),this.setState({items:r.reject(this.state.items,{i:t})})},render:function(){return e.createElement("div",null,e.createElement("button",{onClick:this.onAddItem},"Add Item"),e.createElement(o,e.__spread({onLayoutChange:this.onLayoutChange,onBreakpointChange:this.onBreakpointChange},this.props),r.map(this.state.items,this.createElement)))}});t.exports=i,n.c[0]===t&&n(16)(t.exports)}).call(e,n(14)(t))}]);