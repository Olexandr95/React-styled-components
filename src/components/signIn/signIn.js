import React, { useEffect, useState } from "react";
import { BodyDiv, IconDiv,Icon, IconPosition, SecondaryText, IconText, Form, FormDiv, Input, InputCheckBox, CheckBoxDiv, Button, DivSpaceBetween, StyledLink} from "../styledComponents/styledComponents";

export const SignIn = () =>{
    return(
        <BodyDiv>
            <IconDiv>
                <IconPosition>
                    <Icon src={require("../../Icons/padlock.png")}></Icon>
                </IconPosition>
                <IconText>Sign in</IconText>
            </IconDiv>
            <Form>
                <FormDiv>
                    <Input placeholder='First name'></Input>
                    <Input placeholder='Last name'></Input>
                    <CheckBoxDiv>
                        <InputCheckBox type="checkbox"/>
                        <SecondaryText>Remeber me</SecondaryText>
                    </CheckBoxDiv>
                    <Button>Sign in</Button>
                    <DivSpaceBetween>
                        <StyledLink to='/'>Forgot password?</StyledLink>
                        <StyledLink to='/'>Don't have an account? Sign Up</StyledLink>
                    </DivSpaceBetween>
                </FormDiv>
            </Form>
        </BodyDiv>
    )
}