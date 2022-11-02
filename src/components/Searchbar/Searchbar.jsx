import {
    Header,
  Form,
  FormButton,
  FormButtonLabel,
  FormInput,
} from './Searchbar.styled';

const Searchbar = () => {
    return (
    <Header>
        <Form>
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

export default Searchbar;