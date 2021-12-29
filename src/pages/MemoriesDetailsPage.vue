<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title: 'Loading...'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">Could not find a memory for the given ID </h2>
    <memory-over-view v-else 
    :title="loadedMemory.title"
    :image="loadedMemory.image"
    :description="loadedMemory.description"></memory-over-view>
    </base-layout>
</template>

<script>
import MemoryOverView from '../components/memories/MemoryOverView.vue';

export default {
    components:{
        MemoryOverView
    },
    data(){
        return{
            memoryId: this.$route.params.id,
        }
    },
    computed:{
        loadedMemory(){
            return this.$store.getters.memory(this.memoryId)
        }
    },
    watch:{
        $route(currentRoute){
            this.memoryId = currentRoute.params.id;
        }
    }
}
</script>
