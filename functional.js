export const
assignNested=function(obj,...srcs)
{
	const isObj=x=>x&&typeof x==='object'&&!Array.isArray(x)

	srcs.forEach(function(src)
	{
		if(![obj,src].every(isObj)) return

		Object.entries(src)
		.forEach(([key,val])=>
			!isObj(val)||!obj[key]?obj[key]=val:
			assignNested(obj[key],val))
	})

	return obj
},
clone=x=>JSON.parse(JSON.stringify(x)),
compose=(...fns)=>pipe(...fns.reverse()),
pipe=(...fns)=>arg=>fns.reduce((arg,fn)=>fn(arg),arg),//rename to chain?
curry=(fn,...xs)=>(...ys)=>fn(...xs,...ys),
curryN=(int,fn,...xs)=>(...ys)=>fn(...xs,...ys.slice(0,int)),

negate=fn=>(...args)=>!fn(...args),
passThru=fn=>arg=>(fn(arg),arg),

take=(x,fn)=>(...args)=>fn(...args.slice(x))//take the first X args