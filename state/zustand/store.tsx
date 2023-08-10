import { create } from 'zustand';
import { Post } from '../../type/type';

interface DataState{
    data: Post[],
    getdata: () => void
}

const samplePost: Post = {title:"gogo", content: "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"} 
// must on top of useStore definition

export const useStore = create<DataState>((set)=> ({
    data: [samplePost],
    getdata: async () => {
        try {
            const response = await fetch('https://api-node-test-one.vercel.app')
            const json = await response.json()
            set({data: json})
            }
        catch (error){
              console.log(error)
            }
    }
}))


// export default useStore //cannot use



