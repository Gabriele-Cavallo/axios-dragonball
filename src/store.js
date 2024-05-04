import { reactive } from "vue";

export const store = reactive({
    charactersList: [],
    allCharacters: [],
    charactersLimits: 10,
});