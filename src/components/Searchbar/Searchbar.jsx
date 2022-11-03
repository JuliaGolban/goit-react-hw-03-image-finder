import React, { Component } from 'react';
import {
    Header,
    Form,
    FormButton,
    FormButtonLabel,
    FormInput,
} from './Searchbar.styled';

export default class Searchbar extends Component {

    render() {
        return (
            <Header>
                <Form onSubmit={this.handleSubmit}>
                    <FormButton type="submit">
                        <FormButtonLabel>Search</FormButtonLabel>
                    </FormButton>
                    <FormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        )
    }
}