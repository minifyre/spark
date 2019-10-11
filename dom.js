export const
box2style=({height,x:left,y:top,width})=>
	Object
	.entries({height,left,top,width})
	.map(([prop,val])=>prop+':'+val+'%;')
	.join(' '),
findParent=function(el,sel)
{
	while(el&&!el.matches(sel)) el=el.parentElement
	return el
}