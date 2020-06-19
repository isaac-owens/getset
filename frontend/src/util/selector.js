

export const getChallangesByCategory = (challenges, category)=>{
    const obj = [];
    for (let i = 0; i < challenges.length; i++) {
        try{
            if(category._id === challenges[i].category){
                obj.push(challenges[i]);
            }
        }catch{
        }
    }
    return obj
}