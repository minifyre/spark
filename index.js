export * from './array.js'
export * from './async.js'
export * from './cache.js'
export * from './dom.js'
export * from './functional.js'
export * from './event.js'
export * from './id.js'
export * from './object.js'
//todo: eliminate
import * as ARRAY from './array.js'
import * as DOM from './dom.js'
import * as OBJ from './object.js'
export default {...ARRAY,...DOM,id,...OBJ}

import {id} from './id.js'

/* todo: spin most of this off into a functional, standalone lib
Ramda replacement (with semver)
	array union & diff & tuples?,
	dissoc (remove obj prop) & pick (cherry pick listed obj props),
	groupBy
	need to be able to do: curry(something,_,somethingElse)(fillinBlank)
	x=>(console.log(x),x) to passThru(console.log)
	//chain(ctx).lineTo(x,y).lineTo(x2,y2)
*/
//silo.fn.__=new Symbol()? (allows null & undefined stuff to not trick curry into thinking they are blanks)
//array.diff(cache.keys,newAreaAssetURLs).forEach(removeFromCache)
// repeating array proxy to get index++%array.length// (applicable to spherical game map) 

export const
//perfect for altering number props (on:{change:getSetter(colorSliderRGB).r})
getSetter=parent=>new Proxy(parent,{get:(obj,prop)=>val=>obj[prop]=val}),
// const {method}=preserveThis(classInstance);
mk=(...opts)=>assignNested({id:id()},...opts)