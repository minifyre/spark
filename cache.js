export const cache=(fn,expiration=0)=>
{
	fn.cache={}
	if(expiration) fn.cacheExpiration={}

	return expiration?async (...args)=>
	{
		const key=JSON.stringify(args)

		if(fn.cacheExpiration[key]&&Date.now()<fn.cacheExpiration[key]+expiration)
			return fn.cache[key]

		const value=await fn(...args)

		fn.cacheExpiration[key]=Date.now()

		return fn.cache[key]=value

	}:async (...args)=>
	{
		const key=JSON.stringify(args)

		return fn.cache[key]||(fn.cache[key]=await fn(...args))
	}
}