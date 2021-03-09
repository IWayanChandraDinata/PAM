const tinggiawal = {
    tinggi : 0
}


export const counterTinggi = (state = tinggiawal , action) => {
    switch(action.type){
        case "TAMBAH": 
        return {
            ...state ,
            tinggi : state.tinggi >=400 ? 400 : state.tinggi + 50 
        }
        case "KURANG":
        return {
            ...state ,
            tinggi : state.tinggi <= 0 ? 0 : state.tinggi - 50
        }
        default :
        return state 
    }
}