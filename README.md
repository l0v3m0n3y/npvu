# npvu
JavaScript library for geo.npvu.me
# main
```js
async function main(){
    const {npvu} = require('./npvu');
    const ip_info= new npvu();
    let req=await ip_info.my_ip()
    console.log(req)
}
main()
```
