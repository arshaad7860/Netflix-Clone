import React from 'react'
import {Container,Title,List,Picture, Name, Item} from '../profiles/styles/profiles'

export default function Profiles({children,...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Profiles.Title =function ProfileTitle({children,...restProps}){
    return(
        <Title {...restProps}>{children}</Title>
    )
}

Profiles.List =function ProfileList({children,...restProps}){
    return(
        <List {...restProps}>{children}</List>
    )
}

Profiles.User =function ProfileUser({children,...restProps}){
    return(
        <Item {...restProps}>{children}</Item>
    )
}

Profiles.Picture =function ProfilePicture({src,...restProps}){
    return(
        <Picture {...restProps}  src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`} ></Picture>
    )
}

Profiles.Name =function ProfileName({children,...restProps}){
    return(
        <Name {...restProps}>{children}</Name>
    )
}

