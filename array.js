const rand=(max,min=1,seed=Math.random())=>Math.floor(seed*(max-min+1))// todo: this should be in numbers

export const
//note: helpful for grouping getting canvas context.getImageData() into [[r,g,b,a],...]
chunk=(chunkSize,arr)=>
{
	const newArrLength=Math.ceil(arr.length/chunkSize)

	return Array(newArrLength)
	.fill(chunkSize)
	.map((size,i)=>i*size)
	.map(start=>arr.slice(start,start+chunkSize))
},
entries2obj=entries=>entries.reduce((obj,[key,val])=>Object.assign(obj,{[key]:val}),{}),
//note: useful for dropping the alpha channel from canvas context.getImageData()
filterEveryNth=(n,arr)=>arr.filter((_,i)=>((i+1)%n)),
intersection=(arr1,arr2)=>arr1.filter(val=>arr2.includes(val)),
//todo: add multi-sort
shuffle=arr=>
{
	arr.map(()=>rand(arr.length-1,0))
	.forEach((j,i)=>[arr[i],arr[j]]=[arr[j],arr[i]])

	return arr
},
toggle=(val,arr)=>//add val if it doesn't exist, or remove it if it does
{
	const i=arr.indexOf(val)

	i===-1?arr.concat([val]):arr.slice().splice(i,1)

	return arr
},
//note: this only works on strings & numbers (not complex objects)
unique=arr=>arr.filter((item,i,arr)=>arr.indexOf(item)===i),
wrapInArray=x=>Array.isArray(x)?x:[x],//todo: use this in v
zipList=(arr,i)=>[arr.slice(0,i),arr[i],arr.slice(i+1)]
