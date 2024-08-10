AFRAME.registerComponent("gameplay", {
    schema: {
        elementID:{
            type: "string",
            default: "#hurdle1"
        }
    },
    
    update: function(){
        this.collisionCheck(this.data.elementID)
    },

    collisionCheck: function(elementID){
        var element = document.querySelector(elementID)
        element.addEventListener("collide", e => {
            if(elementID.includes("#coin")){
                console.log("collided with " + elementID)
            }else if(elementID.includes("#hurdle")){
                console.log("collided with " + elementID)
            }
        })
    },
})