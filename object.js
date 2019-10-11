//utils
const
mkObjFn=(methodName,equivalentFn)=>
	(arrOrObj,fn)=>Array.isArray(arrOrObj)?
		arrOrObj[methodName](fn):
		equivalentFn(arrOrObj,fn),
//todo: rename fn to be more descriptive
mkSimpleObjFn=methodName=>mkObjFn
(
	methodName,
	(obj,fn)=>Object.keys(obj)[methodName](key=>fn(obj[key],key,obj))
)

export const
//custom, public utils
entries2obj=(obj,[key,val])=>Object.assign(obj,{[key]:val}),
omit=(keys,obj)=>Object.entries(obj)
	.filter(([key])=>!keys.includes(key))
	.reduce(entries2obj,{}),
//REPLICATE ARRAY FUNCTIONS
//boolean returns
every=mkSimpleObjFn('every'),
includes=mkObjFn('includes',(obj,val)=>Object.values(obj).includes(val)),
some=mkSimpleObjFn('some'),
//partial returns
filter=mkObjFn
(
	'filter',
	(obj,fn)=>Object.entries(obj)
		.filter(([key,val])=>fn(val,key,obj))
		.reduce(entries2obj,{})
),
//retrieve
find=mkObjFn('find',(obj,fn)=>(Object.entries(obj).find(([key,val])=>fn(val,key,obj))||[])[1]),
//aka findKey
findIndex=mkObjFn('findIndex',(obj,fn)=>(Object.entries(obj).find(([key,val])=>fn(val,key,obj))||[-1])[0]),
//loop
forEach=mkSimpleObjFn('forEach'),
map=mkObjFn
(
	'map',
	(obj,fn)=>Object.entries(obj)
		.map(([key,val])=>[key,fn(val,key,obj)])
		.reduce(entries2obj,{})
),
reduce=(arrOrObj,fn,accumulator)=>Array.isArray(arrOrObj)?
	array.reduce(fn,accumulator):
	Object.entries(arrOrObj)
		.reduce((newObj,[key,val])=>fn(newObj,val,key,arrOrObj))