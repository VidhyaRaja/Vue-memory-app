import { createStore } from 'vuex';

const store = createStore({
    state(){
        return{
            memories: [
                {
                    id:'m1', 
                    image:'https://img.traveltriangle.com/blog/wp-content/uploads/2019/03/Switzerland-cover_9th-Mar.jpg',
                    title:'Trip into the mountains', 
                    description:'It was a really nice trip!'
                },
                {
                    id:'m2', 
                    image:'https://urbanoutdoors.com/wp-content/uploads/2021/04/surfer-gifts-scaled.jpg',
                    title:'Surfing the sea side', 
                    description:'Feeling the cool breeze!'
                },
                {
                    id:'m3', 
                    image:'https://static.straitstimes.com.sg/s3fs-public/articles/2021/06/11/yq-foodp1-11062021.jpg',
                    title:'Good Eating', 
                    description:'Really Tasty!'
                }
            ]
        }
    },
    mutations:{
        addMemory(state, memoryData){
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image:memoryData.imageUrl,
                description:memoryData.description
            }

            state.memories.unshift(newMemory);
        }
    },
    actions:{
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData)
        }
    },
    getters:{
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            }
        }
    }
});

export default store;