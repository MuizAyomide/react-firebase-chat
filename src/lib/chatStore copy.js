import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  isCurrentUserBlocked: false,
  isRecieverBlocked: false,
 changeChat: (chatId, user)=>{

  const currentUser= useUserStore.getState().currentUser

  if(user.blocked.includes(currentUser.id)){
    return set({
      chatId,
      user:null,
      isCurrentUserBlocked:true,
      isRecieverBlocked:false,
    })
  }

  if(user.blocked.includes(user.id)){
    return set({
      chatId,
      user:user,
      isCurrentUserBlocked:false,
      isRecieverBlocked:true,
    })
  }
  },
  changeBlock: ()=>{
    set(state=>({...state,isRecieverBlocked:!state.isRecieverBlocked}))
 }
}));
