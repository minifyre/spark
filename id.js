export const id=()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,idHelper)

export const
idHelper=c=>(c^random()[0]&15>>c/4).toString(16),
random=()=>crypto.getRandomValues(new Uint8Array(1))