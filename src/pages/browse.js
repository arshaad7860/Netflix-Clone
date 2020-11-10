import React from 'react'
import { BrowseContainer } from '../containers/browse'
import {useContent} from '../hooks'
import selectionFilter from '../utils/selection-filter'


export default function Browse() {
    // we need the series and the films 

    const {series} =useContent('series')
    const {films} =useContent('films')

    // we need slides 
    const slides =selectionFilter({series,films});
    console.log(slides)
    //pass to the browse container


    return (
        <BrowseContainer slides={slides}></BrowseContainer>
    )
}