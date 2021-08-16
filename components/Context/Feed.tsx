import {useState, createContext} from 'react';

interface FeedContext {
  Tab: string,
  changeTab(tab: string): void; 
}

const FeedContext = createContext<FeedContext>({} as FeedContext);

export const FeedProvider = ({children} : {children: React.ReactNode}) => {
  const [Tab, setTab] = useState('Feed')

  function changeTab (tab: string){
    if(tab !== Tab){
      setTab(tab)
    }
  }

  return (
    <FeedContext.Provider value={{Tab: Tab, changeTab}}>
      {children}
    </FeedContext.Provider>
  )
}

export default FeedContext;