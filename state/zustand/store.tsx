import { create } from 'zustand';
import { Post } from '../../type/type';

interface DataState{
    data: Post[],
    getdata: () => void,
    filterItem: (id?: string) => void,
}

const samplePost: Post = {title:"gogo", content: "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg", published: false} 
// must on top of useStore definition

export const useStore = create<DataState>((set,get)=> ({
    data: [samplePost],

    getdata: async () => {
        try {
            const response = await fetch('https://web-app-next-lac.vercel.app/api/GetPost/1')
            const json = await response.json()
            set({data: json})
            }
        catch (error){
              console.log(error)
            }
    },

    filterItem: (id) => {
        const filter = get().data.filter(item =>{
            return item.id == id
        })
        set({data: filter})
        console.log(filter)
    },
}))


// export default useStore //cannot use



