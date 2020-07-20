import _ from "lodash";
export default function paginate(items,currentPage,pageSize){
    const firstIndex=(currentPage-1)*pageSize;
    let splitedItem=_(items).slice(firstIndex).take(pageSize).value();
    return splitedItem;
}