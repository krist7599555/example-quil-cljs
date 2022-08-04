// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('example_quil_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
example_quil_cljs.core.setup = (function example_quil_cljs$core$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(0),cljs.core.cst$kw$angle,(0)], null);
});
example_quil_cljs.core.update_state = (function example_quil_cljs$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),cljs.core.cst$kw$angle,(cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
example_quil_cljs.core.draw_state = (function example_quil_cljs$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((240));

quil.core.fill.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos(angle));
var y = ((150) * quil.core.sin(angle));
var tr__6525__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__6525__auto__);

return quil.core.ellipse(x,y,(20),(100));
}finally {quil.core.pop_matrix();
}});
example_quil_cljs.core.run_sketch = (function example_quil_cljs$core$run_sketch(){
example_quil_cljs.core.example_quil_cljs = (function example_quil_cljs$core$run_sketch_$_example_quil_cljs(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"example-quil-cljs",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(example_quil_cljs.core.update_state))?(function() { 
var G__6634__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(example_quil_cljs.core.update_state,args);
};
var G__6634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6635__i = 0, G__6635__a = new Array(arguments.length -  0);
while (G__6635__i < G__6635__a.length) {G__6635__a[G__6635__i] = arguments[G__6635__i + 0]; ++G__6635__i;}
  args = new cljs.core.IndexedSeq(G__6635__a,0,null);
} 
return G__6634__delegate.call(this,args);};
G__6634.cljs$lang$maxFixedArity = 0;
G__6634.cljs$lang$applyTo = (function (arglist__6636){
var args = cljs.core.seq(arglist__6636);
return G__6634__delegate(args);
});
G__6634.cljs$core$IFn$_invoke$arity$variadic = G__6634__delegate;
return G__6634;
})()
:example_quil_cljs.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(example_quil_cljs.core.setup))?(function() { 
var G__6637__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(example_quil_cljs.core.setup,args);
};
var G__6637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6638__i = 0, G__6638__a = new Array(arguments.length -  0);
while (G__6638__i < G__6638__a.length) {G__6638__a[G__6638__i] = arguments[G__6638__i + 0]; ++G__6638__i;}
  args = new cljs.core.IndexedSeq(G__6638__a,0,null);
} 
return G__6637__delegate.call(this,args);};
G__6637.cljs$lang$maxFixedArity = 0;
G__6637.cljs$lang$applyTo = (function (arglist__6639){
var args = cljs.core.seq(arglist__6639);
return G__6637__delegate(args);
});
G__6637.cljs$core$IFn$_invoke$arity$variadic = G__6637__delegate;
return G__6637;
})()
:example_quil_cljs.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(example_quil_cljs.core.draw_state))?(function() { 
var G__6640__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(example_quil_cljs.core.draw_state,args);
};
var G__6640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6641__i = 0, G__6641__a = new Array(arguments.length -  0);
while (G__6641__i < G__6641__a.length) {G__6641__a[G__6641__i] = arguments[G__6641__i + 0]; ++G__6641__i;}
  args = new cljs.core.IndexedSeq(G__6641__a,0,null);
} 
return G__6640__delegate.call(this,args);};
G__6640.cljs$lang$maxFixedArity = 0;
G__6640.cljs$lang$applyTo = (function (arglist__6642){
var args = cljs.core.seq(arglist__6642);
return G__6640__delegate(args);
});
G__6640.cljs$core$IFn$_invoke$arity$variadic = G__6640__delegate;
return G__6640;
})()
:example_quil_cljs.core.draw_state)], 0));
});
goog.exportSymbol('example_quil_cljs.core.example_quil_cljs', example_quil_cljs.core.example_quil_cljs);

if(cljs.core.truth_(cljs.core.some((function (p1__5625__5626__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5625__5626__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,example_quil_cljs.core.example_quil_cljs,cljs.core.cst$kw$host_DASH_id,"example-quil-cljs"], null));
}
});
goog.exportSymbol('example_quil_cljs.core.run_sketch', example_quil_cljs.core.run_sketch);
