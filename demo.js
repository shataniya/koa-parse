const querystring = require("querystring")

module.exports = function(){
    return async function paese(ctx,next){
        if(ctx.method === "POST"){
            var data = await post(ctx)
            if(data){
                ctx.parse = querystring.parse(data)
            }
        }
        await next()
    }
}

function post(ctx){
    return new Promise(function(resolve,reject){
        var s = ""
        ctx.req.on("error",function(err){
            console.log(err)
        }).on("data",function(chunk){
            s += chunk
        }).on("end",function(){
            resolve(s)
        })
    })
}