export const filterArray = (array, flag) => {
    return array.filter((item) => {
        return item.done === flag;
    })
}

export const resetTodoListStatus = (array, flag) => {
    return array.map((item) => {
        if(flag){
            item.styleClass = "completed";
        } else {
            item.styleClass = "";
        }
        item.done = flag;
        return item;
    })
}