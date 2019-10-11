export const asyncMap=function(arr,cb)
{
	return arr.reduce(async function(promiseArr,item,i,arr)
	{
		return [...await promiseArr,await cb(item,i,arr)]
	},Promise.resolve([]))
}