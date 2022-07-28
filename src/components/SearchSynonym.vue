<script setup lang="ts">
import { getAutoComplete } from "../requestHelpers/autoComplete"
import { IautoComplete } from "../requestHelpers/types/IautoComplete"
import type { Ref } from 'vue'
import { ref } from 'vue'

const currentChemical: Ref<string> = ref("")
const suggestions: Ref<IautoComplete[]> = ref([])
const isLoading: Ref<boolean> = ref(false)

function getSuggestions(){
  isLoading.value = true
   getAutoComplete(currentChemical.value).then((r: IautoComplete[]) => {
    suggestions.value = r
    isLoading.value = false
})
}
</script>

<template>
  <div>
    <input v-model="currentChemical" @input="getSuggestions()" class="w-full" type="text" placeholder="Type your chemical"/>
    <div v-if="isLoading">
    Loading
    </div>
    <ul v-else class="list-none">
      <li v-for="suggestion in suggestions" :key="suggestion.synonymId" class="px-6 py-2 border-b border-gray-200 w-full hover:bg-blue-300">{{suggestion.name}}</li>
    </ul>
  </div>
</template>
