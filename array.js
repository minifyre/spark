export const
rand=(max,min=1,seed=Math.random())=>Math.floor(seed*(max-min+1)),// todo: this should be in numbers

shuffle=arr=>
{
	arr.map(()=>rand(arr.length-1,0))
	.forEach((j,i)=>[arr[i],arr[j]]=[arr[j],arr[i]])

	return arr
},
wrapInArray=x=>Array.isArray(x)?x:[x]//todo: use this in v