import {create} from "zustand";
import { immer } from 'zustand/middleware/immer';
import {devtools} from "zustand/middleware";
import axios from "axios";

type iState = {
  data: Array<any> | null,
  fetchPixels: () => void,
  updateCategory: (cat: string) => void,
  loading: boolean,
  error: null | string,
  categories: string,
}

const URI = 'http://localhost:3000/Data/pixelStats.json'

const usePixelState = create<iState>((set,get) => ({
  categories: 'hour',
  loading: false,
  error: null,
  data:[],
  updateCategory: async (cat) => {
    set({ categories:cat })
  },
  fetchPixels: async () => {
    try {
      set({loading: true})
      const cat = get().categories;
      await axios.get(URI)
        .then(response => {
          if(response.data && cat) {
            set({
              data: response.data.pixels[cat],
            })
            set({loading: false})
          }
        })
    } catch (error:any) {
      set({ error: error.message})
    }
  },

}))

export default usePixelState;