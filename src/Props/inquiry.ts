import { IvillaList } from "src/Interface/inquiry";

export const InquiryFormProps = (villaList: IvillaList) => {
    let data = villaList.data.map((ele) =>{
        return {
            id: ele.id,
            title: ele.attributes.name
        }
    })
    return data;
}