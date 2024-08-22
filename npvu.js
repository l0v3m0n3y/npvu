class npvu{
    constructor(){
        this.api = "https://api.npvu.me/v2"
        this.api_geo="https://geo.npvu.me"
        this.device_token=null
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async register(){
        let req=await fetch(`${this.api}/user/create`,{method:"POST",body:JSON.stringify({"version":"7.1.5","platform":"Windows","browser":"chrome","browser_lang":"ru","type":"browser-extension","user_version":"UVPNv3"}),headers: this.headers});
        let json=await req.json()
        this.headers["Authorization"]=await json["data"]["auth_token"]
        this.device_token=await json["data"]["device_token"]
        return json;
    }
     async servers_ping(){
        let req=await fetch(`${this.api}/servers/ping`,{method:"POST",body:JSON.stringify({"device_token":this.device_token}),headers: this.headers});
        return await req.json()
    }
    async my_ip(){
        let req=await fetch(`${this.api}/servers/protection/check`,{method:"GET"});
        return await req.json()
    }
    async my_geo(){
        let req=await fetch(`${this.api_geo}/geo/ip`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {npvu};
