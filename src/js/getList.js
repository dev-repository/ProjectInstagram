export function getLists(){
    const data = localStorage.getItem("Instargram");
    if(!data){
        return [];
    }
    return (JSON.parse(data) ?? []).reverse();
}