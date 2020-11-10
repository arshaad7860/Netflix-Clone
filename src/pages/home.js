import React from "react";
import { Feature,OptForm } from "../components";

import { FaqsContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere, at any time. With anytime Cancelations.</Feature.SubTitle>
          <OptForm>
          <OptForm.Input placeholder="Email address"></OptForm.Input>
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break></OptForm.Break>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
        
        </Feature>
        
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Home;
