import React from "react";
import Title from "./Title/Title";
import TabsBlock from "./Tabs/Tabs";
import Cards from '../Statistics/TopPersentage/CardsPersentage'


const HeaderBlock = () => {
    return (
        <div>
            <Title/>
            <TabsBlock/>
            <Cards/>
        </div>
    )
}

export default HeaderBlock;