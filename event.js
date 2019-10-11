import {findParent} from './dom.js'

export const
// todo: import setter from somewhere
inputSetter=setter=>evt=>setter(evt.target.value),
handler=function(handlers,state,evt)
{
	const
	{target,type}=evt,
	attr=`data-${type}`,
	el=findParent(target,`[${attr}]`)

	if(!el) return

	const fn=handlers[el.getAttribute(attr)]

	return fn(state,new Proxy(evt,{get:(_,prop)=>prop==='target'?el:evt[prop]}))
}