import {create} from "zustand";
import { immer } from 'zustand/middleware/immer';
import {devtools} from "zustand/middleware";
import axios from "axios";

type iState = {
  loading: boolean,
  error: null | string,
  data: Array<any> | null,
  cardData: Array<any> | null,
  categories: string,
  updateCategory: (cat: string) => void,
  fetchData: () => void,
}

const URI = 'http://localhost:3000/Data/data.json'

const useGetStats = create<iState>()(devtools(immer((set, get) => ({
    data:[],
    cardData: [],
    pixelData: [],
    loading: false,
    error: null,
    categories: 'hour',
    updateCategory: async (cat) => {
      set({ categories:cat })
    },
    fetchData: async () => {
      try {
        set({loading: true})
        const cat = get().categories;
        await axios.get(URI)
          .then(response => {
            if(response.data && cat) {
              set({
                data: response.data.tab1[cat],
              })
              set({loading: false})
            }
          })
      } catch (error:any) {
        set({ error: error.message})
      }
    },
  }
))))



export default useGetStats;